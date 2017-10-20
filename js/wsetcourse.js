/**
 * Created by PING on 2017/9/27.
 */
$(function() {
    $(".carousel").carousel({
        interval: 2000
    })

    $("#courselevel .kong").click(function(){
        $("#courselevel #three .pic1").css("display","none");
        $("#courselevel #three .pic2").css("display","block");
        $("#courselevel .row .form1").css("top","280px");
    })

    $("#courselevel .kong1").click(function(){
        $("#courselevel #two .pic3").css("display","none");
        $("#courselevel #two .pic4").css("display","block");
        $("#courselevel .row .form2").css("top","280px");
    })
})