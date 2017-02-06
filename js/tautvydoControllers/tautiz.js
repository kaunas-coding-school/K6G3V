$(document).ready(function () {
/*    $(".btn").click(function () {
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
*/

    function keistiKoordinates(elem, x, y){
        console.log('x:'+x+' y:'+y)
        $(elem).animate({
            top: y,
            left: x
        });
    }

    function keistiKoordinatesbe(elem, x, y){
        console.log('x:'+x+' y:'+y)
        $(elem).css({
            top: y,
            left: x
        });
    }

/*    keistiKoordinates('.test', 0, 0);
    for( var i = 0; i < 10; ++i){
        var x= (Math.floor(Math.random() * 10) + 1) * 100;
        var y= (Math.floor(Math.random() * 6) + 1) * 100;
        keistiKoordinates('.test', x, y);
    }
    keistiKoordinates('.test', 0, 0);*/

    $(document).click(function(e) {
        if (e.button == 0) {
            console.debug(e);
            keistiKoordinates('.test', e.clientX, e.clientY);
        }
    });

    function checkKey(e) {

        var elem = $('.test');
        var position = elem.position();
        var y = position.top;
        var x = position.left;

        switch (e.keyCode) {
            case 40:
                //keliaus zemyn;
                keistiKoordinatesbe(elem, x, y+10);
                break;
            case 38:
                //keliaus virsun;
                keistiKoordinatesbe(elem, x, y-10);
                break;
            case 37:
                // keliaus i kaire;
                keistiKoordinatesbe(elem, x-10, y);
                break;
            case 39:
                // keliaus i desine;
                keistiKoordinatesbe(elem, x+10, y);
                break;
            default:
        }
    }

    $(document).on("keyup", function() {
        $('.test').stop(true);
    });
    $(document).keydown(checkKey);

});