import { gsap } from "gsap";

const afterLoad = (origin: any, destination: any, direction: any) => {

    switch (destination.index) {
        case 1:
            gsap.from(".secondPage-container", {
                autoAlpha: 0,
            });
            gsap.from(".secondPage-title", {
                autoAlpha: 0,
                y: -880,
                duration: 3.5,
                ease: "power4.out",
            });
            break;
        case 2:
            gsap.from(".thirdPage-container", {
                autoAlpha: 0,
            });
            gsap.from(".card_first", {
                autoAlpha: 0,
                y: -400,
                duration: 0.2,
                ease: "power4.out",
                delay: 0.1,
            });
            gsap.from(".card_second", {
                autoAlpha: 0,
                y: 400,
                duration: 0.2,
                ease: "power4.out",
                delay: 0.3,
            });
            gsap.from(".card_third", {
                autoAlpha: 0,
                y: -400,
                duration: 0.2,
                ease: "power4.out",
                delay: 0.5,
            });
            gsap.from(".card_fourth", {
                autoAlpha: 0,
                y: 400,
                duration: 0.2,
                ease: "power4.out",
                delay: 0.7,
            });
            break;
        case 3:
            gsap.from(".fourth-container", {
                autoAlpha: 0,
            });
            gsap.from(".fourth-title", {
                autoAlpha: 0,
                y: -220,
                duration: 1,
                ease: "power4.out",
            });
            gsap.from(".list-story", {
                autoAlpha: 0,
                x: -820,
                duration: 1,
                ease: "power4.out",
                delay: 0.3,
            });
            break;
        case 4:
            gsap.from(".fifth-wrapper", {
                autoAlpha: 0,
            });
            gsap.from(".fifth-name", {
                autoAlpha: 0,
                x: 420,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
            });
            gsap.from(".fifth-title_box", {
                autoAlpha: 0,
                x: 1200,
                duration: 2,
                ease: "power4.out",
            });
            gsap.from(".fifth-contact", {
                autoAlpha: 0,
                y: -220,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
                delay: .2,
            });
            break;
    }
};
export default afterLoad;
