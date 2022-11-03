"use strict";
import master from '../json/master.anchor.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var newId = 0;

    setData();

    function setData() {
        let trailerAnchor = master[0].trailer[i].anchor;
        let trailerArrLnght = ((master[0].trailer.length) - 1);
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
        let pointLink = master[0].trailer[nul].link;

        parent.document.getElementById("iframe-plylst").src = pointLink;
    });
});