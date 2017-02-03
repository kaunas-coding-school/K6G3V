$(document).ready(function () {
    $(".btn").click(function () {
        $(this).css('color',spalva);
        console.debug('Spalva', spalva);
        // alert('Pakeiciau spalva i: ' + spalva);
    });

    var spalva = function() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    $('.card').on('click',function(){
        $(this).find('img').animate({
            height: 'toggle',
            opacity: 'toggle'
        }, 500)

    });

    function manoFja() {
        alert('ok');
    }
});