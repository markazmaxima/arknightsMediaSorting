//javascript

var mainPlayer = document.getElementById("player");
var lp = mainPlayer.loop;
var slider = document.getElementById("vol-slider");
var duration = document.getElementById("dur-slider");
var txt = document.getElementById("in-txt");
var cTxt = document.getElementById("cDur");
var nTxt = document.getElementById("newDur");

function onChan(){
    let val = slider.value;
    txt.innerHTML = val;
    val = val/100;
    mainPlayer.volume = val;
}

function durChan(){
    nTxt.innerHTML = duration.value;
    mainPlayer.currentTime = duration.value;
    mainPlayer.play();
    var maxDuration = mainPlayer.duration;
    document.getElementById("mDur").innerHTML = maxDuration;
    duration.max = maxDuration;
}

function currentDuration(event){
    var curTime = event.currentTime;
    document.getElementById("cDur").innerHTML = curTime;
    duration.value = curTime;
}

function play(){
    var maxDuration = mainPlayer.duration;

    mainPlayer.play();
    document.getElementById("mDur").innerHTML = maxDuration;
    duration.max = maxDuration;
}
function pause(){
    mainPlayer.pause();
}
function loop(){
    var tkn = document.getElementById("loop");
    var tknV = tkn.value;
    
    if(tknV == 0){
        tkn.value = 1;
        mainPlayer.loop = true;
    }
    if(tknV == 1){
        tkn.value = 0;
        mainPlayer.loop = false;
    }
}

mainPlayer.addEventListener("ended", function(){
    alert("ended");
});

