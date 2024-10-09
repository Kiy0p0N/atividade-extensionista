$(document).ready(()=>{
    
    
    $('#web').mouseenter(()=>{
        $('#text-web-dev').fadeIn(200)
    }).mouseleave(()=>{
        $('#text-web-dev').fadeOut(0);
    })


    $('#python').mouseenter(()=>{
        $('#text-python').fadeIn(200)
    }).mouseleave(()=>{
        $('#text-python').fadeOut(0);
    })


    $('#ia').mouseenter(()=>{
        $('#text-ia').fadeIn(200)
    }).mouseleave(()=>{
        $('#text-ia').fadeOut(0);
    })

    
    $('.blocked').click(()=>{
        $('#customAlert').css('display', 'flex')
    })

    $('#closeAlert').click(()=>{
        $('#customAlert').css('display', 'none')
    })
})