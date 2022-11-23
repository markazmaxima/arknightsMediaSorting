"use strict";
import master from '../json/testList.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var rp = 0;

    setData();

    function setData() {
        let grabTitle = master[i].title; //grab data
        let grabDur = master[i].duration; //grab duration
        let grabArrLngth = master.length; //grab array length
        grabArrLngth = grabArrLngth - 1;
        let getBtnLst = document.getElementById("btn-lst").childNodes[i]; //fetch btn nodes
        let getInBtn = getBtnLst.childNodes[1]; //seek btn, title
        let getInfDur = getBtnLst.childNodes[2]; //seek btn, duration
        getInBtn.innerHTML = grabTitle;
        getInfDur.innerHTML = grabDur;
        if (i < grabArrLngth) {
            duplicate();
        } else {
            setNewID();
        };
    };
    function duplicate() {
        $("#btnLst-itm").clone().appendTo("#btn-lst");
        i++;
        setData();
    };
    function setNewID() {
        let childLen = document.getElementById("btn-lst").childNodes.length;
        if (rp < childLen) {
            let childTkn = document.getElementById("btn-lst").childNodes[rp];
            childTkn.setAttribute("id", rp);
            rp++;
            setNewID();
        }
    };
    $(".cntnt-itm").click(function() {
        let nul = $(this).attr("id");
        let grabTitle = master[nul].title; //grab data
        let grabTag = master[nul].tag; //grab tag
        let grabURL = master[nul].URL; //grab URL
        let newUrl = "https://www.youtube.com/embed/"+grabURL+"?autoplay=1";
        top.document.getElementById("prmry-vid-wrppr").setAttribute("src", newUrl);
        top.document.getElementById("plyr-title").innerHTML = grabTitle;
        top.document.getElementById("itm-tag").innerHTML = grabTag;
    });
});