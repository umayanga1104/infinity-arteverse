import gsap from "gsap";

export const fadeInRevealer = (actor, progress) => {
    if (!actor.played && progress) {
        actor.played = true;

        gsap.to(actor.element, {
            duration: 1,
            opacity: 1,
            delay: 0.5,
            ease: "power2.out",
            overwrite: "all",
        });
    }
};
