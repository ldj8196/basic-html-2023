$(document).ready(function(){

});

$(window).scroll(function() {
    // property = 멤버변수 소괄호 필요 없음, method 함수라서 괄호가 필요
    let value = window.scrollY;

    $('#text').css('margin-top', value*2.0+'px');
    $('#leaf').css({
        'top': value * -0.4 + 'px',
        'left': value * 1.2 + 'px'
    });
    $('#hill1').css('top', value*0.2+'px');
    $('#hill2').css('top', value*0.2+'px');
    $('#hill3').css('top', value*0.2+'px');
    $('#hill4').css({
        'top' : value * 0.5 +'px',
        'left' : value * -1.2 + 'px'
    });

    $('#hill5').css({
        'top' : value*0.5+'px',
        'left' : value*1.2+'px'
    });
    
});