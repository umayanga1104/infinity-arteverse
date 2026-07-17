import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)

class ViewportEngine {

    constructor() {
        this.items = [];
        this.running = false;
        this.tickerHandler = this.update.bind(this);
    }

    register(elements, {active, progress, animation, type}) {

        if(Array.isArray(elements)){
            let splits;

            elements.forEach(el => {
                switch(type){
                    case "title": {
                        splits = new SplitText(el, {type: "words"});

                        gsap.set(splits.words, {
                            opacity: 1,
                            yPercent: 200,
                        })

                        break;
                    }
                    
                    case "paragraph": {
                        splits = new SplitText(el, {type: "words"});
        
                        gsap.set(splits.words, {
                            opacity: 0,
                        })

                        break;
                    }

                    default: {
                        splits = new SplitText(el, {type: "words"});
                        break;
                    }

                }


                this.items.push({
                    element: el,
                    type: type,
                    splits: splits,
                    active: active,
                    progress: progress,
                    animation: animation
                })   
                
                console.log("Array of elements were pushed to items array in engine for registrations");
            });
        }else {
            const splits = new SplitText(elements, {type: "words"});

            gsap.set(splits.words, {
                opacity: 0,
            })

            this.items.push({
                    element: elements,
                    type: type,
                    splits: splits,
                    active: active,
                    progress: progress,
                    animation: animation
                })
            console.log("Single elements was pushed to items array in engine for registration");
        }
    }

    unregister() {

    }

    update() {
        this.items.forEach((item) => {
            switch(item.type){
                case "paragraph": {
                    const progress = item.progress(item.element);

                    item.animation(item, progress)

                    break;
                }

                case "title": {
                    const progress = item.progress(item.element);

                    item.animation(item, progress)

                    break;
                }
            }
        });
    }

    start() {
        if(this.running) return;

         this.running = true;

        gsap.ticker.add(this.tickerHandler);
    }

    terminate() {
        gsap.ticker.remove(this.tickerHandler);
        this.items.forEach(item => {
            item.splits.revert();
        })
        this.running = false;
    }
}

export const viewPortEngine = new ViewportEngine();