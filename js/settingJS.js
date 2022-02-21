// JavaScript Document
$(document).ready(function(){
    setThemeInputButton();
    setExpInputButton();
    function setThemeInputButton(){
        var thm = localStorage.getItem("siteTheme");
        if(thm=="dark"){
            $("#btn-check-theme-dark").prop("checked", true);
        } else if(thm=="light"){
            $("#btn-check-theme-light").prop("checked", true);
        }
    };
    function setExpInputButton(){
        var exp = localStorage.getItem("experiment");
        if(exp=="true"){
            $("#btn-check-experiment-on").prop("checked", true);
        } else if(exp=="false"){
            $("#btn-check-experiment-off").prop("checked", true);
        }
    }
//theme btn
    $("#light-theme-cluster").click(function(){
        $("body").addClass("dark");
        $("body").removeClass("light");
        localStorage.setItem("siteTheme", "dark");
    })
    $("#btn-check-theme-dark").click(function(){
        $("body").addClass("dark");
        $("body").removeClass("light");
        localStorage.setItem("siteTheme", "dark");
    });
    $("#btn-check-theme-light").click(function(){
        $("body").addClass("light");
        $("body").removeClass("dark");
        localStorage.setItem("siteTheme", "light");
    });
//experimental btn
    $("#btn-check-experiment-on").click(function(){
        localStorage.setItem("experiment", "true");
    });
    $("#btn-check-experiment-off").click(function(){
        localStorage.setItem("experiment", "false");
    });
//reset btn
    $("#reset").click(function(){
        localStorage.setItem("siteTheme", "dark");
        localStorage.setItem("experiment", "false");
        location.reload();
    });
    $("#reset").hover(function(){
        $(this).css("background-color", "darkred");
    }, function(){
        $(this).css("background-color", "red");
    });
});