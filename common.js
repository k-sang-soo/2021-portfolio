'use strict';

window.addEventListener('load', () => {
    const cursor = (() => {
        const point = (e) => {
            let x = e.pageX;
            let y = e.pageY;
            let g = 1;
            const mouseEffect = document.querySelector('.mouse-effect');
            gsap.to(mouseEffect, { duration: 0.1, left: x, top: y });
            return g;
        };

        window.addEventListener('mousemove', point);
    })();

    const navCursor = (() => {
        const navList = document.querySelectorAll('.mouse-circle');
        const cursor = document.querySelector('.mouse-effect');
        navList.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('in-nav');
            });

            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('in-nav');
            });
        });
    })();

    const smoothScroll = (target) => {
        const targetTop = document.querySelector(target).offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetTop - startPosition;
        const duration = 1000;
        let start = null;

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    };

    // const t = (targets) => {
    //     const target = document.querySelector(targets);
    //     const targetPosition = target.getBoundingClientRect().top;
    //     const startPosition = window.pageYOffset;
    //     const result = targetPosition + startPosition;

    //     console.log('상대좌표', targetPosition);
    //     console.log('절대좌표', startPosition);
    //     console.log('연산', result);
    //     return result;
    // };

    const navClick = (() => {
        const navList = document.querySelectorAll('.header > nav a');
        navList.forEach((el, index) => {
            el.addEventListener('click', (e) => {
                switch (index) {
                    case 0:
                        e.preventDefault();
                        smoothScroll('.main');
                        // window.scrollTo({
                        //     top: t('.main'),
                        //     behavior: 'smooth',
                        // });
                        break;
                    case 1:
                        e.preventDefault();
                        smoothScroll('.about');
                        // window.scrollTo({
                        //     top: t('.about'),
                        //     behavior: 'smooth',
                        // });
                        break;
                    case 2:
                        e.preventDefault();
                        smoothScroll('.work');
                        // window.scrollTo({
                        //     top: t('.work'),
                        //     behavior: 'smooth',
                        // });
                        break;
                    case 3:
                        e.preventDefault();
                        smoothScroll('.contact');
                        // window.scrollTo({
                        //     top: t('.contact'),
                        //     behavior: 'smooth',
                        // });
                        break;
                    default:
                        break;
                }
            });
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
                yPercent: -80,
            });
        });

        workSectionWrapper.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom',
                    scrub: 2,
                },
                yPercent: -80,
            });
        });
    })();
});
