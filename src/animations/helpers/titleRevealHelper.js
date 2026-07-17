import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)

export const primaryTitleRevealer = (actor, progress) => {
    const splits = actor.splits;

    // this if condition ensures the animations is played once the element is out/in bound
    if(actor.active !== progress){
        actor.active = progress;

        gsap.to(splits.words,{
            duration: 1.5,
            yPercent: progress?0:200,
            ease: "power4",
            stagger: 0.1,
            overwrite: "auto"
        });
    }
}