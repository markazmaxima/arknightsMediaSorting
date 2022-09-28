// JavaScript Document
$(document).ready(function(){
    setThmInptBtn();
    setExpInptBtn();
    function setThmInptBtn(){
        var thm = localStorage.getItem("siteTheme");
        if(thm=="dark"){
            $("#toggle-darkmode").prop("checked", true);
        } else if(thm=="light"){
            $("#toggle-darkmode").prop("checked", false);
        }
    };
    function setExpInptBtn(){
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
            localStorage.setItem("siteTheme", "light");
            location.reload();
        } else if(tknDark=="light"){
            localStorage.setItem("siteTheme", "dark");
            location.reload();
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
        alert("setting reset!");
        location.reload();
    });
    $("#clearC").click(function(){
        localStorage.clear();
        alert("cache cleared!");
        location.reload();
    });
//reload btn
    $("#reload").click(function(){
        location.reload();
    });
});