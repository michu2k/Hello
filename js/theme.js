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

// Settings engine v1.0
$(function() {

    let file = JSON.parse($('#json_data').html()),
        lang = file.user_lang ? file.user_lang : file.site_lang,
        translations = [];
 
    // Create social icons
    $.each(file.social, function(key, link) {
        let icon = `<a href="${link}"><i class="fa fa-${key}" aria-hidden="true"></i></a>`;
        $('.social').append(icon);
    });

    // Translation
    $.each(file, function(key, value) {
        if (typeof value === 'object' && key === lang) 
        {
            $.each(value, function(key_deep, value_deep) {
                translations.push(value_deep);
            }); 
        }
    });

    // Set translations
    $('#author_name').html(file.author_name);
    $('#follow_me').html(translations[0]);
    $('#created').html(translations[1]);
    $('#share').html(translations[2]);
    $('#tweet').html(translations[3]);

});