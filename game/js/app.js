//store colors
var colors = ["red", "blue", "green", "yellow"];

// store the game pattern
var gamePattern = [];

// selected the user pattern
var userSelectedPattern =[];

// store the game pattern
var gameLevel = [];

//store the game state
var gameState = false;

// listen for keypress

$(document).keypress(function(){
    if(gameState === false){
        gameState = true;
    }

    nextlevel();
       
});

// listen for the user click
$(".btn").click(function(){
    //get the user selected color
    var selectedColor = $(this).attr("id");
    userSelectedPattern.push(selectedColor);
    playSound(selectedColor);
    animative_btn(selectedColor);

    // check pattern
    var lastIndex = userSelectedPattern.length - 1;

    if(userSelectedPattern[lastIndex] === gamePattern[lastIndex]){
        if(userSelectedPattern.length === gamePattern.length){
            userSelectedPattern = [];
            setTimeout(function(){
                nextlevel();
            }, 1000)
        }
    }
    else{
        $("h1").text("Game Over, press anykey to Restart");
        $("body").addClass("error");
        setTimeout(function(){
            $("body").removeClass("error");
        },500)

        playSound("wrong");

        // resrt the game 
        gameLevel = 0;
        gameState = false;
        gamePattern = [];
        userSelectedPattern = [];
    }
})

//paly sound
function playSound(color){
    var sound = new Audio("sounds/" + color + ".mp3");
    sound.play();
}

// animative
function animative_btn(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed")
    }, 225)
}

function nextlevel(){
     //select ranom cololr
     var randomNum = Math.floor(Math.random() *4 );
     var randomColor = colors[randomNum];

     //store in game pattern
     gamePattern.push(randomColor);

      //increse game level
     gameLevel++;
     $("h1").text("Level "+ gameLevel);

     // paly colors sound
     playSound(randomColor);
     
     // animate
     animative_btn(randomColor)
}
