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
    $("li").click(function(){
        $("ul", this).slideToggle(300);
    });
    $("#open-sidebar-menu").click(function(){
        $("nav").css({
            left: '0px'
        });
        $(".cover-for-nav-open").show();
    });
    $("#close-sidebar-menu").click(function(){
        $("nav").css({
            left: '-300px'
        });
        $(".cover-for-nav-open").hide();
    });
    $(".cover-for-nav-open").click(function(){
        $("nav").css({
            left: '-300px'
        });
        $(".cover-for-nav-open").hide();
    });
});