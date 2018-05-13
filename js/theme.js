$(function() {

    // Hamburger menu
    $('.navbar-btn').click(function() { 
        $('#main-navigation').toggleClass('toggled');
        $('#sidebar-close').toggleClass('toggled');
        $('#mobile-background').toggleClass('toggled');
    });   

    // Dropdown
    var dropdownClass = '.dropdown-menu';
    var dropdownLink = '.dropdown-link';

    $(window).click(function(e) {
        if ( !$(dropdownLink).is(e.target) && $(window).width() > 992 ) {
            $(dropdownClass).slideUp(300);
        }
    });

    $(dropdownLink).click(function(e) {
        e.preventDefault();

        $(dropdownClass).not($(this).next(dropdownClass)).slideUp(300);
        $(this).next(dropdownClass).slideToggle(300);
    });
});