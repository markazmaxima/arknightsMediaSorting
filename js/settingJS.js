// JavaScript Document
$(document).ready(function(){
    setThemeInputButton();
    setExpInputButton();
    function setThemeInputButton(){
        var thm = localStorage.getItem("siteTheme");
        if(thm=="dark"){
            $("#toggle-darkmode").prop("checked", true);
        } else if(thm=="light"){
            $("#toggle-darkmode").prop("checked", false);
        }
    };
    function setExpInputButton(){
        var exp = localStorage.getItem("experiment");
        if(exp=="true"){
            $("#toggle-experiment").prop("checked", true);
        } else if(exp=="false"){
            $("#toggle-experiment").prop("checked", false);
        }
    }
//theme btn
    $("#toggle-darkmode").click(function(){
        var tknDark = localStorage.getItem("siteTheme");
        if(tknDark=="dark"){
            $("body").removeClass("dark");
            $("body").addClass("light");
            localStorage.setItem("siteTheme", "light");
        } else if(tknDark=="light"){
            $("body").removeClass("light");
            $("body").addClass("dark");
            localStorage.setItem("siteTheme", "dark");
        }
    });
//experimental btn
    $("#toggle-experiment").click(function(){
        var tknExp = localStorage.getItem("experiment");
        if(tknExp=="true"){
            localStorage.setItem("experiment", "false");
        } else if (tknExp=="false"){
            localStorage.setItem("experiment", "true");
        }
    });
//reset btn
    $("#reset").click(function(){
        localStorage.setItem("siteTheme", "dark");
        localStorage.setItem("experiment", "false");
        location.reload();
    });
    $("#reset").hover(function(){
        $(this).css("background-color", "#009578");
    }, function(){
        $(this).css("background-color", "rgb(0, 68, 0)");
    });

    $("#setting-done").hover(function(){
        $(this).css("background-color", "#009578");
    }, function(){
        $(this).css("background-color", "rgb(0, 68, 0)");
    });
});