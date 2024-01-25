window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const header = this.document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    const navigationItems = document.querySelectorAll('.navigation a');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    navigationItems.forEach((navItem) => {
        navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    const scroolBtn = document.querySelector('.scrollToTop-btn');
    window.addEventListener('scroll', () => {
        scroolBtn.classList.toggle('active', window.scrollY > 500);
    });
    scroolBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    window.addEventListener('scroll', () => {
        let reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;

            if (revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            }
        }
    });
});
