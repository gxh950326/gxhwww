/**
 * Created by gxh on 2016/12/26.
 */
$(function () {

    $("#header").load("index-top.html");
    $("#fooder").load("fooder.html");




    var oul = $(".centent_three_banner_wrap ul");
    var ow = $(".centent_three_banner_wrap ul li").width();
    var prev = $(".centent_three_banner_btn_L");
    var next = $(".centent_three_banner_btn_R");
    var len = $(".centent_three_banner_wrap ul li").length;
    var oli = $(".centent_three_banner_wrap ul li");




    var i = 0;
    var dangqian = null;
    var pd = false;

    $(window).resize(function () {
        ow = $(".centent_three_banner_wrap ul li").width();
        oul.stop().animate({left:-i*ow});
    })


    dangqian = oli.eq(0);
    dh();
    textdh();

    function lunbo(){
        i++;
        if(i>len-1){
            i=1;
            oul.stop().animate({left:0},0);
        }
        oul.stop().animate({left:-i*ow});

        setTimeout(function () {
            oli.eq(i).siblings().find("img").hide();
            oli.eq(i).siblings().find(".wp_text_bt").hide();
            oli.eq(i).siblings().find(".wp_btn").hide();
        },500)
        dangqian = oli.eq(i);
        textdh();
        zxdh();
        setTimeout(function () {
            pd=false;
        },2300)
    }


        next.click(function () {

            if(pd==false){
                pd=true
                lunbo();
            }else{
                return;

            }

        });




     prev.click(function () {
         if(pd==false){
             pd=true;
             i--;
             if(i<0){
                 i=len-2;
                 oul.stop().animate({left:-(len-1)*ow},0);
             }
             oul.stop().animate({left:-i*ow});
             setTimeout(function () {
                 oli.eq(i).siblings().find("img").hide();
                 oli.eq(i).siblings().find(".wp_text_bt").hide();
                 oli.eq(i).siblings().find(".wp_btn").hide();
             },500)
             dangqian = oli.eq(i);
             textdh();
             zxdh();
             setTimeout(function () {
                 pd=false
             },2300);
         }else{
             return
         }

    })



    function zxdh(){

        if(i==0){
            dh()
        }else if(i==1){
            dh2();
        }else if(i==2){
            dh3();
        }else if(i==3){
            dh4();
        }else{
            dh5();
        }

    }




    function textdh(){
        dangqian.find(".wp .wp_text .wp_text_bt").show().removeClass("fadeInDown").addClass("animated fadeInDown");
        setTimeout(function () {

            dangqian.find(".wp .wp_text .wp_btn").show().removeClass("fadeInDown").addClass("animated fadeInDown");

        },500)




    }

    function dh(){
        //dangqian.find(".wp .wp_pic img").hide();

            dangqian.find(".wp .wp_pic img").each(function (i) {

                setTimeout(function () {
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInLeft").addClass("animated fadeInLeft");
                },300*(i+1)+500)
            })
    }

    function dh2(){

        dangqian.find(".wp .wp_pic img").each(function (i) {

          setTimeout(function () {
                if(i ==0||i==3){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInDown").addClass("animated fadeInDown");
                }else if(i==1||i==2){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInUpn").addClass("animated fadeInUp");
                }
            },300*(i+1)+500)
        })
    }

    function dh3(){

        dangqian.find(".wp .wp_pic img").each(function (i) {

            setTimeout(function () {
                if(i==0){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInLeft").addClass("animated fadeInLeft");
                }else if(i==1){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInRight").addClass("animated fadeInRight");
                }

            },300*(i+1)+500)
        })
    }

    function dh4(){
        dangqian.find(".wp .wp_pic img").each(function (i) {

        setTimeout(function () {
                if(i==0||i==1||i==2){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInLeft").addClass("animated fadeInLeft");
                }else if(i==3){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInRight").addClass("animated fadeInRight");
                }else if(i==4){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInDown").addClass("animated fadeInDown");
                }

            },300*(i+1)+500)
        })
    }

    function dh5(){
        dangqian.find(".wp .wp_pic img").each(function (i) {
           setTimeout(function () {
                if(i==0||i==1){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInLeft").addClass("animated fadeInLeft");
                }else if(i==3||i==2||i==4){
                    dangqian.find(".wp .wp_pic img").eq(i).show().removeClass("fadeInRight").addClass("animated fadeInRight");
                }
            },300*(i+1)+500)
        })
    };


    (function () {

        var otu = $(".bg_img_wrap");


        $(document).bind("mousemove", function (ev) {
            var ev = ev||event;
            var disx = ev.pageX/60;
            otu.css({backgroundPositionX:-50+disx+"px"});
        })


    })();










})