"use strict";
import master from '../json/list.main.01.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;
    var mxD = 20; //change here for duplication amount !!!

    dupl();

    function dupl() { //loop duplicate
        const myTime = setTimeout(() => {
            let grabTitle = master[i].title; //grab data
            let grabURL = master[i].URL; //grab URL
            let grabTblock = master.length;
            console.log(grabURL);
            i++;

            if ((i + 1) == mxD) { //last dupl check
                $("#btn-list-item:first-child").attr("value", "1");
                
            }
            else if (i < mxD) { //dupl function
                $("#btn-list-item").clone().appendTo("#btn-list"); //dupl based from first child
                let getchildList = document.getElementById("btn-list").childNodes[i]; //get child of list
                $("#btn-list-item:last-child").attr("value", (i+1)); //set duplicated btn value
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

                    $("#btn-list-item:first-child").attr("onclick", "parent.document.getElementById('primary-video-wrapper').src = 'https://www.youtube.com/embed/Hfu_I0V3VrM?autoplay=1';");
                };

                //set new title by id
                const tempTkn = document.getElementById("title-" + (i - 1));
                tempTkn.innerHTML = grabTitle;

                //set onclick
                const tempInt = document.getElementById("btn-list-item-" + (i));
                $(tempInt).attr("onclick", "parent.document.getElementById('primary-video-wrapper').src = '"+grabURL+"';");

                dupl(); //loop
            } else {
                console.log("loop broken..."); //error output
            }
        }, 200); //loop delayer
    };
});