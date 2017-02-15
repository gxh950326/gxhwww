/**
 * Created by gxh on 2017/1/4.
 */


var GLOBAL = GLOBAL || {};
$(function () {
    $("#header").load("index-top.html");
    $("#fooder").load("fooder.html");

    $(".li-top").click(function () {
        $(this).toggleClass("top1").next().slideToggle();

        $(this).parent().siblings().find(".li-bottom").slideUp().prev().removeClass("top1")
    })

    GLOBAL.articlType = getUrlParams("type");
    //alert(GLOBAL.articlType)
    GLOBAL.articleId = getUrlParams("articleId");

    jiazai();

})

function jiazai(){

    var retule =articleData[GLOBAL.articlType+GLOBAL.articleId].data;

    $("#banphoto").attr("src",retule.banimg);
    $("#weizhi").text(retule.weizhitext);
    $("#hyfx1").text(retule.hyfx1text);
    $("#hyfx2").text(retule.hyfx2text);
    $("#hyfx3").text(retule.hyfx3text);
    $("#hyfx4").text(retule.hyfx4text);
    $("#alfx1").text(retule.alfx1text);
    $("#alfx2").text(retule.alfx2text);
    $("#alfx3").text(retule.alfx3text);
    $("#alfx4").text(retule.alfx4text);
}

/*传过来的参数*/
function getUrlParams(name){
    var reg = new RegExp("(^|&)"+ name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);

    if(r != null)
        return r[2];

    else
        return "" ;
}