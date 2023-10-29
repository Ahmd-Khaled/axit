$(function(){
    'use strict';
    $(window).scroll(function(){
        window.console.log($('.navbar').height());
        window.console.log($(window).scrollTop());

        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()){
            navbar.addClass('scrolled');
        } else{
            navbar.removeClass('scrolled');
        }
    });

    // Deal with Tabs
    $('.tab-switch li').click(function(){
        // Add Class selected to Active link
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tabs-section .tabs-content > div').hide();
        // Show clicked Div
        $('.' + $(this).data('class')).show();
    });
});