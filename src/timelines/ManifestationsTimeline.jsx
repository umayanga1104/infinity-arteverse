import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/all";

import { viewPortEngine } from "../animations/engine/viewportEngine";
import ManifestationsExperience from "../pages/Manifestations/sections/ManifestationsExperience";

import ManifestationsFooter from "../components/ManifestationsFooter";

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
        const mm = gsap.matchMedia();

        // ################ DESKTOP TL ################# //
        const DesktopTimeline = () => {

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
                    const landX = artefact.landingPosition.desktopRes.xFrac * vw
                    const landY = artefact.landingPosition.desktopRes.yFrac * vh
                    
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
                    play: true, 
                    defaults: {ease: "power2.inOut"},
                    delay: 0.8,
                    // scrollTrigger: {
                    //     trigger: scrollPanelRef.current,
                    //     start: 'top top',
                    //     end: ()=>window.innerHeight,
                    //     scrub: true,
                    //     pin: true,
                    // }
                });
    
                //settle downs the layout with the pinning of scroll trigger
                // ScrollTrigger.refresh();
    
                // typography and visual elemnts registaration
                
                
                // viewport based animation engine initiation
                viewPortEngine.start();
                
                // timeline animations
                Object.entries(Artefacts).forEach(([name, artefact]) => {
                    const cardRefs = artefact.refs.cards;
                    if(!cardRefs)return;
    
                    const stackX = artefact.stackPosition.desktopRes.xFrac * vw
                    const stackY = artefact.stackPosition.desktopRes.yFrac * vh
    
                    cardRefs.forEach((card, i) => {
                        tl.to(card, {
                            x:        stackX + (artefact.spreadPositions.desktopRes[i]?.x ?? 0),
                            y:        stackY + (artefact.spreadPositions.desktopRes[i]?.y ?? 0),
                            duration: 1.8,
                        }, "<")   // ← "0" = all images start animating at the same scroll moment
                    })
                });
    
                tl.to(manifestationsLeftPanel, {
                    opacity:  1,
                    xPercent: 0,
                    duration: 0.45,
                    ease: "power2.inOut",
                }, "+=0.2")
    
                // store timelines in refs so handlers below can reach them
                enterDetailsTlRef.current = enterDetailsTl;
                exitDetailsTlRef.current = exitDetailsTl;
                scrollTlRef.current = tl;
                
            }, viewPortRef.current);
    
            return () => {
                splits.forEach(split => split.revert());
                context.revert();
            };
        }
        
        // ################ TABLET TL ################# //
        const TabletTimeline = () => {

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
                    const landX = artefact.landingPosition.tabletRes.xFrac * vw
                    const landY = artefact.landingPosition.tabletRes.yFrac * vh
                    
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
                    play: true, 
                    defaults: {ease: "power2.inOut"},
                    delay: 0.8,
                    // scrollTrigger: {
                    //     trigger: scrollPanelRef.current,
                    //     start: 'top top',
                    //     end: ()=>window.innerHeight,
                    //     scrub: true,
                    //     pin: true,
                    // }
                });
    
                //settle downs the layout with the pinning of scroll trigger
                // ScrollTrigger.refresh();
    
                // typography and visual elemnts registaration
                
                
                // viewport based animation engine initiation
                viewPortEngine.start();
                
                // timeline animations
                Object.entries(Artefacts).forEach(([name, artefact]) => {
                    const cardRefs = artefact.refs.cards;
                    if(!cardRefs)return;
    
                    const stackX = artefact.stackPosition.tabletRes.xFrac * vw
                    const stackY = artefact.stackPosition.tabletRes.yFrac * vh
    
                    cardRefs.forEach((card, i) => {
                        tl.to(card, {
                            x:        stackX + (artefact.spreadPositions.tabletRes[i]?.x ?? 0),
                            y:        stackY + (artefact.spreadPositions.tabletRes[i]?.y ?? 0),
                            duration: 1.8,
                        }, "<")   // ← "0" = all images start animating at the same scroll moment
                    })
                });
    
                tl.to(manifestationsLeftPanel, {
                    opacity:  1,
                    xPercent: 0,
                    duration: 0.45,
                    ease: "power2.inOut",
                }, "+=0.2")
    
                // store timelines in refs so handlers below can reach them
                enterDetailsTlRef.current = enterDetailsTl;
                exitDetailsTlRef.current = exitDetailsTl;
                scrollTlRef.current = tl;
                
            }, viewPortRef.current);
    
            return () => {
                splits.forEach(split => split.revert());
                context.revert();
            };
        }

        // ################ MOBILE TL ################# //
        const MobileTimeline = () => {
            const context = gsap.context(() => {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const q = gsap.utils.selector(viewPortRef);

                const manifestationsLeftPanel = q(".manifestations-left-panel");
                const manifestationInfoPanel = q(".manifestation-info-panel");

                gsap.set(manifestationsLeftPanel, { opacity: 0, xPercent: -100 });
                gsap.set(manifestationInfoPanel, { opacity: 0, xPercent: -100 });

                Object.values(Artefacts).forEach((artefact) => {
                    const landX = artefact.landingPosition.mobileRes.xFrac * vw;
                    const landY = artefact.landingPosition.mobileRes.yFrac * vh;

                    artefact.refs.cards.forEach((card, i) => {
                        gsap.set(card, {
                            x: landX,
                            y: landY,
                            zIndex: artefact.images.length - i,
                        });
                    });
                });

                const tl = gsap.timeline({
                    play: true,
                    defaults: { ease: "power2.inOut" },
                    // delay: 0.8,
                });

                viewPortEngine.start();

                Object.values(Artefacts).forEach((artefact) => {
                    const stackX = artefact.stackPosition.mobileRes.xFrac * vw;
                    const stackY = artefact.stackPosition.mobileRes.yFrac * vh;

                    artefact.refs.cards.forEach((card, i) => {
                        tl.to(card, {
                            x: stackX + (artefact.spreadPositions.mobileRes[i]?.x ?? 0),
                            y: stackY + (artefact.spreadPositions.mobileRes[i]?.y ?? 0),
                            duration: 1.8,
                        }, "<");
                    });
                });

                tl.to(manifestationsLeftPanel, {
                    opacity: 1,
                    xPercent: 0,
                    duration: 0.45,
                    ease: "power2.inOut",
                }, "+=0.2");

                scrollTlRef.current = tl;
            }, viewPortRef.current);

            return () => {
                context.revert();
                viewPortEngine.terminate();
            };
        };

        mm.add("(min-width: 1200px)", DesktopTimeline);
        mm.add("(min-width: 768px) and (max-width: 1199px)", TabletTimeline);
        mm.add("(max-width: 767px)", MobileTimeline);

        return () => mm.revert();

    }, []);

    // detail view anchor point — cards fan out rightward from here
    const DETAIL_ANCHORS = {
        desktopRes: { xFrac: 0.35, yFrac: 0.30 },
        tabletRes: { xFrac: 0.35, yFrac: 0.30 },
        mobileRes: { xFrac: 0.04, yFrac: 0.28 },
    };

    const handleProjectClick = (projectName) => {
        const vw = window.innerWidth
        const vh = window.innerHeight
        const positionRes = window.matchMedia("(max-width: 767px)").matches
            ? "mobileRes"
            : window.matchMedia("(max-width: 1199px)").matches
                ? "tabletRes"
                : "desktopRes";

        setActiveProject(Artefacts[projectName]);
        scrollTlRef.current?.scrollTrigger?.disable(false);

        // kill any running exit
        exitDetailsTlRef.current?.pause();

        // build fresh enter tl each click
        const detailAnchorX = DETAIL_ANCHORS[positionRes].xFrac * vw
        const detailAnchorY = DETAIL_ANCHORS[positionRes].yFrac * vh

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
                        x: detailAnchorX + (artefact.detailPositions[positionRes][i]?.x ?? 0),
                        y: detailAnchorY + (artefact.detailPositions[positionRes][i]?.y ?? 0),
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
        const positionRes = window.matchMedia("(max-width: 767px)").matches
            ? "mobileRes"
            : window.matchMedia("(max-width: 1199px)").matches
                ? "tabletRes"
                : "desktopRes";

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
            const stackX = artefact.stackPosition[positionRes].xFrac * vw
            const stackY = artefact.stackPosition[positionRes].yFrac * vh
            const cards = artefact.refs.cards

            cards.forEach((card, i) => {
                exitTl.to(card, {
                    x: stackX + (artefact.spreadPositions[positionRes][i]?.x ?? 0),
                    y: stackY + (artefact.spreadPositions[positionRes][i]?.y ?? 0),
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
                <ManifestationsFooter />

            </div>
        </div>
    </>);
}

export default ManifestationsTimeline;