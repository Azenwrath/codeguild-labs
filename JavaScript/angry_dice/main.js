"use strict";
let currentRound = 1;

let Dice = function (id) {
    this.id = id;
    this.containerId = $('#die' + id);
    this.locked = false;
    this.value = 3; // Initialized to angry dice
    this.roll = function () {
        if (this.locked) {
            return this.value
        } else {
            this.value = (Math.floor(Math.random() * 6 + 1));
        }
    };
    this.render = function () {
        var clone = this.containerId.clone();
        $('#die' + id).remove();
        this.containerId = clone;
        clone.appendTo('#die'+ id + 'container'); //This is a way to trigger the animation again.
        this.containerId.addClass('fast-wiggle');
        this.containerId.attr('src', 'img/' + this.value + ".png");
    }
};


$('#roll').click(function () {
    die1.roll();
    die2.roll();
    die1.render();
    die2.render();
    checkGameStatus(die1, die2, currentRound);
});

$('#hold1').click(function () {
    checkDie(die1, '#hold1');
});

$('#hold2').click(function () {
    checkDie(die2, '#hold2');
});

function checkDie(checkedDie, element) { //TODO: Add a warning on sixes
    if (checkedDie.locked) {
        checkedDie.locked = false;
        $(element).removeClass('held');
    } else if (checkedDie.value === 6) {
        checkedDie.locked = false;
        $('#sixWarning').removeClass('playRed');
        $('#sixWarning').addClass('playRed');
        console.log("Triggering six warning");
        $(element).removeClass('held');
    } else {
        checkedDie.locked = true;
        $(element).addClass('held');
    }
}



function checkGameStatus(die1, die2, thisRound) {
    let val1 = die1.value;
    let val2 = die2.value;

    console.log("Checking Game Status");
    $('#round' + thisRound).removeClass("round play"); //clear the old round

    if (val1 === 3 && val2 ===3) {
        $('#twoDiceWarning').removeClass('playRed');
        $('#twoDiceWarning').addClass('playRed');
                updateRound(1);
                return;
        }

    if (thisRound === 1) {
        console.log("round 1: val1 = " + val1 + " val2 = " + val2);
        if (val1 + val2 === 3) {
            updateRound(2);
            return;

        }

    }
    if (thisRound === 2) {
        console.log("round 2: val1 = " + val1 + " val2 = " + val2);
        if (val1 === 3 || val2 === 3) {
            if (val1 === 4 || val2 === 4) {
                updateRound(3);
                return;
            }

        }
    }
    if (thisRound === 3) {
        console.log("round 3: val1 = " + val1 + " val2 = " + val2);
        if (val1 + val2 === 11) {
            $('body').css('backgroundColor', 'red'); //TODO: Make a better win screen
            $("#roll").off( "click");

        }
    }
    updateRound(thisRound);
   // $('#round' + currentRound).addClass("round play"); // Highlight the current round



}

function updateRound(newRound) {
    currentRound = newRound;
    $('#round' + currentRound).addClass("round play"); // Highlight the current round

}

//Where the magic happens

let die1 = new Dice(1);
let die2 = new Dice(2);

//Testing

$('#round1win').click(function () {
    die1.value = 1;
    die2.value = 2;
    die1.render();
    die2.render();
    checkGameStatus(die1, die2, currentRound);
});

$('#round2win').click(function () {
    die1.value = 3;
    die2.value = 4;
    die1.render();
    die2.render();
    checkGameStatus(die1, die2, currentRound);
});

$('#round3win').click(function () {
    die1.value = 5;
    die2.value = 6;
    die1.render();
    die2.render();
    checkGameStatus(die1, die2, currentRound);
});