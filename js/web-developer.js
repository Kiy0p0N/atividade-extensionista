
$(document).ready(function() {

    // Mapeia os botões aos respectivos vídeos
    const videos = {
        video1: 'https://www.youtube.com/embed/eSW2LVbPThw?si=gEoOydFm7u1jpjll',
        video2: 'https://www.youtube.com/embed/xkmwnagLdcc?si=Ytl2aW4XVZYdtd7v'
    };

    const description = {
        video1: 'Acode: https://www.youtube.com/embed/193o45FerK0?si=KJXjET2N73kIZAz3',
        video2: 'Hello world.'
    }

    // Evento de clique genérico
    $('.links-section button').click(function() {
        const videoId = $(this).attr('id');  // Pega o ID do botão clicado

        $('iframe').attr('src', videos[videoId]);  // Atualiza o iframe com o vídeo correspondente
        $('.description p').text(description[videoId])

        const textBtn = $('#' + videoId).text()  // Pega o texto do botão clicado
        $('.video-section h1').text(textBtn)  // Atualiza o texto do h1 para o texto do botão 
    });


    $('.see-more').click(function(){
        
        $('.description').toggleClass('disable')  // Remove a classe caso exista ou adiciona caso ela não exista

        if($('.description').hasClass('disable')){  // Verifica se tem a classe disable
            $('.see-more').text('Ver Mais ▼')  // Se tiver o texto do botão será 'Ver Mais'
        } else {
            $('.see-more').text('Ver Menos ▲')  // Se não tiver o texto será 'Ver Menos'
        }
    })

});
