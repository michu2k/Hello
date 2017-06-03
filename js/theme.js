// Hamburger menu
$(function(){
    $("#mobile-btn").click(function() { 
        var nav = $("#main-navigation");
        
        if (nav.css("right") == 0 + "px") 
            nav.css("right", "-250px");
        else nav.css("right", "0");

        $(this).toggleClass("toggled");
    });   
});

// Dropdown
$(function(){
    var dropdownclass = ".dropdown-menu";
    var toggleclass = "toggled";

    $(window).click(function(e) {
        if ( !$("li.dropdown > a").is(e.target) && $(window).width() > 992 )
            $(dropdownclass).removeClass(toggleclass);
    });

    $("li.dropdown > a").click(function(e) {
        e.preventDefault();  

        $(dropdownclass)
            .not($(this).next(dropdownclass))
            .removeClass(toggleclass);
        $(this)
            .next(dropdownclass)
            .toggleClass(toggleclass);
    });
});