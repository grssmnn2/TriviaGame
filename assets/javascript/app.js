$(document).ready(function () {
    // variables for questions to be edited later
    var weasley;
    var hippogriff;
    var albus;
    var candy;
    var lady;
    var animagus;
    // variables for score and timer which update based on specific game
    var score;
    var incorrect;
    var timer;
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
        $("body").css("background-image", "url(assets/images/quidditch.jpg)");
        $(".scoreScreen").hide();
        $(".failScreen").hide();
        // initial time to submit is 30 seconds
        var timeLeft = 30;
        // timer counts down by 1 second, runs countdown function each time
        timer = setInterval(countdown, 1000);
        function countdown() {
            // if time left is 0, let user know and stop timer
            if (timeLeft == 0) {
                clearInterval(timer);
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
        incorrect = (6-score);

         // display correct number of guesses in scoreBox div
         $(".scoreBox").html("You answered " + score + " questions correctly and " + incorrect +" incorrectly on your O.W.L.");
         var result="";
       
        if (score == 0) {result = "Professor Snape will have you expelled within the hour."};
        if (score == 1) {result = "Professor Snape says, 'Are you sure you're supposed to be in this class?'"};
        if (score == 2) {result = "Maybe a muggle school is more your style."};
        if (score == 3) {result = "Professor Snape says, 'You'll never reach my level of expertise.'"};
        if (score == 4) {result = "Professor Snape says, 'Detention. For lack of studying.'"};
        if (score == 5) {result = "Professor Snape says, 'I see you've been studying with Miss Granger.'"};
        if (score == 6) {result = "Professor Snape says, 'Moderately satisfied."};
        $("#snapeResponse").html(result); 
        // must add in to keep page from refreshing and showing start screen immediately
        return false;

    };

    // after submit button is clicked, hide game and start screen and show score screen.
    $("#submitButton").on("click", function () {
        clearInterval(timer);
        $(".startScreen").hide();
        $(".gameScreen").hide();
        $(".failScreen").hide();
        $(".scoreScreen").show();
        $("body").css("background-image", "url(assets/images/greathall.jpg)");
       
        
    });

    // when user clicks restart button, reload game.
    $(".restart").on("click", function () {
        $(".gameScreen").hide();
        $(".scoreScreen").hide();
        $(".failScreen").hide();
        $(".startScreen").show();
    });


});