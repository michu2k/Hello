$(function() {

    // Hamburger menu
    $('.navbar-btn').click(function() { 
        $('#main-navigation').toggleClass('toggled');
        $('#sidebar-close').toggleClass('toggled');
        $('#mobile-background').toggleClass('toggled');
    });   

    // Dropdown
    var dropdownMenuClass = '.dropdown-menu';
    var dropdownMenu = $(dropdownMenuClass);
    var dropdownLink = $('.dropdown-link');

    if (dropdownMenu.length) {
        $(window).click(function(e) {
            if ( !dropdownLink.is(e.target) && $(window).width() > 992 ) {
                dropdownMenu.slideUp(300);
            }
        });

        dropdownLink.click(function(e) {
            e.preventDefault();

            dropdownMenu.not($(this).next(dropdownMenuClass)).slideUp(300);
            $(this).next(dropdownMenuClass).slideToggle(300);
        });
    }

    // Share buttons
    var tooltips = $('.share-btn', '.post-share');
    var title, url;

    if (tooltips.length) {
        tooltips.each(function(i) {

            $(this).on('click', function(e) {

                title = $(tooltips[i]).attr('data-title');
                url = $(tooltips[i]).attr('href');

                // Open share window
                window.open(url, title, 'width=500, height=300');

                e.preventDefault();
            });
        });
    }
});