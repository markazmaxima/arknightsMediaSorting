$(document).ready(function(){
    setGlobalTheme();
    setExperimentAccess();
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
});