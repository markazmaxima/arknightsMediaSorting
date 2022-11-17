$(document).ready(function () {
    $(".back-btn-col").hover(function () {
        $(".front-panel").css({ left: '150px', backgroundColor: 'grey' });
    }, function () {
        $(".front-panel").css({ left: '50px', background: 'none' });
    });
    
    localStorage.setItem("direct-now", "main-vid");

    $(".indi-selec").show(); //finish load page

    $("#back-btn-vid").click(function () {
        document.getElementById("iframe-plylst").src = "dir.vid.html";
    });

    $("#round-btn").click(function(){
        var dirFace = localStorage.getItem("direct-now");
        if(dirFace == "main-vid"){
            //nothing
        } else if (dirFace == "cncpt-vid"){
            $(".round-btn").css({"opacity": "0", "width": "10px", "cursor": "auto"});
            localStorage.setItem("direct-now", "main-vid");
            localStorage.setItem("direct-pre", "");
        };
    });
});