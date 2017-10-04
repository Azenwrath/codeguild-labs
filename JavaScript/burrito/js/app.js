$('.ui.checkbox').checkbox()



$('[name="extra-ingredients"]').change(function(e) {
    console.log("Tesssttttt");
    $('#total_cost').html("Test");
});
//
// var burrito = {
//     tortilla: "White Flour",
//     meat: [],
//     beans:
// }
ingredients = ($('.ui.checkbox input'));

console.log(ingredients[0].name());