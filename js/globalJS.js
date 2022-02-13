// JavaScript Document

setGlobalTheme();

function setGlobalTheme(){
	var thm = localStorage.getItem("siteTheme");
	
	if(thm == "dark"){
		document.getElementById("body").className = "dark";
	} else if (thm == "light"){
		document.getElementById("body").className = "light";
	} else {
		localStorage.setItem("siteTheme", "dark");
		location.reload();
	}
}

function mNav(){
	var topNav = document.getElementById("top-nav-mobile")
	var mNav = document.getElementById("mobile-ul");
	var i = document.getElementById("m-nav").value;
	
	if (i == 0){
		topNav.style.width = "300px";
		topNav.style.height = "500px";
		topNav.style.borderRight = "3px solid darkred";
		mNav.style.display = "block";
		document.getElementById("m-nav").value = "1";
	} else if (i == 1){
		topNav.style.width = "auto";
		topNav.style.height = "auto";
		topNav.style.borderRight = "none";
		mNav.style.display = "none";
		document.getElementById("m-nav").value = "0";
	}
}

function setAkVideoPartList01(){
	localStorage.setItem("akVideoPartList", "1");
}
function setAkVideoPartList02(){
	localStorage.setItem("akVideoPartList", "2");
}
function setAkVideoPartList03(){
	localStorage.setItem("akVideoPartList", "3");
}
