// JavaScript Document

checkEventsPlaylist();

function checkEventsPlaylist() {
    var tkn = localStorage.getItem("ak-vid-evnt-tkn");
    if (tkn == "1") {
        document.getElementById("vid-plylst").src = "vid.evnt/list.evnt.01.html";
    } else if (tkn == "2") {
        document.getElementById("vid-plylst").src = "vid.evnt/list.evnt.02.html";
    } else {
        localStorage.setItem("ak-vid-evnt-tkn", "1");
        location.reload();
    }
}