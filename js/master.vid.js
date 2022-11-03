$(document).ready(function(){
    $(".back-btn-col").hover(function(){
        $(".front-panel").css({left: '150px'});
    }, function(){
        $(".front-panel").css({left: '50px'});
    });
    $(".indi-selec").show();
});