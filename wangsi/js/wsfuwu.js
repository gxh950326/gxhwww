/**
 * Created by gxh on 2016/12/26.
 */
$(function () {
    $("#header").load("index-top.html");
    $("#fooder").load("fooder.html");






        function dh(){
            var oh = $(window).height();
            var scrtop = $(window).scrollTop();


            var conTwoimg1 = $(".content_two_ulli_img1").offset().top;
            if(oh+scrtop>=conTwoimg1){
                $(".con_two_img").find("img").each(function (i) {
                    setTimeout(function () {
                        $(".content_two_ulli_img1").find("img").eq(i).css({opacity:1});
                        $(".content_two_ulli_img2").find("img").eq(i).css({opacity:1});
                        $(".content_two_ulli_img3").find("img").eq(i).css({opacity:1});
                    },300*i)
                })
            }



            var conThreeimg = $(".content_three_ulli").offset().top;
            if(oh+scrtop>=conThreeimg){
                $(".content_three_ulli_img").find("img").each(function (i) {
                    setTimeout(function () {
                        $(".content_three_ulli_img").find("img").eq(i).css({opacity:1})
                    },350*i)
                })
            }



            var conFivelc = $(".content_five_liucheng_bg").offset().top;
            if(oh+scrtop>=conFivelc){
                $(".content_five_liucheng_tb").find("div").each(function (i) {
                    setTimeout(function () {
                        $(".content_five_liucheng_tb").find("div").eq(i).css({opacity:1})
                    },300*i+500)
                })
            }


        }
        dh();


        $(window).scroll(function () {
            dh()

        });










    (function () {
        var odianji = $(".content_four_ban_L ul li");
        var oxb = $(".xb");
        var oli1 = $(".content_four_ban_cen_text");
        var oli2 = $(".content_four_ban_shou ul");


        odianji.hover(function () {
            var i = $(this).index();
            oxb.removeClass("xbnow2").eq(i).addClass("xbnow2");
        }, function () {
            oxb.removeClass("xbnow2");
        })

        odianji.click(function () {
            var index = $(this).index();
            oxb.removeClass("xbnow").eq(index).addClass("xbnow");
            odianji.removeClass("dianjinow").eq(index).addClass("dianjinow");
            oli1.removeClass("now").eq(index).addClass("now");
            oli1.removeClass("fadeInDown").eq(index).addClass("animated fadeInDown");
            oli2.animate({left:-index*140})
        })
    })();



    (function () {

        var oli = $(".content_six_ul li");
        var ofa = $(".FangAn");
        oli.hover(function () {
            var index = $(this).index();
            ofa.removeClass("nnow").eq(index).addClass("nnow")
            ofa.stop().animate({top:0}).eq(index).stop().animate({top:10});
        }, function () {
            ofa.stop().animate({top:0});
            ofa.removeClass("nnow")
        })




    })();




    (function () {
        var oli = $(".content_six_ul ul li");
        oli.click(function () {
            window.open("fwhy.html?type=fuwu"+$(this).attr("articleId")+"#3","_blank");
        })
    })();










})