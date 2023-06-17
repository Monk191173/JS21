'use strict';
$(document).ready(function () {
    $('#text').html('2<br>minute');
    $('.polosa').slideDown(60000, 'linear', () => {
        $('#text').html('1<br>minute');
        $('.polosa').slideUp(60000, 'linear', () => {
            $('#text').html('0<br>minute');
        });
    });

    let str = $('span[id="s1"]').text() +
        $('b.s2').text() +
        $('#second i:first').text() +
        $('q[title="hello"]').text() +
        $('a[target="_blank"]').text() +
        $('.extra').eq(1).text()
    console.log(str);
});
