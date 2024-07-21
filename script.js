document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll to section when navigation link is clicked
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
