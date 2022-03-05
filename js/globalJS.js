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
            $("#nav-setting").show();
        } else if(exp=="false"){
            $("#the-experiment").hide();
            $("#nav-setting").hide();
        }
    };
//hover anchor
    $("a").hover(function(){
        $(this).css("background-color", "rgb(20, 20, 20)");
    }, function(){
        $(this).css("background-color", "black");
    });
//click anchor
    $("li").click(function(){
        $("ul", this).slideToggle(300);
    });
//open menu
    $("#open-sidebar-menu").click(function(){
        parent.$("nav").css({
            left: '0px'
        });
        $(".dark-shade-cover").hide();
    });
//close menu
    $("#close-sidebar-menu").click(function(){
        $("nav").css({
            left: '-300px'
        });
        $(".dark-shade-cover").hide();
    });

    $(".dark-shade-cover").click(function(){
        $(this).hide();
        parent.$("nav").css({
            left: '-300px'
        });
        $("fieldset").show();
    });

    $("#nav-setting").click(function(){
        $("iframe").attr("src", "setting.html");
        
        const nextURL = 'https://markazmaxima.github.io/arknightsMediaSorting/setting.html';
        const nextTitle = 'My new page title';
        const nextState = { additionalInformation: 'Updated the URL with JS' };

        window.history.pushState(nextState, nextTitle, nextURL);
    });

    $(".sub-nav").hover(function(){
        $(this).css("font-size", "22px");
        $(this).css("margin-left", "10px");
        $(this).css("margin-right", "10px");
        $(this).css("background-color", "darkred");
    }, function(){
        $(this).css("font-size", "24px");
        $(this).css("margin-left", "0px");
        $(this).css("margin-right", "0px");
        $(this).css("background-color", "black");
    });

    $(".link-to-about").hover(function(){
        $(this).css("color", "white");
        $(this).css("background-color", "rgb(75, 0, 0)");
    }, function(){
        $(this).css("color", "white");
        $(this).css("background-color", "black");
    });
});