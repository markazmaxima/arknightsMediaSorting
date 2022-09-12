// JavaScript Document

chckExtdPlylst();

function chckExtdPlylst() {
    var tkn = localStorage.getItem("ak-vid-extd-tkn");
    if (tkn == "1") {
        document.getElementById("vid-plylst").src = "video.extendedPlay/extdList01.html";
    } else if (tkn == "2") {
        document.getElementById("vid-plylst").src = "video.extendedPlay/extdList02.html";
    } else {
        localStorage.setItem("ak-vid-extd-tkn", "1");
        location.reload();
    }
}