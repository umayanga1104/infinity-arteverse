import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)

export const primaryParagraphRevealer = (actor, progress) => {
    const splits = actor.splits;

    // this if condition ensures the animations is played once the element is out/in bound
    if(actor.active !== progress){
        actor.active = progress;

        gsap.to(splits.words,{
            opacity: progress ? 1 : 0,
            duration:0.8,
            stagger:0.06,
            overwrite: "auto"
        });
    }
}