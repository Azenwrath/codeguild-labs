"use strict";

var Dice = function () {
    this.locked = false;
    this.roll = function () {
        if (this.locked) {return this.value}
        var newVal = (Math.floor(Math.random() * 6 + 1));
        this.value = newVal;
        return newVal;
    };
    this.value = this.roll();



};



$('#roll').click(function () {
    die1.roll();
    die2.roll();
    updateDie(die1, 1);
    updateDie(die2, 2);
});

$('#hold1').click(function () {
    if (die1.locked) {
        die1.locked = false;
        $('#hold1').removeClass('held');
    } else {
        die1.locked = true;
        $('#hold1').addClass('held');
    }

});

$('#hold2').click(function () {
    if (die2.locked) {
        die2.locked = false;
        $('#hold2').removeClass('held');
    } else {
        die2.locked = true;
        $('#hold2').addClass('held');
    }

});


function updateDie (die, dieNum) {
    $('#die' + dieNum + ' > img').attr('src', function () {
    if (die.value === 3) {
            return 'img/angry.png'
        } else {
            return 'img/' + die.value + ".png"
        }
})}

//Where the magic happens

var die1 = new Dice();
var die2 = new Dice();

