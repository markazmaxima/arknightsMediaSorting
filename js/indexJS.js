// JavaScript Document
checkExperiment();
function checkExperiment(){
	var ExpOn = localStorage.getItem("experiment");
	if(ExpOn=="true"){
		const ele=document.getElementById("exp");
        ele.style.display="block";
	}else if(ExpOn=="false"){
		const ele=document.getElementById("exp");
        ele.style.display="none";
	}else{
		localStorage.setItem("experiment", "false");
        location.reload();
	}
}