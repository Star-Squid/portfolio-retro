let decorations = ".square, .bubble, .triangle, .circle-two, .circle, .list, .icons";

$( "#cv" ).hover(function() {
    $( ".corkboard" ).toggleClass("cv");
    $( decorations).toggleClass("disappear");
    $( ".boot, .js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});



$( "#flashcards" ).hover(function() {
    $( ".corkboard" ).toggleClass("flashcards");
    $( decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});


$( "#memory" ).hover(function() {
    $( ".corkboard" ).toggleClass("memory");
    $( decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});

$( "#clock" ).hover(function() {
    $( ".corkboard" ).toggleClass("clock");
    $( decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished February 2022");
});

$( "#art" ).hover(function() {
    $( ".corkboard" ).toggleClass("art");
    $( decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});


$( "#hookd" ).hover(function() {
    $( ".corkboard" ).toggleClass("hookd");
    $( decorations).toggleClass("disappear");
    $(".js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished February 2022");
});

$( "#highfive" ).hover(function() {
    $( ".corkboard" ).toggleClass("highfive");
    $( decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished December 2021");
});


$( "#artlinks" ).hover(function() {
    $( ".corkboard" ).toggleClass("artlinks");
    $( decorations).toggleClass("disappear");
    $( ".boot, .js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished December 2021");
});