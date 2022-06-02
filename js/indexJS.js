$(document).ready(function(){
	$("#new-player").click(function(){
		const nextURL = '';
		const nextTitle = 'pvsss';
		const nextState = '';
		window.history.pushState(nextURL, nextTitle, nextState);
		window.history.replaceState(nextURL, nextTitle, nextState);
	});
});