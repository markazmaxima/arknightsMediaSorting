//javascript
var mainPlayer = document.getElementById("player");
var slider = document.getElementById("vol-slider");
var duration = document.getElementById("dur-slider");
var txt = document.getElementById("in-txt");
var cTxt = document.getElementById("cDur");
var nTxt = document.getElementById("newDur");

var disableTimeUpdate = 0;

function onChan() {
  let val = slider.value;
  txt.innerHTML = val;
  val = val / 100;
  mainPlayer.volume = val;
}
function durChan() {
  nTxt.innerHTML = duration.value;
  mainPlayer.currentTime = duration.value;
  mainPlayer.play();
  document.getElementById("play").hidden = true;
  document.getElementById("pause").hidden = false;
  var maxDuration = mainPlayer.duration;
  document.getElementById("mDur").innerHTML = maxDuration;
  duration.max = maxDuration;
}
function currentDuration(event) {
  if(disableTimeUpdate == 1){
    var curTime = event.currentTime;
  document.getElementById("cDur").innerHTML = curTime;
  duration.value = curTime;
  }
}
function play() {
  var maxDuration = mainPlayer.duration;

  mainPlayer.play();
  document.title = 'new title';
  document.getElementById("mDur").innerHTML = maxDuration;
  duration.max = maxDuration;
  document.getElementById("play").hidden = true;
  document.getElementById("pause").hidden = false;
}
function pause() {
  mainPlayer.pause();
  document.getElementById("play").hidden = false;
  document.getElementById("pause").hidden = true;
}
function loop() {
  var tkn = document.getElementById("loop");
  var tknV = tkn.value;

  if (tknV == 0) {
    tkn.value = 1;
    mainPlayer.loop = true;
  }
  if (tknV == 1) {
    tkn.value = 0;
    mainPlayer.loop = false;
  }
}
function mute() {
  var tkn = document.getElementById("mute");
  var tknV = tkn.value;

  if (tknV == 0) {
    tkn.value = 1;
    mainPlayer.muted = true;
  }
  if (tknV == 1) {
    tkn.value = 0;
    mainPlayer.muted = false;
  }
}
mainPlayer.addEventListener("ended", function () {
  alert("ended");
});
