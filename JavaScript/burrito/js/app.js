"use strict";
$('.ui.checkbox').checkbox()



// $('[name="extra-ingredients"]').change(function(e) {
$('.ui.form').change(function () {

    var serialized = decodeURI($(this).serialize());
    console.log(serialized);
    var serialarr = serialized.split('&');
    for (item in serialarr) {
        // console.log("Item: " + serialarr[item]);
        var twothings = serialarr[item].split('=');
        console.log("Parsed: " + twothings);
    }
    console.log (serialarr);
    $('#total_cost').html("Test");
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
    for (item in ingredientlist) {

    }
}