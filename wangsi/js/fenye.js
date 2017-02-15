/**
 * Created by gxh on 2016/12/28.
 */


var GLOBAL = GLOBAL || {};
$(function () {
    $("#header").load("index-top.html");
    $("#fooder").load("fooder.html");








    GLOBAL.articlType = getUrlParams("type");
    //alert(GLOBAL.articlType)
    GLOBAL.articleId = getUrlParams("articleId");

    jiazai();

})


function jiazai(){
    //if( GLOBAL.articlType){
    var retule =articleData[GLOBAL.articlType+GLOBAL.articleId].data;
    //alert(GLOBAL.articleId)
    //console.log(JSON.stringify(articleData[getUrlParams("type") + getUrlParams("articleid")]));
    $("#beijing").attr("style",retule.bgPhoto);
    $("#logo").attr("src",retule.logo);
    $("#zitiyanse").css("color",retule.ztys);
    $("#typeTitle").text(retule.typeTitle);
    $('#typeEntitle').text(retule.typeEntitle);
    $("#banphoto").attr("src",retule.banner);
    $('#cenphoto').attr("src",retule.cen);
    $("#canphoto").attr("src",retule.can);
    //}
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
