import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)

export const primaryTitleRevealer = (actor, progress) => {
    const splits = actor.splits;

    // play the reveal animation only once when the element first enters the viewport
    if (!actor.played && progress) {
        actor.played = true;

        gsap.to(splits.words, {
            duration: 1.5,
            yPercent: 0,
            ease: "power4",
            stagger: 0.1,
            overwrite: "all"
        });
    }
}