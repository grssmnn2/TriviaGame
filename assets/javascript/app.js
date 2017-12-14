$(document).ready(function () {
    // variables for questions to be edited later
    var weasley;
    var hippogriff;
    var albus;
    var candy;
    var lady;
    var animagus;
    var score;
    // sounds to play on page/when buttons are clicked
    var harryTheme = new Audio("assets/images/harrytheme.mp3");
    var alohomora = new Audio("assets/images/alohomora.mp3");
    // play Harry Potter Theme on page load
    harryTheme.play();

    // initial page has game and score screens hidden and start screen showing
    $(".gameScreen").hide();
    $(".startScreen").show();
    $(".scoreScreen").hide();
    $(".failScreen").hide();

    // once start button is clicked, hide start screen and show game screen. start countdown timer.
    $(".start").on("click", function () {
        alohomora.play();
        $(".startScreen").hide();
        $(".gameScreen").show();
        $(".scoreScreen").hide();
        $(".failScreen").hide();
        // initial time to submit is 30 seconds
        var timeLeft = 30;
        // timer counts down by 1 second, runs countdown function each time
        var timer = setInterval(countdown, 1000);
        function countdown() {
            // if time left is 0, let user know and stop timer
            if (timeLeft == 0) {
                $("#timer").text("It takes a bit more studying than that to be an exemplary witch or wizard.");
                clearTimeout(timer);
                $(".failScreen").show();
                $(".gameScreen").hide();
            } else {
                //   otherwise update time with each second
                $("#timer").text(timeLeft + ' seconds remaining');
                timeLeft--;
            }
        }
    });

    // keep track of answers based on user selection, make sure user can only select one box per guess
    document.getElementById("harryQuiz").onsubmit = function () {
        weasley = parseInt(document.querySelector('input[name="weasley"]:checked').value);
        hippogriff = parseInt(document.querySelector('input[name="hippogriff"]:checked').value);
        animagus = parseInt(document.querySelector('input[name="animagus"]:checked').value);
        albus = parseInt(document.querySelector('input[name="albus"]:checked').value);
        candy = parseInt(document.querySelector('input[name="candy"]:checked').value);
        lady = parseInt(document.querySelector('input[name="lady"]:checked').value);
        // add total number of correct answers together based on values given in html
        score = weasley + hippogriff + animagus + albus + candy + lady;

    };

    // after submit button is clicked, hide game and start screen and show score screen.
    $("#submitButton").on("click", function () {
        $(".startScreen").hide();
        $(".gameScreen").hide();
        $(".failScreen").hide();
        $(".scoreScreen").show();
        // display correct number of guesses in scoreBox div
        $(".scoreBox").html("You correctly answered" + score + " questions on your O.W.L.");
    });

    // when user clicks restart button, reload game.
    $(".restart").on("click", function () {
        $(".gameScreen").hide();
        $(".scoreScreen").hide();
        $(".failScreen").hide();
        $(".startScreen").show();
    });


});