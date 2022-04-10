let decorations = ".square, .bubble, .triangle, .circle-two, .circle, .list, .icons";
// let corkboardWidth = $( ".corkboard" ).width();

$( "#cv" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("cv");
    $(decorations).toggleClass("disappear");
    $( ".boot, .js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});

$( "#flashcards" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("flashcards");
    $(decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});

$( "#memory" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("memory");
    $(decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});

$( "#clock" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("clock");
    $(decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished February 2022");
});

$( "#art" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("art");
    $(decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished March 2022");
});

$( "#hookd" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("hookd");
    $(decorations).toggleClass("disappear");
    $(".js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished February 2022");
});

$( "#highfive" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("highfive");
    $(decorations).toggleClass("disappear");
    $( ".boot, .languages").toggleClass("disappear");
    $( ".date" ).text("finished December 2021");
});

$( "#welcome" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("welcome");
    $(decorations).toggleClass("disappear");
    $( ".boot, .js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished April 2022");
});

$( "#artlinks" ).hover(function() {
    // $( ".corkboard" ).width(corkboardWidth + "px");
    $( ".corkboard" ).toggleClass("panel");
    $( ".corkboard" ).toggleClass("artlinks");
    $(decorations).toggleClass("disappear");
    $( ".boot, .js, .jq, .languages").toggleClass("disappear");
    $( ".date" ).text("finished December 2021");
});
