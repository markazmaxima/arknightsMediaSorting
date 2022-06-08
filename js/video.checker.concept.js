// JavaScript Document

checkConceptPlaylist();

function checkConceptPlaylist() {
    var epToken = localStorage.getItem("ak-video-con-token");
    if (epToken == "1") {
        document.getElementById("con-video-playlist").src = "video.conceptTrailer/conceptBatch01.html";
    } else {
        localStorage.setItem("ak-video-con-token", "1");
        location.reload();
    }
}