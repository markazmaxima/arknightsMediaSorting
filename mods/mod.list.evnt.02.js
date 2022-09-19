"use strict";
import master from '../json/list.evnt.02.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;

    dupl();

    function dupl() { //loop duplicate
        const myTime = setTimeout(() => {
            let grabTitle = master[i].title; //grab data
            let grabURL = master[i].URL; //grab URL
            let grabTag = master[i].tag; //grab tag
            let grabDur = master[i].duration; //grab duration
            let grabTblock = master.length;
            i++;

            if (i < grabTblock) { //dupl function
                $("#btn-list-item").clone().appendTo("#btn-list"); //dupl based from first child
                let getchildList = document.getElementById("btn-list").childNodes[i]; //get child of list
                $("#btn-list-item:last-child").attr("value", (i+1)); //set duplicated btn value
                let getchildBtn = getchildList.childNodes[1]; //get child of button
                let getchild2Btn = getchildList.childNodes[3];
                let getchild3Btn = getchild2Btn.childNodes[1];

                //set new btn id
                var nT = i + 1;
                let nwbtnID = "btn-list-item-" + nT;
                getchildList.id = nwbtnID;

                //set new title id
                let nwitmID = "title-" + i;
                getchildBtn.id = nwitmID;

                //set new duration
                let nwitmDur = grabDur;
                getchild3Btn.innerHTML = nwitmDur;

                //last duplicate error interf
                if (i == grabTblock) {
                    const remC = document.getElementById("btn-list");
                    remC.removeChild(remC.lastElementChild);
                };

                //set new title by id
                const tempTkn = document.getElementById("title-" + (i - 1));
                tempTkn.innerHTML = grabTitle;

                //set onclick
                const tempInt = document.getElementById("btn-list-item-" + (i));
                $(tempInt).attr("onclick", "parent.document.getElementById('primary-video-wrapper').src = '"+grabURL+"';parent.document.getElementById('player-title').innerHTML='"+grabTitle+"'");

                dupl(); //loop
            } else {
                console.log("loop broken..."); //error output
            }
        }, 0); //loop delayer
    };
});