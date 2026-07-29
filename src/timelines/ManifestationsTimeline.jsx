import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

import { viewPortEngine } from "../animations/engine/viewportEngine";
import ManifestationsExperience from "../pages/Manifestations/sections/ManifestationsExperience";

import { Artefacts } from "../data/artefacts";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const ManifestationsTimeline = () => {
    const viewPortRef = useRef(null);
    const scrollPanelRef = useRef(null);

    useEffect(() => {
        const splits = [];

        const context = gsap.context(() => {
            const vw = window.innerWidth
            const vh = window.innerHeight

            const q = gsap.utils.selector(viewPortRef);
            
            const manifestationsLeftPanel = q(".manifestations-left-panel");

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
                    end: ()=>window.innerHeight,
                    scrub: true,
                    pin: true,
                }
            });

            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();

            // typography and visual elemnts registaration
            
            
            // viewport based animation engine initiation
            viewPortEngine.start();
            
            // timeline animations
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
                        duration: 32,
                    }, "<")   // ← "0" = all images start animating at the same scroll moment
                })
            });

            tl.to(manifestationsLeftPanel, {
                opacity:  1,
                xPercent: 0,
                duration: 32
            }, "<")
            
        }, viewPortRef.current);

        return () => {
            splits.forEach(split => split.revert());
            context.revert();
        };
    }, []);

    return (<>
        <div ref={scrollPanelRef} className="w-full h-[100vh]"></div>
        <div ref={viewPortRef} className="viewport inset-0 fixed overflow-hidden w-full h-full">
            <div id="scenes-container" className="relative w-full h-full">
                <ManifestationsExperience artefacts={Artefacts}/>
            </div>
        </div>
    </>);
}

export default ManifestationsTimeline;