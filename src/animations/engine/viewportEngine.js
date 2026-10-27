
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

class ViewportEngine {
    constructor() {
        this.items = [];
        this.running = false;
        this.tickerHandler = this.update.bind(this);
    }

    register(elements, { active = false, progress, animation, type }) {
        const elementList = Array.isArray(elements)
            ? elements
            : elements
                ? [elements]
                : [];

        elementList.forEach((el) => {
            if (!el) return;

            // Prevent duplicate registration.
            if (this.items.some((item) => item.element === el)) {
                return;
            }

            const splits = new SplitText(el, { type: "words" });

            switch (type) {
                case "title":
                    gsap.set(splits.words, {
                        opacity: 1,
                        yPercent: 200,
                    });
                    break;

                case "paragraph":
                case "quote":
                    gsap.set(splits.words, {
                        opacity: 0,
                    });
                    break;

                default:
                    break;
            }

            this.items.push({
                element: el,
                type,
                splits,
                active,
                progress,
                animation,
            });
        });
    }

    update() {
        this.items.forEach((item) => {
            switch (item.type) {
                case "title":
                case "paragraph":
                case "quote": {
                    const progress = item.progress(item.element);
                    item.animation(item, progress);
                    break;
                }

                default:
                    break;
            }
        });
    }

    start() {
        if (this.running) return;

        this.running = true;
        gsap.ticker.add(this.tickerHandler);
    }

    terminate() {
        gsap.ticker.remove(this.tickerHandler);
        this.running = false;

        this.items.forEach((item) => {
            item.splits.revert();
        });

        // Important when the component mounts again.
        this.items = [];
    }
}

export const viewPortEngine = new ViewportEngine();