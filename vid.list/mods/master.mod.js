"use strict";
import master from '../json/master.anchor.json' assert {type: 'json'};

$(document).ready(function () {
    var i = 0;

    setData();

    function setData() {
        let trailerAnchor = master[0].trailer[i];
        let trailerArrLnght = master[0].trailer.length;
        trailerArrLnght = trailerArrLnght - 1;

        if (i < trailerArrLnght) {
            duplicate();
        };
    };
    function duplicate() {
    };
})