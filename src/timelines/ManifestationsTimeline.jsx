import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/all";

import { viewPortEngine } from "../animations/engine/viewportEngine";
import ManifestationsExperience from "../pages/Manifestations/sections/ManifestationsExperience";

import { Artefacts } from "../data/artefacts";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const ManifestationsTimeline = () => {
    const viewPortRef = useRef(null);
    const scrollPanelRef = useRef(null);
    const enterDetailsTlRef = useRef(null);  // ← bridge out of useEffect
    const exitDetailsTlRef = useRef(null);   // ← bridge out of useEffect
    const scrollTlRef = useRef(null);        // ← so you can pause/resume it
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        const splits = [];

        const context = gsap.context(() => {
            const vw = window.innerWidth
            const vh = window.innerHeight

            const q = gsap.utils.selector(viewPortRef);
            
            const manifestationsLeftPanel = q(".manifestations-left-panel");
            const manifestationInfoPanel = q(".manifestation-info-panel");

            gsap.set(manifestationsLeftPanel, { 
                opacity: 0, 
                xPercent: -100 
            })
            gsap.set(manifestationInfoPanel, { 
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
            
            // enter details timeline & animations
            const enterDetailsTl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "power4"
                }
            });

            enterDetailsTl.to(manifestationsLeftPanel, {
                opacity:  0,
                duration: 1,
            })
            .to(manifestationInfoPanel, {
                xPercent: 0,
                duration: 0.2,
            })
            .to(manifestationInfoPanel, {
                opacity:  1,
                duration: 1,
            })

            // exit details timeline & animations
            const exitDetailsTl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1,
                    ease: "power2.inOut"
                }
            })

            exitDetailsTl.to(manifestationInfoPanel, {
                opacity:  0,
                duration: 1,
            })
            .to(manifestationInfoPanel, {
                xPercent: -100,
                duration: 0.2,
            })
            .to(manifestationsLeftPanel, {
                opacity:  1,
                duration: 1,
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

            // store timelines in refs so handlers below can reach them
            enterDetailsTlRef.current = enterDetailsTl;
            exitDetailsTlRef.current = exitDetailsTl;
            scrollTlRef.current = tl;
            
        }, viewPortRef.current);

        return () => {
            splits.forEach(split => split.revert());
            context.revert();
        };
    }, []);

    // detail view anchor point — cards fan out rightward from here
    const DETAIL_ANCHOR = { xFrac: 0.35, yFrac: 0.30 }

    const handleProjectClick = (projectName) => {
        const vw = window.innerWidth
        const vh = window.innerHeight

        setActiveProject(Artefacts[projectName]);
        scrollTlRef.current?.scrollTrigger?.disable(false);

        // kill any running exit
        exitDetailsTlRef.current?.pause();

        // build fresh enter tl each click
        const detailAnchorX = DETAIL_ANCHOR.xFrac * vw
        const detailAnchorY = DETAIL_ANCHOR.yFrac * vh

        const enterTl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1 }
        });

        // panels
        enterTl.to(".manifestations-left-panel", { opacity: 0, duration: 0.6 }, 0)
        enterTl.to(".manifestation-info-panel",  { xPercent: 0, duration: 0.3 }, 0)
        enterTl.to(".manifestation-info-panel",  { opacity: 1, duration: 0.8 }, 0.2)

        // cards
        Object.entries(Artefacts).forEach(([name, artefact]) => {
            const isActive = name === projectName
            const cards = artefact.refs.cards

            cards.forEach((card, i) => {
                if (isActive) {
                    enterTl.to(card, {
                        x: detailAnchorX + (artefact.detailPositions[i]?.x ?? 0),
                        y: detailAnchorY + (artefact.detailPositions[i]?.y ?? 0),
                        opacity: 1,
                        duration: 1,
                    }, 0)
                } else {
                    enterTl.to(card, {
                        y: vh + 300,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power2.in"
                    }, 0)
                }
            })
        })

        enterDetailsTlRef.current = enterTl
    }

    const handleBack = () => {
        const vw = window.innerWidth
        const vh = window.innerHeight

        // setActiveProject(null);
        enterDetailsTlRef.current?.pause();

        const exitTl = gsap.timeline({
            defaults: { ease: "power2.inOut", duration: 1 },
            onComplete: () => {
                scrollTlRef.current?.scrollTrigger?.enable(false);
            }
        })

        // panels
        exitTl.to(".manifestation-info-panel",  { opacity: 0, duration: 0.6 }, 0)
        exitTl.to(".manifestation-info-panel",  { xPercent: -100, duration: 0.3 }, 0.5)
        exitTl.to(".manifestations-left-panel", { opacity: 1, duration: 0.8 }, 0.4)

        // restore all cards to their stack + spread positions
        Object.entries(Artefacts).forEach(([name, artefact]) => {
            const stackX = artefact.stackPosition.xFrac * vw
            const stackY = artefact.stackPosition.yFrac * vh
            const cards = artefact.refs.cards

            cards.forEach((card, i) => {
                exitTl.to(card, {
                    x: stackX + (artefact.spreadPositions[i]?.x ?? 0),
                    y: stackY + (artefact.spreadPositions[i]?.y ?? 0),
                    opacity: 1,
                    duration: 1,
                }, 0)
            })
        })

        exitDetailsTlRef.current = exitTl
    }

    return (<>
        <div ref={scrollPanelRef} className="w-full h-[100vh]"></div>
        <div ref={viewPortRef} className="viewport inset-0 fixed overflow-hidden w-full h-full">
            <div id="scenes-container" className="relative w-full h-full">
                <ManifestationsExperience 
                    artefacts={Artefacts}
                    onProjectClick={handleProjectClick}  // ← passed down
                    onBack={handleBack}                  // ← passed down
                    activeProject={activeProject}
                />
            </div>
        </div>
    </>);
}

export default ManifestationsTimeline;