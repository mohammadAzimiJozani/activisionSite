$(document).ready(function () {


    $(".arrow1").hover(function () {
        $(this).children().toggleClass("change1");
        $(this).next().stop(true, true).slideDown('medium');
    },function () {
        $(this).children().toggleClass("change2")
        $(this).next().stop(true,true).slideUp('medium');
    })



})
