// Hamburger menu
$(function() {
    $('#mobile-btn').click(function() { 
        let nav = $('#main-navigation');
        
        if (nav.css('right') == 0 + 'px') 
            nav.css('right', '-250px');
        else nav.css('right', '0');

        $(this).toggleClass('toggled');
        $('#mobile-background').toggleClass('toggled');
    });   
});

// Dropdown
$(function() {
    let dropdownclass = '.dropdown-menu';
    let toggleclass = 'toggled';

    $(window).click(function(e) {
        if ( !$('li.dropdown > a').is(e.target) && $(window).width() > 992 )
            $(dropdownclass).removeClass(toggleclass);
    });

    $('li.dropdown > a').click(function(e) {
        e.preventDefault();  

        $(dropdownclass)
            .not($(this).next(dropdownclass))
            .removeClass(toggleclass);
        $(this)
            .next(dropdownclass)
            .toggleClass(toggleclass);
    });
});

// Settings engine v1.1
$(function() {

    let file = JSON.parse($('#json_data').html()),
        lang = file.batflat.site_lang ? file.batflat.site_lang : file.batflat.user_lang;

    // Create social icons
    $.each(file.social, function(icon_name, link) {
        let icon = `<a href="${link}"><i class="fa fa-${icon_name}" aria-hidden="true"></i></a>`;
        $('.social').append(icon);
    });

    // Create translations
    $.each(file, function(key, value) {
        if (typeof value === 'object' && key === lang) 
        {
            $.each(value, function(id, val) {
                $(`#${id}`).html(val);
            });
        }
        
        if (typeof value === 'string') {
            $(`#${key}`).html(value);
        }
        
    });
});