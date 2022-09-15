"use strict";
import master from '../json/test.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var mxD = 10; //change here for duplication amount !!!

    dupl();

    function dupl() { //loop duplicate
        const myTime = setTimeout(() => {
            let grabTitle = master[i].tit; //grab data
            console.log(grabTitle);
            i++;

            if (i == mxD) { //last dupl check
                $("#btn-list-item").attr("onclick", "vid1()");
                $("#btn-list-item:first-child").attr("id", "btn=list-item-1");
                $("#title-1").text("null1");
                $("#title-2").text("null2");

                console.log("end of process");
            }
            else if (i < mxD) { //dupl function
                $("#btn-list-item").attr("onclick", "vid" + i + "()");
                $("#btn-list-item").clone().appendTo("#btn-list"); //dupl based from first child
                let getchildList = document.getElementById("btn-list").childNodes[i]; //get child of list
                let getchildBtn = getchildList.childNodes[1]; //get child of button

                //set new btn id
                var nT = i + 1;
                let nwbtnID = "btn-list-item-" + nT;
                getchildList.id = nwbtnID;

                //set new title id
                let nwitmID = "title-" + i;
                getchildBtn.id = nwitmID;

                //set new title by id
                const tempTkn = document.getElementById("title-"+i);
                tempTkn.innerHTML = grabTitle;

                dupl(); //loop
            } else {
                console.log("loop broken...");
            }
        }, 300);
    };
});