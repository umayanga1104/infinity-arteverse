import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

import Home from "./pages/Home";
import Idyllics from "./pages/Idyllics";
import Manifestations from "./pages/Manifestations";
import Origin from "./pages/Origin";
import { Artefacts } from "./data/artefacts";
import { viewPortEngine } from "./animations/engine/viewportEngine";
import { viewportHorizontalProgress, viewportVerticalProgress } from "./animations/helpers/viewportProgress";
import { primaryParagraphRevealer } from "./animations/helpers/paragraphRevealHelper";
import { primaryTitleRevealer } from "./animations/helpers/titleRevealHelper";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const Timeline = () => {
    const viewPortRef = useRef(null);
    const scrollPanelRef = useRef(null);

    useEffect(() => {
        const splits = [];

        const context = gsap.context(() => {
            const vw = window.innerWidth
            const vh = window.innerHeight

            const q = gsap.utils.selector(viewPortRef);

            const home=q(".home");
            const idyllic=q(".idyllics");
            const idyllicsTitle = q(".idyllics-title-container");
            const idyllicsContainer = q(".idyllics-container");
            const idyllicNames = q(".idyllic-name");
            const idyllicsDescriptions = q(".idyllics-description");
            const origin=q(".origin");
            const originTitle=q(".origin-title");
            const originDescriptionTitles = q(".origin-descirption-title");
            const originContainer = q(".origin-info-container");
            const originSubtitle = q(".origin-descirption-title-description");
            const originDescriptions = q(".origin-info-description");
            const manifestationsTitle=q(".manifestations-title");
            const manifest=q(".manifestations");
            const manifestationsLeftPanel = q(".manifestations-left-panel");
            const manifestationsProjects = q(".manifestations-projects");

            // elements initial positions config
            gsap.set(home,{
                xPercent:0,
            })

            gsap.set(idyllic,{
                xPercent:100,
            })
            gsap.set(idyllicsTitle, {
                xPercent: 85,
            }, "0.5")
            gsap.set(idyllicsContainer, {
                xPercent: 100,
            })

            gsap.set(origin,{
                xPercent:100,
            })
            gsap.set(originContainer, {
                yPercent: 80
            })

            gsap.set(manifest,{
                yPercent:120,
            })
            gsap.set(manifestationsLeftPanel, { 
                opacity: 0, 
                xPercent: -100 
            })

            Object.entries(Artefacts).forEach(([name, artefact]) => {
                const cardRefs = artefact.refs.cards;
                if(!cardRefs)return;

                // Convert viewport fractions → real pixel values
                const landX = artefact.landingPosition.xFrac * vw
                const landY = artefact.landingPosition.yFrac * vh
                
                cardRefs.forEach((card, i) => {
                    gsap.set(card, {
                        x: landX,
                        y: landY,
                        zIndex:   artefact.images.length - i,  // img_1 on top
                    })
                })
            })

            // master timeline creation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollPanelRef.current,
                    start: 'top top',
                    end: ()=>window.innerHeight*8,
                    scrub: true,
                    pin: true,
                }
            });

            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();

            // typography and visual elemnts registaration
            viewPortEngine.register(idyllicNames, {
                type: "title",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(idyllicsDescriptions, {
                type: "paragraph",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(originDescriptionTitles, {
                type: "title",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(originSubtitle, {
                type: "paragraph",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(originDescriptions, {
                type: "paragraph",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(manifestationsTitle, {
                type: "title",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryTitleRevealer
            });
            
            // viewport based animation engine initiation
            viewPortEngine.start();

            
            // master timeline animations
            tl.to(idyllic,{
                xPercent:0,
                duration: 8
            }).to(idyllicsTitle,{
                xPercent:-20,
                duration: 32
            }, "-=0.9").to(idyllicsContainer,{
                xPercent:-100,
                duration: 32
            }, "0.5").to(origin,{
                xPercent:0,
                duration: 4,
                ease: "power4.inOut"
            }, "-=24").to(originContainer, {
                yPercent: -210,
                duration: 30
            }, "-=10").to(originTitle, {
                opacity: 0,
                duration: 30,
                ease: "power4"
            }, "<").to(manifest, {
                yPercent: 0,
                duration: 16,
            }).to(manifestationsLeftPanel, {
                opacity:  1,
                xPercent: 0,
                duration: 8
            }, "+=10")
            
            Object.entries(Artefacts).forEach(([name, artefact]) => {
                const cardRefs = artefact.refs.cards;
                if(!cardRefs)return;

                const stackX = artefact.stackPosition.xFrac * vw
                const stackY = artefact.stackPosition.yFrac * vh

                cardRefs.forEach((card, i) => {
                    tl.to(card, {
                        x:        stackX + (artefact.spreadPositions[i]?.x ?? 0),
                        y:        stackY + (artefact.spreadPositions[i]?.y ?? 0),
                        ease:     'power2.inOut',
                        duration: 12,
                    }, "<")   // ← "0" = all images start animating at the same scroll moment
                })
            });
            
        }, viewPortRef.current);

        return () => {
            splits.forEach(split => split.revert());
            context.revert();
        };
    }, []);

    return (<>
        <div ref={scrollPanelRef} className="w-full h-[800vh]"></div>
        <div ref={viewPortRef} className="viewport inset-0 fixed overflow-hidden w-full h-full">
            <div id="scenes-container" className="relative w-full h-full">
                <div className="absolute inset-0 z-10"><Home/></div>
                <div className="absolute inset-0 z-20"><Idyllics/></div>
                <div className="absolute inset-0 z-30"><Origin/></div>
                <div className="absolute inset-0 z-40"><Manifestations artefacts={Artefacts}/></div>
            </div>
        </div>
    </>);
}

export default Timeline;