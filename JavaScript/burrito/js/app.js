$('.ui.checkbox').checkbox()

$('#ingredients').children().eq(3).css('backgroundColor', 'red');
console.log("Heelo");


$('.extra-ingredients').change(function(e) {
    console.log("Tesssttttt");
    $('#total_cost').html("Test");
});
//
// document.getElementsByName('extra-ingredients').addEventListener('click', function () {
//
//     document.getElementById('total_cost').innerHTML = "New Total";
// });