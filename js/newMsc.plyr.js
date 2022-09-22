//javascript
$(document).ready(function () {
    var mscPlyr;
    var plyBtn;
    var pauBtn;
    var txtCurrSec;
    var txtCurrMin
    var maxSldr;
    var maxTime;
    var txtMaxDur;
    var secCount;
    var minCount;
    initial();
    function initial() {
        mscPlyr = document.getElementById("player");
        plyBtn = document.getElementById("play");
        pauBtn = document.getElementById("pause");
        maxSldr = document.getElementById("dur-sldr"); //obj
        txtCurrSec = document.getElementById("currSec"); //obj
        txtCurrMin = document.getElementById("currMin"); //obj
        txtMaxDur = document.getElementById("maxDur");
        maxTime = mscPlyr.duration; //grab max duration
    }
    mscPlyr.ontimeupdate = function() {trackDur()};
    function trackDur() {
        var grabCurrDur = mscPlyr.currentTime; //grab current duration
        tknCurSec = Math.trunc(grabCurrDur); //set second
        tknCurMin = Math.trunc(grabCurrDur/60); //set minute

        minusSec = (tknCurMin*60);

        minCount = tknCurMin;
        secCount = (tknCurSec-minusSec);

        txtCurrSec.innerHTML = secCount;
        txtCurrMin.innerHTML = tknCurMin;
    }
    $("#play").click(function () {
        mscPlyr.play();
        txtMaxDur.innerHTML = Math.trunc(maxTime);

        plyBtn.hidden = true;
        pauBtn.hidden = false;
        plyBtn.value = "0";
        pauBtn.value = "1";
    })
    $("#pause").click(function () {
        mscPlyr.pause();

        plyBtn.hidden = false;
        pauBtn.hidden = true;
        plyBtn.value = "1";
        pauBtn.value = "0";
    })
})

