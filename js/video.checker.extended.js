// JavaScript Document

checkExtendedPlaylist();

function checkExtendedPlaylist() {
    var epToken = localStorage.getItem("ak-video-ep-token");
    if (epToken == "1") {
        document.getElementById("ep-video-playlist").src = "video.extendedPlay/extendedBatch01.html";
    } else if (epToken == "2") {
        document.getElementById("ep-video-playlist").src = "video.extendedPlay/extendedBatch02.html";
    } else {
        localStorage.setItem("ak-video-ep-token", "1");
        location.reload();
    }
}