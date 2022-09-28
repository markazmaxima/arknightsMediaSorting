$(document).ready(function(){
    $("#left-itm").mouseenter(function(){
        $("#right-itm").css({
            left: '200px'
        });
    });
    $("#left-itm").mouseout(function(){
        $("#right-itm").css({
            left: '50px'
        });
    });
})