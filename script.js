
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        
    });
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .about-content', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.about-content h2, .about-content h3, .about-content h4, .about-content p, .home-content h1, .home-content h2, .home-content h3, .home-content h4',{ origin: 'left' });

const typed = new Typed('.multiple-text', {
    strings: ['Engineering', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})