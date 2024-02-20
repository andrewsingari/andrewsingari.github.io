document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('#navbarSupportedContent .nav-link');

    function closeNavbar() {
        var button = document.querySelector('.navbar-toggler');
        var isExpanded = button.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            button.click();
        }
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', closeNavbar);
    });
});
