$(document).ready(function(){

    $("#img").click(function(){
        var img =  document.getElementById('img');
        $(this).canvas(resizeTo(150, 150));

    });

    function mouseOver() {
        img.style.height="300px";
        img.style.width="300px";
    }

    img.onclick = mouseOver;

});

