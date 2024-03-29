"use strict";
import master from '../../json/vid.trailer/list.fact.01.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;

    setData();

    function setData() {
        let grabTitle = master[i].title; //grab data
        let grabURL = master[i].URL; //grab URL
        let grabTag = master[i].tag; //grab tag
        let grabDur = master[i].duration; //grab duration
        let grabArrLngth = master.length; //grab array length
        grabArrLngth = grabArrLngth - 1;

        let getBtnLst = document.getElementById("btn-lst").childNodes[i]; //fetch btn nodes
        let getInBtn = getBtnLst.childNodes[1]; //seek btn, title
        let getInfDur = getBtnLst.childNodes[3]; //seek btn, duration

        $(getBtnLst).attr("onclick", "parent.document.getElementById('prmry-vid-wrppr').src = 'https://www.youtube.com/embed/"+grabURL+"?autoplay=1';parent.document.getElementById('plyr-title').innerHTML='"+grabTitle+"'");

        getInBtn.innerHTML = grabTitle;
        getInfDur.innerHTML = grabDur;
        if (i < grabArrLngth) {
            duplicate();
        };
    };
    function duplicate() {
        const loop = setTimeout(() => {
            $("#btnLst-itm").clone().appendTo("#btn-lst");
            i++;
            setData();
        }, 0);
    };
});