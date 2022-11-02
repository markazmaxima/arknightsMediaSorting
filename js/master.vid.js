$(document).ready(function(){
    $(".back-panel").hover(function(){
        $(".front-panel").css({left: '150px'});
    }, function(){
        $(".front-panel").css({left: '40px'});
    });
});