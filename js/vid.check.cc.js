// JavaScript Document

checkCCPlaylist();

function checkCCPlaylist() {
    var tkn = localStorage.getItem("ak-vid-cc-tkn");
    if (tkn == "1") {
        document.getElementById("vid-plylst").src = "vid.cc/list.cc.01.html";
    } else if (tkn == "2") {
        // document.getElementById("evnt-vid-plylst").src = "vid.cc/list.cc.02.html";
    } else {
        localStorage.setItem("ak-vid-cc-tkn", "1");
        location.reload();
    }
}