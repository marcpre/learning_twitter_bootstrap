/*
Bizz Bar
*/

$(document).ready(function() {
    let bb_height = $('#bizzbar').height();
    const bb_padding = parseInt($('#bizzbar').css('padding'));
    const bb_border = parseInt($('#bizzbar').css('border-bottom-width'));

    bb_height += (2 * bb_padding) + bb_border;

    $("#bizzbar").effect("bounce", "slow");
    $('nav').css('margin-top', bb_height + 'px');

    $("open").click(function() {
        $("#bizzbar").effect("bounce", "slow");
        $("open").slideUp();
        $('nav').css('margin-top', bb_height + 'px');
    });

    $("close").click(function() {
        $("#bizzbar").slideUp();
        $("open").slideDown();
        $('nav').css('margin-top', '0px');
    });
});