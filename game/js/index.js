// store the color
var colors = ["green", "red", "yellow", "blue"];

// store the game plan
var gamePattern =[];

// store the user game pattern
var userSelectedPattern = [];

// store the gmae level
var gameLevel = 0;

// store the game state
var gameState = false;

// alert and qustion
//let rules = alert("this is a game");

// AskName
//let AskName = prompt("what is your name");
// doubt here
// while (condition  === true) {
//     if (AskName = String()) {
//         let f = AskName.slice(0, 1);
//         let upper = f.toUpperCase();
//         let o = AskName.slice(1, AskName.length);
//         let lower = o.toLowerCase();
//         var perfectName = upper + lower ;
//         condition = true;
//     } else{
//         alert("pls insert your name");
//         condition = false;
//     }
// }; 


// let f = AskName.slice(0, 1);
// let upper = f.toUpperCase();
// let o = AskName.slice(1, AskName.length);
// let lower = o.toLowerCase();
// let perfectName = upper + lower ;
 
// listen key press event
$(document).keypress(function(){
    if (gameState === false) {
        gameState = true;
        NextLevel();
    }
});

// listen for user click event

$(".btn").click(function () {
    // get the user selected color
    var SelectedColor = $(this).attr("id");
      
    userSelectedPattern.push(SelectedColor);

    playSound(SelectedColor);
    
    animatePressBtn(SelectedColor);

    // check game pattern
    var LastIndex = userSelectedPattern.length - 1;
    if(userSelectedPattern[LastIndex] === gamePattern[LastIndex]){
        if (userSelectedPattern.length === gamePattern.length) {
            
            userSelectedPattern = [];  // ???
            setTimeout(function () {
                NextLevel();    
            }, 800);
         }
    }
    else{
        // console.log("Game over");
        
        $("h1").text(perfectName +" score is " +( gameLevel -1) 
        +" ,Game Over, Press Any key To Restart ");
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        
        // when i click next key then only restrat game
        
        gameLevel = 0;
        gameState = false;
        gamePattern = [];
        userSelectedPattern =[];

        


    }
});



// play sound
function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
};


//  animatePressBtn
function animatePressBtn(color) {
    $("#" + color).addClass("pressed");

    setTimeout( function(){
        $("#" + color).removeClass("pressed");
    } ,100);
};

// nextlevel

function NextLevel() {
    // generate randomBum
    var randomNum = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomNum];

    // store the random color in gamePattern
    gamePattern.push(randomColor);

    // increase game level
    gameLevel +=  1;
    $("h1").text("Level " + gameLevel);

    // play sound for color
    playSound(randomColor);

    // animate the btn
    animatePressBtn(randomColor);
};