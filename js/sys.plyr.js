$(document).ready(function(){
    $("#togglePlylst-open").click(function(){
        $("#right-flx-wrppr").css({
            right: '0px'
        });
        $("#togglePlylst-open").hide();
        $("#togglePlylst-close").show();
    });
    $("#togglePlylst-close").click(function(){
        $("#right-flx-wrppr").css({
            right: 'calc(-1 * 100%)'
        });
        $("#togglePlylst-open").show();
        $("#togglePlylst-close").hide();
    });
});