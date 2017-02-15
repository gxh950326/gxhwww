/**
 * Created by gxh on 2016/12/21.
 */
$(function () {

    $("#header").load("index-top.html");
    $("#fooder").load("fooder.html");



    /*bannerÍ¼Ä£¿é*/
    (function () {

        var oli = $(".banner_img");
        var oul = $(".banner_wrap");
        var oban = $(".banner_DQ");
        var prev = $(".banner_btn_prev");
        var next = $(".banner_btn_next");
        var len = $(".banner_img").length;
        var ow = $(".banner_img").width();
        var i = 0;
        var dangqian;

        $(window).resize(function () {
            ow = $(".banner_img").width();
            oul.stop().animate({left:-i*ow},400);
        })




        function go(){
            i++;
            if(i>len-1){
                i=1;
                oul.animate({left:0},0)
            }
            oul.stop().animate({left:-i*ow},400);
            dangqian = oli.eq(i);
            donghua();

        }


        var stop = setInterval(go,3000);
        oban.hover(function () {
            clearInterval(stop)
        }, function () {
            clearInterval(stop);
            stop = setInterval(go,3000);

        })

        next.click(function () {
           go();
        })
        prev.click(function () {
            i--;
            if(i<0){
                i=len-2;
                oul.animate({left:-(len-1)*ow},0);
            }
            oul.stop().animate({left:-i*ow},400);
            dangqian = oli.eq(i);
            donghua();
        })

        function donghua(){
            setTimeout(function () {
                $(".banner_img").find("p").hide();
            },500)
            setTimeout(function () {
                dangqian.find("p").show().eq(0).removeClass("fadeInDown").addClass("animated fadeInDown");
                dangqian.find("p").show().eq(1).removeClass("fadeInDown").addClass("animated fadeInRight");
                dangqian.find("p").show().eq(2).removeClass("fadeInDown").addClass("animated fadeInUp");
                dangqian.find("p").show().eq(3).removeClass("fadeInDown").addClass("animated fadeInUp");
            },501)
        }

        dangqian = $(".banner_img").eq(0);
        donghua();


    })();





    /*µØÍ¼Ä£¿é*/


    (function () {
     var open  =    $(".ditu_zhankai");
        var down = $(".ditu_guanbi");
        var mapzk = $(".ditu_wrap_guanbi");
        var mapgb = $(".ditu_wrap_zhankai");

        open.click(function () {
            mapzk.css({display:"block"});
            mapgb.css({display:"none"});
        })
        down.click(function () {
            mapzk.css({display:"none"});
            mapgb.css({display:"block"});

        })

    })();























})