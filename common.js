'use strict';

window.addEventListener('load', () => {
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

    gsap.defaults({ ease: 'circ.out' });

    const loadBannerBox = (() => {
        gsap.from(CSSRulePlugin.getRule('.main_banner-box::before'), { cssRule: { height: '100%' }, duration: 1, delay: 0.5 });
    })();

    const loadMainRText = (() => {
        gsap.from('.main_back-text > .right span', { delay: 0.8, rotation: 15, yPercent: 250, duration: 0.8 });
        gsap.from('.main_front-text > .right span', { delay: 0.8, rotation: 15, yPercent: 250, duration: 0.8 });
        gsap.from('.main_back-text > .left span', { delay: 0.8, rotation: 15, yPercent: 320, duration: 0.8 });
        gsap.from('.main_front-text > .left span', { delay: 0.8, rotation: 15, yPercent: 320, duration: 0.8 });
    })();

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

    const sectionText = (() => {
        const mainText = document.querySelectorAll('.about_main-title-box > p > span');
        mainText.forEach((el) => {
            console.dir(el.parentElement.parentElement);
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el.parentElement.parentElement,
                    start: 'bottom bottom',
                },
                rotation: 15,
                yPercent: 200,
                duration: 0.8,
            });
        });
    })();

    const aboutMe = (() => {
        ScrollTrigger.create({
            trigger: '.introduce_img-box',
            start: 'bottom bottom',
            markers: true,
            animation: gsap.from(CSSRulePlugin.getRule('.about_introduce .introduce_img-box::before'), {
                cssRule: { height: '100%' },
                duration: 1,
            }),
        });

        // gsap.from(
        //     CSSRulePlugin.getRule('.about_introduce .introduce_img-box::before'),
        //     {
        //         scrollTrigger: {
        //             trigger: '.introduce_img-box',
        //             start: 'center bottom',
        //             markers: true,
        //         },
        //     },
        //     {
        //         cssRule: { height: '100%' },
        //         duration: 1,
        //     },
        // );
    })();
});
