// Fired when DOM is finished loading
$(document).ready(function () {
    resizeMapComponents($(window).width(), $(window).height() - 130, 0);

    // Add pin hover mobile fix
    $("#add-pin-button").bind("click", function (e) {
        $("#map-transparent-overlay").toggle();
        $("#add-message").toggle();
        $("#add-poi").toggle();
    });

    // Close menu
    $("#map-menu-close").bind("click", function (e) {
        $("#map-menu").removeClass("open");

        // Hide side menu
        $("#map-menu").animate({
            left: "-305px"
        }, 200);

        // Expand messages
        $("#map-message-wrapper").animate({
            left: "0px",
            width: ($("#map-message-wrapper").width() + 305) + "px"
        }, 200);

        // Expand overlay
        $("#map-transparent-overlay").animate({
            left: "0px",
            width: ($("#map-message-wrapper").width() + 305) + "px"
        }, 200);
    });
});

// Fired when window is resized by the user
$(window).resize(function () {
    resizeMapComponents($(window).width(), $(window).height() - 130, 100);
});

// Adjust the heights and width to be window dependent
function resizeMapComponents(width, height, delay) {
    setTimeout(function () {
        // Resize height, width will always be 100%
        $("#content-container").css("height", height + "px");

        // Resize height, width will always be 100%
        // Adjust the background position for the loading animation (slightly above center)
        $("#map-loading").css("height", height + "px");
        $("#map-loading").css("background-position", ((width / 2) - 32) + "px " + (height / 3) + "px");

        // Resize height, resize width (gets changed to pixel dependent on menu pop out)
        $("#map-transparent-overlay").css("height", height + "px");
        $("#map-transparent-overlay").css("width", width + "px");

        // Height will always be fixed, resize width (gets changed to pixel dependent on menu pop out)
        $("#map-message-wrapper").css("width", width + "px");
        $("#map-menu").css("height", (height - 40) + "px");

        // Resize height, width will always be 100%
        $("#map").css("height", height + "px");

        // Resize widths that are dependent on menu pop out
        if ($("#map-menu").hasClass("open")) {
            $("#map-transparent-overlay").css("width", (width - 305) + "px");
            $("#map-message-wrapper").css("width", (width - 305) + "px");
        }
    }, delay);
}