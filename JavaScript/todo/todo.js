$('#enter').click(function () {
    console.log("I did a thing");
   $('#list').append('<li class="todoItem">' + $('#toDoInput').val() + '...<strong class="removeBtn">X</strong></li>');
    $('#toDoInput').val("");

});

$('#list').on('click', '.removeBtn', function () {
    console.log("Trying to remove");
    $(this).parent().remove();
});

$('#toDoInput').keypress(function () {
    if (event.which === 13) {
        $('#enter').click()
    }
});


function newTodo (text) {
    $('#list').append('<li class="todoItem">' + $('#toDoInput').val() + '...<strong class="removeBtn">X</strong></li>');
}