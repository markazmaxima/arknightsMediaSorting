// JavaScript Document

checkThemePlaylist();

function checkThemePlaylist(){
    var akthmtkn = localStorage.getItem("ak-video-ep-token");
    if(akthmtkn == "1"){
        document.getElementById("ep-video-playlist").src = "themsCollect/themeCollect01.html";
    } else if(akthmtkn == "2"){
        document.getElementById("ep-video-playlist").src = "themsCollect/themeCollect02.html";
    } else {
        localStorage.setItem("ak-video-ep-token", "1");
        location.reload();
    }
}