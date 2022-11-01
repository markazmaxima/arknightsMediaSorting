"use strict";
import master from '../json/testList.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var rp = 0;

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
        let getInfDur = getBtnLst.childNodes[2]; //seek btn, duration

        console.log(getBtnLst);

        getInBtn.innerHTML = grabTitle;
        getInfDur.innerHTML = grabDur;
        if (i < grabArrLngth) {
            duplicate();
        } else {
            const tkn = document.getElementById("btn-lst").childNodes[2];
            tkn.setAttribute("id", "555");
        };
    };
    function duplicate() {
        $("#btnLst-itm").clone().appendTo("#btn-lst");
        i++;
        setData();
    };
});