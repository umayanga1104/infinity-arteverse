import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)

export const primaryParagraphRevealer = (actor, progress) => {
    const splits = actor.splits;

    // play the reveal animation only once when the element first enters the viewport
    if (!actor.played && progress) {
        actor.played = true;

        gsap.to(splits.words, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.06,
            overwrite: "all"
        });
    }
}