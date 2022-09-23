//javascript
$(document).ready(function () {
    var mscPlyr;
    var plyBtn;
    var pauBtn;
    var loopBtn;
    var muteBtn;
    var fullDur;
    var liveDur;
    var seekDur;
    var volSldr;
    var durSldr;
    var volTxt;
    var maxTime;
    var secCount;
    var minCount;
    var disableTimeUpdate = 0;
    var tekken;
    initial();

    function initial() { //initial data grabbing
        mscPlyr = document.getElementById("player");
        //buttons
        plyBtn = document.getElementById("play");
        pauBtn = document.getElementById("pause");
        loopBtn = document.getElementById("loop");
        muteBtn = document.getElementById("mute");
        //obj value
        volSldr = document.getElementById("vol-sldr");
        durSldr = document.getElementById("dur-sldr");
        //string
        fullDur = document.getElementById("fullDur");
        liveDur = document.getElementById("liveDur");
        seekDur = document.getElementById("seekDur");
        volTxt = document.getElementById("vol-txt");

        maxTime = mscPlyr.duration; //grab max duration
        var tknMaxDur = Math.trunc(maxTime);
        durSldr.max = tknMaxDur; //set bar max
    };
    mscPlyr.ontimeupdate = function () { trackDur() }; //show music prog in bar
    function trackDur() {
        if (disableTimeUpdate == 0) {
            var grabCurrDur = mscPlyr.currentTime; //grab current duration
            tknCurSec = Math.trunc(grabCurrDur); //set second
            tknCurMin = Math.trunc(grabCurrDur / 60); //set minute

            minCount = tknCurMin;
            minusSec = (tknCurMin * 60);
            secCount = (tknCurSec - minusSec); //set every second and reset count every 60 sec

            if (secCount < 10) {
                secCount = "0" + secCount;
            }
            liveDur.innerHTML = (tknCurMin + ":" + secCount);

            durSldr.value = tknCurSec;
        } else {
        }
    };
    $("#vol-sldr").on("input", function () { //set player volume
        var grabVol = volSldr.value;
        tempVol = grabVol / 100;
        mscPlyr.volume = tempVol;
        volTxt.innerHTML = grabVol;
    });
    $("#dur-sldr").on("input", function () { //set player duration
        //disableTimeUpdate = 1;
        mscPlyr.pause();
        tekken = durSldr.value;
        seekDur.innerHTML = tekken;
        
    });
    $("#dur-sldr").on("mouseup", function () {
        mscPlyr.currentTime = tekken;
        mscPlyr.play();
        //disableTimeUpdate = 0;
    });
    $("#seek").click(function () {
        mscPlyr.currentTime = 100;
    });
    $("#play").click(function () {
        mscPlyr.play();
        plyBtn.value = "0";
        pauBtn.value = "1";
        //full music duration
        fullMin = Math.round(maxTime / 60);
        fullSec = Math.round(maxTime / 60);
        if (fullSec < 10) {
            fullSec = "0" + fullSec;
        }
        fullDur.innerHTML = (fullMin + ":" + fullSec);
    });
    $("#pause").click(function () { //pause player
        mscPlyr.pause();
        plyBtn.value = "1";
        pauBtn.value = "0";
    });
    $("#loop").click(function () { //loop player
        var tknV = loopBtn.value;
        if (tknV == 0) {
            loopBtn.value = "1";
            mscPlyr.loop = true;
        }
        if (tknV == 1) {
            loopBtn.value = "0";
            mscPlyr.loop = false;
        }
    });
    $("#mute").click(function () { //mute player
        var tknV = muteBtn.value;
        if (tknV == 0) {
            muteBtn.value = "1";
            mscPlyr.muted = true;
        }
        if (tknV == 1) {
            muteBtn.value = "0";
            mscPlyr.muted = false;
        }
    });
});