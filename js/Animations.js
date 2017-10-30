/*$(document).ready(function() {
    $('#instructioncontent').hide();
    $('#topbar').animate({
        top: '0px'
    }, 700);
    $('#bottombar').delay(500).animate({
        top: '90vh'
    }, 1000);
});
$( "#buttonleft" ).click(function() {
    $('#topbar').animate({
        top: '-440px'
    }, 700);
    $('#bottombar').animate({
        top: '100vh'
    }, 700);
    $('#midbar').slideUp(400);
    $('.fullscreen').slideUp(1000);
});
$( "#buttonright" ).click(function() {
    $('#instructioncontent').show();
    $('#topbar').animate({
        top: '-440px'
    }, 700);
    $('#bottombar').animate({
        top: '100vh'
    }, 700);
    $('#midbar').slideUp(400);
    $('#welcomescreen').slideUp(1000);
});
$( "#instrplay" ).click(function() {
    $('#instructions').slideUp(1000);
});*/


function placeshow(){
    $('#placetowerdiv').fadeIn(300);
    $('#placetowertxt').delay(300).animate({"width":"92%"}, 600);
    $('#placetowertxtp').delay(300).fadeIn(500);
}
function placehide(){
    $('#placetowertxt').animate({"width":"0%"}, 600);
    $('#placetowerdiv').delay(300).fadeOut(300);
    $('#placetowertxtp').fadeOut(500);
}
function upgradeshow(){
    $('#upgradetowerdiv').fadeIn(300);
    $('#upgradetowertxt').delay(300).animate({"width":"92%"}, 600);
    $('#upgradetowertxtp').delay(300).fadeIn(500);
}
function upgradehide(){
    $('#upgradetowertxt').animate({"width":"0%"}, 600);
    $('#upgradetowerdiv').delay(300).fadeOut(300);
    $('#upgradetowertxtp').fadeOut(500);
}

function firsttosecond(){
    $('#first').fadeOut(400);
    $('#second').delay(500).fadeIn(10000);
    $('#audio').trigger("play").animate({volume: 0.0}, 1).delay(50).animate({volume: 0.1}, 20000);
    $('#blackwall').delay(12000).slideUp(3000);
    $('#gif').delay(10000).fadeOut(3000);
}