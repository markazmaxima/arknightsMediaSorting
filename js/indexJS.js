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
    $("a").hover(function(){
        $(this).css("background-color", "rgb(51, 51, 51)");
    }, function(){
        $(this).css("background-color", "black");
    });
    $("#open-sidebar-menu").click(function(){
        $("nav").css({
            left: '0px'
        });
    });
    $("#close-sidebar-menu").click(function(){
        $("nav").css({
            left: '-300px'
        });
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
	$("#new-player").click(function(){
		const nextURL = '';
		const nextTitle = 'pvsss';
		const nextState = '';
		window.history.pushState(nextURL, nextTitle, nextState);
		window.history.replaceState(nextURL, nextTitle, nextState);
	});
});