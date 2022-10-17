$(document).ready(function () {
    includePlyr();

    function includePlyr() {
        var z, i, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            file = elmnt.getAttribute("ins-plyr-vid");
            if (file) {
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                        if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                        elmnt.removeAttribute("ins-plyr-vid");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                return;
            }
        }
    }

    $("#togglePlylst-open").click(function () {
        $("#m-vid-plylst").css({
            top: '0px'
        });
        $("#plylst-bckgrnd").show();
        $("#togglePlylst-open").hide();
        $("#togglePlylst-close").show();
    });
    $("#togglePlylst-close").click(function () {
        $("#m-vid-plylst").css({
            top: 'calc(50px + 100%)'
        });
        $("#plylst-bckgrnd").hide();
        $("#togglePlylst-open").show();
        $("#togglePlylst-close").hide();
    });
});