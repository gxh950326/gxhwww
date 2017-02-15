/**
 * Created by gxh on 2016/12/22.
 */
window.onload = function () {

    var oli = document.getElementsByClassName("weixin_ewm")[0];
    var otu = document.getElementsByClassName("weixin_ewm_div")[0];

    oli.onmouseover = function () {
        otu.style.height=141+"px";
    }
    oli.onmouseout = function () {

        otu.style.height=0;
    }


}