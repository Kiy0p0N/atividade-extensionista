$(document).ready(function() {
    // Mapeia os botões aos vídeos respectivamente
    const videos = {
        video1: 'assets/video/web developer/Desenvolvimento Web - video 1.mp4',
        video2: 'assets/video/web developer/Desenvolvimento Web - video 2.mp4',
        video3: 'assets/video/web developer/Desenvolvimento Web - video 3.mp4',
        video4: 'assets/video/web developer/Desenvolvimento Web - video 4.mp4',
        video5: 'assets/video/web developer/Desenvolvimento Web - video 5.mp4',
        video6: 'assets/video/web developer/Desenvolvimento Web - video 6.mp4',
        video7: 'assets/video/web developer/Desenvolvimento Web - video 7.mp4',
        video8: 'assets/video/web developer/Desenvolvimento Web - video 8.mp4',
        video9: 'assets/video/web developer/Desenvolvimento Web - video 9.mp4',
        video10: 'assets/video/web developer/Desenvolvimento Web - video 10.mp4',
    };

    // Evento de clique genérico
    $('.links-section button').click(function() {
        const videoId = $(this).attr('id'); // Pega o ID do botão clicado
        const videoElement = $('video')[0]; // Seleciona o elemento de vídeo

        // Atualiza o src do vídeo
        $('video source').attr('src', videos[videoId]);
        
        // Carrega e reproduz o vídeo
        videoElement.load(); // Carrega o novo vídeo

        // Atualiza o texto do h1 para o texto do botão
        const textBtn = $('#' + videoId).text();
        $('.video-section h1').text(textBtn);
    });

    // Lógica para o botão 'Ver Mais' ou 'Ver Menos'
    $('.see-more').click(function(){
        $('.description').toggleClass('disable'); // Adiciona ou remove a classe 'disable'
        if($('.description').hasClass('disable')) {
            $('.see-more').text('Ver Mais ▼');
        } else {
            $('.see-more').text('Ver Menos ▲');
        }
    });
});
