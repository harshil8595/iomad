function navClose() {
    var preference = 'drawer-open-nav';

    $('body').removeClass('drawer-open-left');
    $('[data-action=toggle-drawer]').attr('aria-expanded', 'false');
    $('#htm-drawer').attr('aria-hidden', 'false').removeClass('open');
    M.util.set_user_preference(preference, 'false');
}

$(document).ready(function() {

    objectFitVideos();
    
    // Custom Menu Toggle
    // ---------------------------------
    $('#custom-menu-toggle').click(function() {
        $('#custom-menu-wrap').toggleClass('active');
    });

    
    var winH = $(window).height()-60;
    $('#htm-drawer').css({ maxHeight: winH });
    $('.scrollbar-inner').scrollbar();

    $('#nav-close').click(function(){
        navClose();
    });

    // Close Nav when esc key is pressed
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            if ($('#htm-drawer').attr('aria-hidden') == 'false') {
                navClose();
            }
        }
    });

    // Site news ticker
    // ---------------------------------
    var $pArr = $('#site-news-forum>.forumpost');
    var pArrLen = $pArr.length;
    for (var i = 0; i < pArrLen; i += pArrLen) {
        $pArr.filter(':eq(' + i + '),:lt(' + (i + pArrLen) + '):gt(' + i + ')').wrapAll('<div id="newsSlider" class="d-flex flex-wrap flex-row"/>');
    }
    
    $(window).resize(function() {
        winH = $(window).height() - 60;
        $('#htm-drawer').css({ maxHeight: winH });
        $('#htm-drawer').find('.scrollbar-inner').css({ maxHeight: winH });
    });

    console.log('custom.js loaded');
});