$(document).ready(function () {
    $(".back-btn-col").hover(function () {
        $(".front-panel").css({ left: '150px', backgroundColor: 'grey' });
    }, function () {
        $(".front-panel").css({ left: '50px', background: 'none' });
    });

    if (localStorage.getItem("vid-direct-face") === null) {
        localStorage.setItem("vid-direct-face", "main-vid");
    }

    $(".indi-selec").show(); //finish load page

    $("#back-btn-vid").click(function () {
        document.getElementById("iframe-plylst").src = "dir.vid.html";
    });

    $("#round-btn").click(function(){
        var dirFace = localStorage.getItem("vid-direct-face");
        if(dirFace == "main-vid"){
            alert("already at top directory") //nothing
        };
    });
});