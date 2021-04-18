window.addEventListener('load', () => {
    gsap.defaults({ ease: 'power2' });

    const bannerScroll = (() => {
        gsap.to('.main_banner-box', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                scrub: 1,
            },
            yPercent: -40,
        });
    })();

    const mainRightText = (() => {
        gsap.to('.main_front-text > .right', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                scrub: 1,
            },
            xPercent: 50,
        });

        gsap.to('.main_back-text > .right', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                scrub: 1,
            },
            xPercent: 50,
        });
    })();

    const mainLeftText = (() => {
        gsap.to('.main_front-text > .left', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                scrub: 1,
            },
            xPercent: -50,
        });

        gsap.to('.main_back-text > .left', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top top',
                scrub: 1,
            },
            xPercent: -50,
        });
    })();

    const menuClick = (() => {
        const menuBtn = document.querySelector('.header_mobile-menu');
        const nav = document.querySelector('.header > nav');
        menuBtn.addEventListener('click', () => {
            if (nav.classList.contains('view-menu')) {
                nav.classList.remove('view-menu');
                gsap.to(menuBtn, { duration: 0.6, text: 'MENU' });
            } else if (!nav.classList.contains('view-menu')) {
                nav.classList.add('view-menu');
                gsap.to(menuBtn, { duration: 0.6, text: 'CLOSE' });
            }
        });
    })();
});
