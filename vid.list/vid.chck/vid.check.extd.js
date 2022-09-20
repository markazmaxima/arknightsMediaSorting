// JavaScript Document

chckExtdPlylst();

function chckExtdPlylst() {
    var tkn = localStorage.getItem("ak-vid-extd-tkn");
    if (tkn == "1") {
        document.getElementById("vid-plylst").src = "vid.extd/list.extd.01.html";
    } else if (tkn == "2") {
        document.getElementById("vid-plylst").src = "vid.extd/list.extd.02.html";
    } else {
        localStorage.setItem("ak-vid-extd-tkn", "1");
        location.reload();
    }
}