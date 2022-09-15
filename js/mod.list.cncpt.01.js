"use strict";
import master from '../json/list.cncpt.01.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var mxD = 20; //change here for duplication amount !!!

    dupl();

    function dupl() { //loop duplicate
        const myTime = setTimeout(() => {
            let grabTitle = master[i].title; //grab data
            let grabTblock = master.length;
            console.log(grabTitle);
            i++;

            if (i < mxD) { //dupl function
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

                if (i == grabTblock) {
                    const remC = document.getElementById("btn-list");
                    remC.removeChild(remC.lastElementChild);
                };

                //set new title by id
                const tempTkn = document.getElementById("title-" + (i - 1));
                tempTkn.innerHTML = grabTitle;

                dupl(); //loop
            } else {
                console.log("loop broken..."); //error output
            }
        }, 100); //loop delayer
    };
});