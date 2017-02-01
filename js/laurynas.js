$(document).ready(function(){

    $("p").click(function(){

        var spalva = get_random_color()
        $(this).css('color', spalva );
        console.debug('Spalva' + spalva)

    });

    $("img").click(function () {

        var sizeHeight = getRandomArbitrary(100, 400);
        var sizeWidth = getRandomArbitrary(100, 400);

        $(this).height(sizeHeight).width(sizeWidth);


        console.debug(sizeHeight, sizeWidth)
    });

    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


    function get_random_color() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.round(Math.random() * 15)];
            }
            return color;
    }

});
