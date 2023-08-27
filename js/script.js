$(function() {
    // Same as document.addEventListener("DOMContentLoaded"
    // Same as document.querySelector("#navbarToggle").addEventListener("click"
    $("#button1").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapse-1").collapse('hide');
        }
    });
});
