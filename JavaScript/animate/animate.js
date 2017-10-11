$('#left').click(function () {

    console.log($(window).height());
    var el = $('#content');
    var moveBy = 50;
    if (el.position().left - moveBy < 0) {
        el.stop().animate({
            left: '0'
        })
    } else {
        el.stop().animate({
            left: '-=' + moveBy + 'px'
        })
    }
});

$('#right').click(function () {
    var width = $(window).width();
    var el = $("#content");
    console.log("Window width: " + width);
    console.log("element pos: " + el.position().left);
    console.log("Element width: " + el.width());
    if (el.position().left + el.width() >= width) {
        el.stop().animate({
            right: (width + el.width()) + 'px'
        })
    } else {
        el.stop().animate({
            left: '+=50px'
        })
    }
});

$('#up').click(function () {
    $("#content").stop().animate({
        top: '-=50px'
    })
});

$('#down').click(function () {
    $("#content").stop().animate({
        top: '+=50px'
    })
});
// function runthis() {
//     $("#content").animate({
//         width: '200px'
//     }, 400, function () {
//         $("#content").animate({
//             height: '200px'
//         }, 2000)
//     });
// }
// runthis();