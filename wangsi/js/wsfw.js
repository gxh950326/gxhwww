/**
 * Created by gxh on 2016/12/23.
 */
$(function () {


(function () {
    var oh = $(window).height()-80;
    $(".content_wrap,.con_xiang,.con_one_fixed ul li").css({height:oh});

    $(window).resize(function () {

        oh = $(window).height()-80;
        $(".content_wrap,.con_xiang,.con_one_fixed ul li").css({height:oh});
        lunbo();
    })



    var index = 0;
    var scrollFunc = function (event) {

        var e = event||window.event;

        if(e.wheelDelta){
            if(e.wheelDelta>0){
                gotop()
            }else if(e.wheelDelta<0){
                gobottom()
            }
        }else if(e.detail){
            if(e.detail>0){

            }else if(e.detail<0){


            }
        }

    }


    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",scrollFunc,false)

    }

    window.onmousewheel = document.onmousewheel = scrollFunc;



    var go = false;
    var timer = null;
    var pd = 0;

    function gotop(){
        if(pd<1){
            clearTimeout(timer)
            timer = setTimeout(function () {
                pd++;
            },100)
        }else{

            if(go==false){
                go=true;
                index--;
                if(index<0){
                    index = 0;
                }
                lunbo();
            }
        }
        setTimeout(pddh,500)


    }


    function gobottom(){
        if(pd<1){
            clearTimeout(timer)
            timer = setTimeout(function () {
                pd++;
            })
        }else{

            if(go==false){
                go=true;
                index++;
                if(index>$(".con_xiang").size()-1){
                    index= $(".con_xiang").size()-1
                }
                lunbo();

            }
        }
        setTimeout(pddh,500)

    }


    function lunbo(){

        $(".content").animate({top:-index*oh},500, function () {
            go=false;
            pd = 0;

        })
        oli.removeClass("now1").eq(index).addClass("now1");


    }

    var oli = $(".header_nav ul li");
    oli.click(function () {
        index = $(this).index();
        lunbo();
        setTimeout(pddh,300)
    });





    function pddh(){

        if(index==2){
            $(".con_three_img").show().addClass('animated bounceInLeft')
        }else{
            setTimeout(function () {
                $(".con_three_img").hide().removeClass('animated bounceInLeft')
            },400)
        }

        if(index==3){
            $(".con_four_img").show().addClass('animated bounceInRight')
        }else{
            setTimeout(function () {
                $(".con_four_img").hide().removeClass('animated bounceInRight')
            },400)
        }

        if(index==4){
            $(".con_five_img").show().addClass('animated bounceInDown')
        }else{
            setTimeout(function () {
                $(".con_five_img").hide().removeClass('animated bounceInDown')
            },400)
        }


    }




})();









    (function () {
        var oul = $(".con_one_fixed ul");
        var oxb = $(".xb");
        var len = $(".xb").length;
        var ow = $(window).width();
        var oban = $(".con_one");
        var i = 0;
        var k = 0;
        $(window).resize(function () {
            ow = $(window).width();
            go();
        })
        oxb.click(function () {
            i = $(this).index();
            oul.animate({left:-i*ow},600);
            k=i;
            oxb.removeClass("now").eq(k).addClass("now")
        })
        function go(){
            i++;
            if(i>len){
                i=1
                oul.animate({left:0},0);
            }
            oul.animate({left:-i*ow},600)
            k++;
            if(k>len-1){
                k=0;
            }
            oxb.removeClass("now").eq(k).addClass("now")
        }

        var stop=setInterval(go,3500);
        oban.hover(function () {
            clearInterval(stop)
        }, function () {
            clearInterval(stop)
            stop=setInterval(go,3500);
        })

    })();











})