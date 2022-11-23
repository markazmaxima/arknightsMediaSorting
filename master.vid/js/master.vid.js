$(document).ready(function () {
    $(".back-btn-col").hover(function () {
        $(".front-panel").css({ left: '150px', backgroundColor: 'rgb(63, 63, 63)' });
        $(".front-btn-col").css({ color: 'grey'});
        $(".back-panel").css({ opacity: '1'});
    }, function () {
        $(".front-panel").css({ left: '50px', background: 'grey' });
        $(".front-btn-col").css({ color: 'white'});
        $(".back-panel").css({ opacity: '0.3'});
    });
    
    localStorage.setItem("direct-now", "main-vid");

    $(".indi-selec").show(); //finish load page

    $("#back-btn-vid").click(function () {
        $("#front-panel-trailer").show();
        $("#front-panel-anime").hide();
        $("#front-panel-music").hide();
        $("#front-panel-terra").hide();
    });
    $("#back-btn-anm").click(function () {
        $("#front-panel-trailer").hide();
        $("#front-panel-anime").show();
        $("#front-panel-music").hide();
        $("#front-panel-terra").hide();
    });
    $("#back-btn-msc").click(function () {
        $("#front-panel-trailer").hide();
        $("#front-panel-anime").hide();
        $("#front-panel-music").show();
        $("#front-panel-terra").hide();
    });
    $("#back-btn-trra").click(function () {
        $("#front-panel-trailer").hide();
        $("#front-panel-anime").hide();
        $("#front-panel-music").hide();
        $("#front-panel-terra").show();
    });

    $("#round-btn").click(function(){
        var dirFace = localStorage.getItem("direct-now");
        if(dirFace == "main-vid"){
            //nothing
        } else if (dirFace == "cncpt-vid"){
            $(".round-btn").css({"opacity": "0", "width": "10px", "cursor": "auto"});
            document.getElementById("iframe-plylst").src = "director.list.html";
            localStorage.setItem("direct-now", "main-vid");
            localStorage.setItem("direct-pre", "");
        };
    });
});