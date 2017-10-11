"use strict";
var currentRound = 1;

var Dice = function () {
    this.locked = false;
    this.roll = function () {
        if (this.locked) {
            return this.value
        }
        var newVal = (Math.floor(Math.random() * 6 + 1));
        this.value = newVal;
        return newVal;
    };
    this.value = this.roll();
};

$('#roll').click(function () {
    die1.roll();
    die2.roll();
    updateDie(die1, 1); //TODO: Streamline
    updateDie(die2, 2);
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
        $(element).removeClass('held');
    } else {
        checkedDie.locked = true;
        $(element).addClass('held');
    }
}
#die1 > img

function updateDie(die, dieNum) {
    checkGameStatus(die1, die2, currentRound);
    $('#die' + dieNum + ' > img').attr('src', function () {
        if (die.value === 3) {
            return 'img/angry.png'
        } else {
            return 'img/' + die.value + ".png"
        }
    });

}

function checkGameStatus(die1, die2, thisRound) {
    var val1 = die1.value;
    var val2 = die2.value;

    console.log("Checking Game Status");
    $('#round' + thisRound).removeClass("round"); //clear the old round

    if (val1 === 3 && val2 ===3) {
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

   $('#round' + currentRound).addClass("round"); // Highlight the current round



}

function updateRound(newRound) {
    currentRound = newRound;

}

//Where the magic happens

var die1 = new Dice();
var die2 = new Dice();

//Testing

$('#round1win').click(function () {
    die1.value = 1;
    die2.value = 2;
    updateDie(die1, 1); //TODO: Streamline
    updateDie(die2, 2);
});

$('#round2win').click(function () {
    die1.value = 3;
    die2.value = 4;
    updateDie(die1, 1); //TODO: Streamline
    updateDie(die2, 2);
});

$('#round3win').click(function () {
    die1.value = 5;
    die2.value = 6;
    updateDie(die1, 1); //TODO: Streamline
    updateDie(die2, 2);
});