$(document).ready(function(){
    // inital correct/incorrect guesses start at 0
    var weasley;
    var hippogriff;
    var albus;
    var candy;
    var lady;
    var animagus;
    var score;
    var harryTheme = new Audio("assets/images/harrytheme.mp3");
    var alohomora = new Audio("assets/images/alohomora.mp3");
    // play Harry Potter Theme on page load
    harryTheme.play();

// initial page has game and score screens hidden and start screen showing
    $(".gameScreen").hide();
    $(".startScreen").show();
    $(".scoreScreen").hide();

// once start button is clicked, hide start screen and show game screen. start countdown timer.
$(".start").on("click", function(){
    alohomora.play();
    $(".startScreen").hide();
    $(".gameScreen").show();
    $(".scoreScreen").hide();
});
// keep track of answers based on user selection, make sure user can only select one box per guess

// after submit button is clicked, hide game and start screen and show score screen.
$(".submit").on("click", function(){
    $(".startScreen").hide();
    $(".gameScreen").hide();
    $(".scoreScreen").show();
});

// when user clicks restart button, reload game.
$(".restart").on("click", function(){
    $(".gameScreen").hide();
    $(".startScreen").show();
    $(".scoreScreen").hide();
});

$("#harryQuiz").onsubmit(function(){
    weasley = parseInt($('input[name="weasley"]:checked').value);
    hippogriff = parseInt($('input[name="hippogriff"]:checked').value);
    animagus = parseInt($('input[name="animagus"]:checked').value);
    albus = parseInt($('input[name="albus"]:checked').value);
    candy = parseInt($('input[name="candy"]:checked').value);
    lady = parseInt($('input[name="lady"]:checked').value);

    score = weasley + hippogriff + animagus + albus + candy + lady;

    $(".scoreBox").html("You correctly answered" + score + " questions correctly on your O.W.L.");
});


});