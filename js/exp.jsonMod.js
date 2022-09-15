"use strict";
import master from '../json/test.json' assert {type: 'json'};



let chl = document.getElementById("btn-list").childNodes;
console.log(chl);

$(document).ready(function () {
    dupl();
    var i = 1;
    var mxD = 10;

    let titl1 = master[i=i-1].tit;

    function dupl() {
        const myTime = setTimeout(() => {
            if (i == mxD) { //last dupl check
                $("#btn-list-item:first-child").attr("onclick", "vid1()");
                //pull data for first 3 duplicate

                console.log("pull "+titl1);
                //put data in first 3 btn
            }
            else if (i < mxD) { //dupl function
                i++;
                $("#btn-list-item").attr("onclick", "vid" + i + "()");
                $("#btn-list-item").clone().appendTo("#btn-list");

                dupl();
            } else {
                console.log("loop broken...");
            }
        }, 100);
    };

    let ppp = $("#btn-list-item");
    console.log(ppp);
});