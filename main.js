$(function(){
    let content = $('#content');
    $('#content').addClass('container');

    content.append('<div></div>').addClass('jumbotron');
    $('<h1></h1>').appendTo('#content').addClass('display-4').text('hello word')
});