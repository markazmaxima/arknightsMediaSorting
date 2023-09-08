$(document).ready(function(){
    setGlobalTheme();
    setExperimentAccess();
    showSys();
    function setGlobalTheme(){
        var thm = localStorage.getItem("siteTheme");
        if(thm=="dark"){
            $("body").addClass("dark");
        } else if (thm=="light"){
            $("body").addClass("light");
        } else {
            localStorage.setItem("siteTheme", "dark");
            localStorage.setItem("experiment", "false");
            location.reload();
        }
    };
    function setExperimentAccess(){
        var exp = localStorage.getItem("experiment");
        if(exp=="true"){
            $("#the-experiment").show();
            $("#nav-music").show();
        } else if(exp=="false"){
            $("#the-experiment").hide();
            $("#nav-music").hide();
        }
    };
    function showSys() {
        $(".master-wrppr").show();
    };
    $("#info-board-head-close").click(function(){
        $("#info-board-head-close").hide();
        $("#info-board-head-open").show();
        $("#info-board").hide();
    });
    $("#info-board-head-open").click(function(){
        $("#info-board-head-open").hide();
        $("#info-board-head-close").show();
        $("#info-board").show();
    });
});