// JavaScript Document

checkEventsPlaylist();

function checkEventsPlaylist() {
    var tkn = localStorage.getItem("ak-vid-evnt-tkn");
    if (tkn == "1") {
        document.getElementById("evnt-vid-plylst").src = "video.events/eventBatch01.html";
    } else if (tkn == "2") {
        document.getElementById("evnt-vid-plylst").src = "video.events/eventBatch02.html";
    } else {
        localStorage.setItem("ak-vid-evnt-tkn", "1");
        location.reload();
    }
}