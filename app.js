$(function() {
    $('.makeRed').click(makeRed);
    $('.makeBlue').click(makeBlue);
    $('.makeGreen').click(makeGreen);

    $('.hideShow').click(hideShow);

    $('.left_btn').click(moveLeft);
    $('.right_btn').click(moveRight);
    $('.up_btn').click(moveUp);
    $('.down_btn').click(moveDown);

    var $width=$(document).width();
    var $height=$(document).height();

    $(window).resize(function() {
         $width=$(document).width();
         $height=$(document).height();
     })

    function makeRed(){
        $('.ball').css("background","red");
    }

    function makeBlue(){
        $('.ball').css("background","blue");
    }

    function makeGreen(){
        $('.ball').css("background","green");
    }

    function hideShow(){
        $('.ball').toggle();
    }

    function moveLeft() {
        $('.ball').animate({"left":'0px'});
    }

    function moveRight() {
        var m=$width-100;
        var n= m + 'px';
        $('.ball').animate({"left":n});
    }
    function moveUp() {
        $('.ball').animate({"top":'0px'});
    }

    function moveDown() {
        var m=$height-100;
        var n= m + 'px';
        $('.ball').animate({"top":n});
    }

});
