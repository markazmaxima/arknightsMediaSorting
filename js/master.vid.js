$(document).ready(function(){
    $(".back-btn-col").hover(function(){
        $(".front-panel").css({left: '150px', backgroundColor: 'grey'});
    }, function(){
        $(".front-panel").css({left: '50px', background: 'none'});
    });
    $(".indi-selec").show();
});