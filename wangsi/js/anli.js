/**
 * Created by gxh on 2016/12/28.
 */
$(function () {
    $("#header").load("index-top.html");
    $("#fooder").load("fooder.html");






    var oli = $(".aaa");
    var otext = $(".text");
    //oli.hover(function () {
    //    var index = $(this).index();
    //    otext.css({opacity:0}).eq(index).css({opacity:1});
    //}, function () {
    //    otext.css({opacity:0})
    //})


    //
    //$("#ht").delegate(".aaa", "hover", function(){
    //
    //    if(event.type=='mouseover'){
    //        var index = $(this).index();
    //        $(".text").css({opacity:0}).eq(index).css({opacity:1});
    //    }else{
    //        $(".text").css({opacity:0})
    //    }
    //
    //});
    $(".aaa").live("mouseover", function () {
        var index = $(this).index();
        $(".text").css({opacity:0}).eq(index).css({opacity:1});
    }).live("mouseout", function () {
        $(".text").css({opacity:0});
    })





    var k=0;
    var num;
    function jz(){
        var xhr = new XMLHttpRequest();


        xhr.open("get","js/list.json");

        xhr.send(null);

        if(k==0){
            $("#ht").html("");
        }

        xhr.onreadystatechange = function () {

            if(xhr.readyState ==4){

                if(xhr.status == 200){
                    var jieshou = xhr.responseText;

                    var jieshouone = JSON.parse(jieshou);

                    var jishoutwo = jieshouone[k].data.list;

                    for(var i = 0;i<jishoutwo.length;i++){
                        var item = $("#moban").html()
                            .replace("$articleid$",jishoutwo[i].sysId)
                            .replace("$cover$",jishoutwo[i].coverImg)
                            .replace("$title$",jishoutwo[i].title)
                        $("#ht").append(item);
                    }

                    num = Math.ceil(jieshouone[k].data.count/jieshouone[k].data.pageSize)

                    if(k>=num-1){
                        $(".move").css({opacity:0.5})
                        $(".move p").text("没有更多了");
                    }
                    k++;
                }
            }
        }
    }
    jz();
    $(".move").click(function () {
       if(k<num){
           jz();
       }
    })


    $("#ht").delegate(".aaa", "click", function(){
        //window.open("XN-List page.html?type=xiaoniaoNews" +getUrlParams("type") + $(this).attr("articleId"),"_blank");
        window.open("fenye.html?type=xinyemian" + $(this).attr("articleId")+"#4","_blank");
        //console.log($(this).attr("articleId"));
    });








})





