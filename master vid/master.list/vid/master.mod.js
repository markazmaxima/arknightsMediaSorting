"use strict";
import master from '../../../json/master.anchor.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var newId = 0;

    setData();

    function setData() {
        let trailerAnchor = master.trailer[i].anchor;
        let trailerArrLnght = ((master.trailer.length) - 1);
        let pointBtn = document.getElementById("direct-btn-list").childNodes[i];
        let setTitle = pointBtn.childNodes[1];
        setTitle.innerHTML = trailerAnchor;

        if (i < trailerArrLnght) {
            duplicate();
        } else {
            setNewID();
        };
    };
    function duplicate() {
        const loop = setTimeout(() => {
            $("#direct-btn").clone().appendTo("#direct-btn-list");
            i++;
            setData();
        }, 0);
    };
    function setNewID() {
        let childLen = document.getElementById("direct-btn-list").childNodes.length;
        if (newId < childLen) {
            let childTkn = document.getElementById("direct-btn-list").childNodes[newId];
            childTkn.setAttribute("id", newId);
            newId++;
            setNewID();
        }
    };
    $(".direct-btn").click(function() {
        let nul = $(this).attr("id");
        let pointLink = master.trailer[nul].link;
        let trckr = master.trailer[nul].masterTrack;
        localStorage.setItem("direct-now", trckr);
        localStorage.setItem("direct-pre", "main-vid");
        parent.$(".round-btn").css({"opacity": "1", "width": "30px", "cursor": "pointer"});
        parent.document.getElementById("iframe-plylst").src = "vid/"+pointLink+".html";
    });
});