$(document).ready(()=>{

    const date = new Date()
    const actualYear = date.getFullYear()

    $('footer p').text('© Copyright '+ actualYear)

})