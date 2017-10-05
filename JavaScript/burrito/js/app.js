"use strict";
$('.ui.checkbox').checkbox()
var serialarr;
var serialized;
var item;
var burritoList= [];
var burritoTranslator = {
    wheat: "Wheat Tortilla",
    white: "White Tortilla",
    spinach: "Spinach Tortilla",
    corn: "Corn Tortilla",
    carnitas: "Carnitas",
    chicken: "Chicken",
    sofritas: "Sofritas",
    beans: "Beans",
    cheese: "Cheese",
    salsa: "Salsa",
    'sour cream': "Sour Cream",
    guacamole: "Guacamole",
    "scrambled-egg": "Scrambled egg",
    potatoes: "Potatoes",
    "sun-dried-tomatoes": "Sun-dried Tomatoes",
    olives: "Olives",
    "sauteed-mushrooms": "Sauteed Mushrooms",
    "sauteed-onions": "Sauteed Onions",
    jalapenos: "Jalapenos"



};




// $('[name="extra-ingredients"]').change(function(e) {
$('.ui.form').change(function () {
    var serialized = decodeURI($(this).serialize());
    var serialarr = serialized.split('&');
    burritoList = []; // Clear burritoList to prevent exponential burritos
    for (item in serialarr) {
        // console.log("Item: " + serialarr[item]);
        burritoList.push(serialarr[item].split('='));
    }
    console.log ("Passing burritoList: " + burritoList);
    updateIngredients(burritoList);

});
//
// var burrito = {
//     tortilla: "White Flour",
//     meat: [],
//     beans:
// }
// ingredients = ($('.ui.checkbox input'));
//
// console.log(ingredients[0].name());

function updateIngredients(ingredientlist) {
    var firstIngredient;
    var addons = 0;
    var delivery = 0;
    $('#ingredients > ul > li').remove();
    for (item in ingredientlist) {
        firstIngredient=ingredientlist[item][0];
        if (firstIngredient === "included-ingredients"||firstIngredient === "tortilla" || firstIngredient === "meat") {
            console.log("Ingredient: " + ingredientlist[item][1]);
            $('#ingredients > ul').append('<li class="item">'+ burritoTranslator[ingredientlist[item][1]] + '</li>');
        } else if (firstIngredient === "extra-ingredients") {
            console.log("Ingredient: " + ingredientlist[item][1]);
            $('#ingredients > ul').append('<li class="item">'+ burritoTranslator[ingredientlist[item][1]] + '</li>');
            addons++;
        } else if (firstIngredient === "delivery" && ingredientlist[item][1] == "delivery") {
            console.log("I found delivery status");
            delivery = 5;

        }


        $('#total_cost').html("Total: $" + Number(6 + delivery + (addons * .5)).toFixed(2));
    }
}


