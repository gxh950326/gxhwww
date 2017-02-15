/**
 * Created by gxh on 2016/12/27.
 */
$(function () {
    $("#header").load("index-top.html")
    $("#fooder").load("fooder.html");





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