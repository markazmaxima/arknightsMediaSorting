$(document).ready(function(){
    $(".back-btn-col").hover(function(){
        $(".front-panel").css({left: '140px'});
    }, function(){
        $(".front-panel").css({left: '40px'});
    });
});