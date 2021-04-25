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
        const aboutMainText = document.querySelectorAll('.about_main-title-box > .text-wrapper > span');
        const workMainText = document.querySelectorAll('.work_main-title-box > .text-wrapper > span');
        const contactMainText = document.querySelectorAll('.contact_main-title-box > .text-wrapper > span');
        aboutMainText.forEach((el) => {
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

        workMainText.forEach((el) => {
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

        contactMainText.forEach((el) => {
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
            start: 'center bottom',
            animation: gsap.from(CSSRulePlugin.getRule('.about_introduce .introduce_img-box::before'), {
                cssRule: { height: '100%' },
                duration: 1,
            }),
        });
    })();

    const subTextAnimation = (() => {
        const aboutSubText = document.querySelectorAll('.introduce_text > .text-wrapper-sub > span');
        const aboutCarrerRecord = document.querySelectorAll('.career_record .text-wrapper span');
        const aboutCarrerStack = document.querySelectorAll('.career_stack .text-wrapper span');
        const contactText = document.querySelectorAll('.contact_text .text-wrapper span');
        const contactSubText = document.querySelectorAll('.contact_text .text-wrapper a');

        aboutSubText.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el.parentElement.parentElement,
                    start: 'bottom bottom',
                },
                rotation: 15,
                yPercent: 300,
                duration: 0.8,
            });
        });

        aboutCarrerRecord.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el.parentElement.parentElement,
                    start: 'bottom bottom',
                },
                rotation: 15,
                yPercent: 300,
                duration: 0.8,
            });
        });

        aboutCarrerStack.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el.parentElement.parentElement,
                    start: 'bottom bottom',
                },
                rotation: 15,
                yPercent: 300,
                duration: 0.8,
            });
        });

        contactText.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el.parentElement.parentElement,
                    start: 'bottom bottom',
                },
                rotation: 15,
                yPercent: 300,
                duration: 0.8,
            });
        });

        contactSubText.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el.parentElement.parentElement,
                    start: 'bottom bottom',
                },
                rotation: 15,
                yPercent: 300,
                duration: 0.8,
            });
        });

        ScrollTrigger.create({
            trigger: '.career_record',
            start: 'bottom bottom',
            animation: gsap.from(CSSRulePlugin.getRule('.about_career .career_record .title::after'), {
                cssRule: { width: '0%' },
                duration: 1,
            }),
        });

        ScrollTrigger.create({
            trigger: '.career_stack',
            start: 'bottom bottom',
            animation: gsap.from(CSSRulePlugin.getRule('.about_career .career_stack .title::after'), {
                cssRule: { width: '0%' },
                duration: 1,
            }),
        });
    })();

    const workSectionScroll = (() => {
        const workSectionNum = document.querySelectorAll('.work_project_num');
        const workSectionWrapper = document.querySelectorAll('.work_project_wrapper');
        workSectionNum.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    scrub: 2,
                },
                yPercent: -200,
            });
        });

        workSectionWrapper.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    scrub: 2,
                },
                yPercent: -200,
            });
        });
    })();
});
