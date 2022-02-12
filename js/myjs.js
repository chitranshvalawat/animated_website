$(document).ready(function () {

    $('.play-pause-btn').on('click', function () {
        $(this).addClass('animate');
        let that = this
        console.log(that.classList.contains("play-pause-btn4"));
        setTimeout(function () {
            $(that).removeClass('animate');
            // console.log($(".play-pause-btn1").attr("data-click"))
            // console.log($(".play-pause-btn2").attr("data-click"))
            // console.log($(".play-pause-btn3").attr("data-click"))
            // console.log(that.classList.contains(".play-pause-btn4") )
            if (parseInt($(".play-pause-btn1").attr("data-click")) && parseInt($(".play-pause-btn2").attr("data-click")) && parseInt($(".play-pause-btn3").attr("data-click"))) {
                $('.play-pause-btn').addClass('grow');
                setTimeout(() => {
                    $('#video')[0].play();
                    $('.video').addClass('show');

                }, 2000);


            }
            $(that).attr('data-click', 1)
            // $('#video')[0].play();
            // $('.video').addClass('show');
        }, 2000);
    });

});