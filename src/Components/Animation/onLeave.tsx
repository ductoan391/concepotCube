import { gsap } from "gsap";
const onLeave = (origin: any, destination: any, direction: any) => {
    switch (destination.index) {
        case 0:
            gsap.to(".secondPage-container", { visibility: "hidden" });
            gsap.from(".firstPage-title", {
                autoAlpha: 0,
                y: -1000,
                duration: 1.8,
                ease: "power4.out",
            });
            gsap.from(".firstPage-desc", {
                autoAlpha: 0,
                x: -780,
                duration: 1,
                ease: "power4.out",
                delay: 0.5,
            });
            break;
        case 1:
            gsap.to(".firstPage-title", { visibility: "hidden" });
            gsap.to(".firstPage-desc", { visibility: "hidden" });
            gsap.to(".thirdPage-container", { visibility: "hidden" });
            break;
        case 2:
            gsap.to(".secondPage-container", { visibility: "hidden" });
            gsap.to(".fourth-container", { visibility: "hidden", duration: 1, ease: "power4.out", delay: 0.5 });
            break;
        case 3:
            gsap.to(".thirdPage-container", { visibility: "hidden" });
            gsap.to(".title_fourth", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".fifth-title_box", { visibility: "hidden", duration: 2, ease: "power4.out", });
            gsap.to(".fifth-wrapper", { visibility: "hidden", duration: 1, ease: "power4.out", });
            break;
        case 4:
            gsap.to(".fourth-container", { visibility: "hidden", duration: 1, ease: "power4.out", delay: .5 });
    }
};
export default onLeave;
