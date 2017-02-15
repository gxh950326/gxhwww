/**
 * Created by gxh on 2016/12/21.
 */
$(function () {


    (function () {

        var oli =  $(".header_nav ul li");
        var ogang1 = $(".gang1");
        var ogang2= $(".gang2");
        var w = $(".header_nav ul li:first").width();
        ogang1.css({width:w})
        var i;
        var owidth=0;
        var ohash = window.location.hash.substring(1)-1;

        if(ohash>=0){
            i=ohash;
            var index = oli.eq(i).position().left;
            ogang1.stop().animate({width:owidth,left:index+20},100);

            owidth = oli.eq(i).width();
            var index2 = oli.eq(i).position().left;
            ogang2.css({width:owidth,left:index2+20});
            oli.removeClass("now1");
            oli.eq(i).addClass("now1");
        }

        var index3

        oli.hover(function () {
            i=$(this).index();
            owidth = $(this).width();
            var index = oli.eq(i).position().left;
            ogang1.stop().animate({width:owidth,left:index+20},100);
            oli.removeClass("now2");
            oli.eq(i).addClass("now2");


        }, function () {
            owidth  = ogang2.width();
            index3 = ogang2.position().left;
            ogang1.stop().animate({width:owidth,left:index3},100);
            oli.removeClass("now2");

        })


        /*让上一页的可以对应起来*/
        oli.click(function () {
            owidth  = ogang2.width();
            index3 = ogang2.position().left;
            ogang1.stop().animate({width:owidth,left:index3},100);
            oli.removeClass("now2");

        })


    })();



    (function () {
        var wrap = $(".header_wrap");
        var pd = false;




        if($(window).scrollTop()<=200) {
            wrap.css({top: 0})
        }

        $(window).scroll(function () {

            if(pd == false){
                var scrollFunc = function (event) {
                    var e = event||window.event;
                    if(e.wheelDelta){
                        if(e.wheelDelta>0){
                            wrap.css({top:0})
                        }else if(e.wheelDelta<0){
                            //alert(2)
                            if($(window).scrollTop()>200) {
                                wrap.css({top: -70})
                            }
                        }

                    }else if(e.detail){
                        if(e.detail>0){

                            wrap.css({top:-70})


                        }else if(e.detail<0){
                            wrap.css({top:0})
                        }
                    }
                }


                if(document.addEventListener){
                    document.addEventListener("DOMMouseScroll",scrollFunc,false)
                }
                window.onmousewheel = document.onmouseWheel = scrollFunc;

            }


        })





        $(".cbl_three").click(function () {
            pd = true;

            $("body,html").animate({scrollTop:0});
            wrap.animate({top:0}, function () {
                pd = false;

            })




        })

    })();



    (function () {

        var ocblimg = $(".cbl_one_img");
        var ocbl = $(".cbl_one")
        ocbl.hover(function () {
            var index = $(this).index();
            ocblimg.eq(index).parent().css({width:175,background:"#e4392a"});
        }, function () {
            ocbl.css({width:50,background:"#000022"});
        })

        var oewm = $(".cbl_two_wrap");
        var oewm_img = $(".cbl_two_ewm")
        oewm.hover(function () {
            oewm_img.animate({height:141})
        }, function () {
            oewm_img.animate({height:0})
        });








    })()








})