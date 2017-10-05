$('#newjoke').on('click', {bullshit: "some text"}, getJoke);

//
//     function() {
// var xhttp = new XMLHttpRequest();
//
// xhttp.onreadystatechange = function () {
//     "use strict";
//     if (this.readyState === 4 && this.status === 200) {
//         var json = JSON.parse(this.response).value;
//         document.getElementById('joke').innerHTML= json.joke;
//     }
// };
// xhttp.open("GET", 'http://api.icndb.com/jokes/random', true);
// xhttp.send();
// })
//



function getJoke(bullshit) {
    "use strict";
    alert(bullshit.bullshit);
    $.ajax({
        url: 'http://api.icndb.com/jokes/random',
        type: 'GET',
        success: function (data) {
            $('#joke').html(data.value.joke);
        }
    })
};