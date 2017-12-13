$(document).ready(function(){
    // inital correct/incorrect guesses start at 0
    var correctGuesses = 0;
    var incorrectGuesses = 0;

// initial page has game and score screens hidden and start screen showing
    $(".gameScreen").hide();
    $(".startScreen").show();
    $(".scoreScreen").hide();

// once start button is clicked, hide start screen and show game screen. start countdown timer.
$(".start").on("click", function(){
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


});