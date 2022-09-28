$(document).ready(function(){
    $(".bar-left-btn").mouseenter(function(){
        $("#right-itm").css({
            left: '200px'
        });
    });
    $(".bar-left-btn").mouseout(function(){
        $("#right-itm").css({
            left: '50px'
        });
    });
})