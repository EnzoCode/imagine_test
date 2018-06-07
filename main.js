$(function(){

    //vanilla js
    document.getElementById('texto1').innerText = 'Texto com Javascript';

    //jQuery id  
    $('#texto2').text('Texto com jQuery');
    
    //jQuery class 
    $('.texto3').text('Texto com jQuery3');

    //Html class tag
    $('#html').html('<h1>Cannon Rush</h1>')
    //editando/adicionando parte do texto
    $('#html').append('<a>Clique aqui</a>');
    //editar atributos
    $('#html a').attr('href', 'http://github.com')
    //adicionando classes
    $('#html h1').addClass('red');
    $('#html a').addClass('red');
    // Removendo uma classe
    $('#html a').removeClass('red');

    $('#texto2').css({color: 'blue', fontSize: '30px'});
    
});