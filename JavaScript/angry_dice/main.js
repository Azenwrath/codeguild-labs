"use strict";

var Dice = function () {
    this.value = this.roll(),
    this.roll = function () {
        this.value = (Math.floor(Math.random() * 6 + 1))
    }
}

var die = new Dice();
console.log(die.value);

$.('#roll').click(function () {
    die.roll();
    console.log(die.value);
})