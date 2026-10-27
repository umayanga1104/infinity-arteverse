
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { viewPortEngine } from "../animations/engine/viewportEngine";
import { viewportVerticalProgress } from "../animations/helpers/viewportProgress";
import { primaryTitleRevealer } from "../animations/helpers/titleRevealHelper";
import { primaryParagraphRevealer } from "../animations/helpers/paragraphRevealHelper";
import AboutUsContentSection from "../pages/About/Sections/AboutUsContentSection";

gsap.registerPlugin(ScrollTrigger);

const COPIES = 6;
const SCROLL_VIEWPORTS = 20;

const AboutUsTimeline = () => {
    const scrollPanel = useRef(null);
    const trackRef = useRef(null);
    const originalContentRef = useRef(null);

    useEffect(() => {
        const panel = scrollPanel.current;
        const track = trackRef.current;
        const originalContent = originalContentRef.current;

        if (!panel || !track || !originalContent) return;

        const context = gsap.context(() => {
            /*
             * Measure one complete copy.
             * The track contains six identical copies.
             * Moving by five copy-heights places copy 6
             * exactly where copy 1 started.
             */
            const getLoopDistance = () => {
                const contentHeight =
                    track.firstElementChild.getBoundingClientRect().height;

                return contentHeight * (COPIES) - window.innerHeight/1.1;
            };

            const infiniteScrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: panel,
                    start: "top top",
                    end: () => `+=${window.innerHeight * SCROLL_VIEWPORTS}`,
                    scrub: true,
                    pin: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });

            infiniteScrollTimeline.to(track, {
                y: () => -getLoopDistance(),
                ease: "none",
                duration: 1,
            });

            /*
             * Register the original copy only.
             * The duplicated copies are visual loop content.
             */
            const q = gsap.utils.selector(track);

            const titles = q(".about-us-content-titles");
            const paragraphs = q(".about-us-content-paragraphs");
            const quotes = q(".about-us-content-quotes");

            viewPortEngine.register(titles, {
                type: "title",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryTitleRevealer,
            });

            viewPortEngine.register(paragraphs, {
                type: "paragraph",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryParagraphRevealer,
            });

            viewPortEngine.register(quotes, {
                type: "quote",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryParagraphRevealer,
            });

            viewPortEngine.start();

            // Refresh after the pinned layout is established.
            // ScrollTrigger.refresh();
        }, panel);

        return () => {
            context.revert();
            viewPortEngine.terminate();
        };
    }, []);

    return (
        <section
            ref={scrollPanel}
            className="relative h-screen w-full overflow-hidden bg-white"
        >
            <div
                ref={trackRef}
                className="absolute left-0 top-0 flex w-full flex-col"
            >
                {Array.from({ length: COPIES }, (_, index) => (
                    <div
                        key={index}
                        ref={index === 0 ? originalContentRef : null}
                        className="w-full shrink-0"
                        aria-hidden={index !== 0 ? "true" : undefined}
                    >
                        <AboutUsContentSection />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUsTimeline;
