// JavaScript Document

setThemeInputButton();

function reset(){
	localStorage.clear();
	location.reload();
}

function setThemeInputButton(){
	var thm = localStorage.getItem("siteTheme");
	
	if(thm == "dark"){
		document.getElementById("checkTheme").checked = true;
	} else if (thm == "silver"){
		document.getElementById("checkTheme").checked = false;
	}
}

function setThemeButton(){
	var bdClr = localStorage.getItem("siteTheme");
	
	if(bdClr == "dark"){
		document.getElementById("body").className = "light";
		localStorage.setItem("siteTheme", "light");
	} else if(bdClr == "light"){
		document.getElementById("body").className = "dark";
		localStorage.setItem("siteTheme", "dark");
	}
}

function mNav(){
	var topNav = document.getElementById("top-nav-mobile")
	var mNav = document.getElementById("mobile-ul");
	var i = document.getElementById("m-nav").value;
	var sld = document.getElementById("slider");
	var chk = document.getElementById("container");
	var gap = document.getElementById("fontColorTheme");
	
	if (i == 0){
		topNav.style.width = "300px";
		topNav.style.height = "auto";
		topNav.style.paddingBottom = "20px";
		topNav.style.borderRight = "3px solid darkred";
		mNav.style.display = "block";
		document.getElementById("m-nav").value = "1";
		
		sld.style.display = "none";
		chk.style.display = "none";
		gap.style.marginTop = "40px";
	} else if (i == 1){
		topNav.style.width = "auto";
		topNav.style.height = "auto";
		topNav.style.paddingBottom = "0px";
		topNav.style.borderRight = "none";
		mNav.style.display = "none";
		document.getElementById("m-nav").value = "0";
		
		sld.style.display = "block";
		chk.style.display = "block";
		gap.style.marginTop = "10px";
	}
}
