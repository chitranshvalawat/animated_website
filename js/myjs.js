$(document).ready(function(){

    $('.play-pause-btn').on('click',function(){
        $('.play-pause-btn').addClass('animate');
    setTimeout(function() {
        $('.play-pause-btn').attr('data-click', 1)
        $('.play-pause-btn').addClass('hide').removeClass('animate');
        $('#video')[0].play();
        $('.video').addClass('show');
    }, 2000);
    });
    
    });