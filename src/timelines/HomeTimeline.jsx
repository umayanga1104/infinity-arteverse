import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

import Landing from "../pages/Home/sections/Landing";
import { viewPortEngine } from "../animations/engine/viewportEngine";
import HomeExperience from "../pages/Home/sections/HomeExperience";
import { viewportHorizontalProgress, viewportVerticalProgress } from "../animations/helpers/viewportProgress";
import { primaryParagraphRevealer } from "../animations/helpers/paragraphRevealHelper";

import {Artefacts} from "../data/artefacts"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const HomeTimeline = () => {
    const viewPortRef = useRef(null);
    const scrollPanelRef = useRef(null);

    const transitionOneMarkerRef = useRef(null);
    const transitionTwoMarkerRef = useRef(null);

    useEffect(() => {
        const splits = [];

        const context = gsap.context(() => {
            const vw = window.innerWidth
            const vh = window.innerHeight

            const q = gsap.utils.selector(viewPortRef);

            const landing = q(".landing");
            // const homeTitle = q(".home-title");
            // const homeDescription = q(".home-description");
            const homeExperience=q(".home-experience");
            const idyllicsTitle = q(".idyllics-title-container");
            const idyllicsContainer = q(".idyllics-container");
            const idyllicsDescription = q(".idyllics-description");
            const originTitle = q(".origin-title");
            const originDescription = q(".origin-description");
            const originHeadings = q(".origin-headings");
            const originSubHeadings = q(".origin-sub-headings");
            const originTrack = q(".origin-track");
            const manifestationsTrack = q(".manifestations-track");
            const manifestationsLeftPanel = q(".manifestations-left-panel");

            //transition elements
            const beams = q(".beam");

            // elements initial positions config
            gsap.set(landing,{
                xPercent:0,
            })

            gsap.set(homeExperience, {
                opacity: 0,
                xPercent: 100,
                yPercent: -100
            });

            gsap.set(idyllicsTitle, {
                xPercent: 85,
            })

            gsap.set(idyllicsContainer, {
                xPercent: 100,
            })

            gsap.set(originTitle, {
                yPercent: -500
            })

            gsap.set(originTrack, {
                yPercent: 100
            })

            gsap.set(manifestationsTrack, {
                yPercent: 120
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

            // intial state of transitions
            gsap.set(beams, {
                attr: {
                    x: 100
                }
            })

            //Transtion 1 timeline and animations
            const transitionOneTl = gsap.timeline({
                paused: true
            });

            transitionOneTl.to(beams, {
                attr: {
                    x: 0
                },
                duration: 1,
                stagger: 0.1,
                ease: "power3.inOut"
            }).to(homeExperience, {
                xPercent: 0,
                duration: 1,
            }, "<")
            .to(homeExperience, {
                opacity: 1,
                duration: 1,
                ease: "power3.inOut",
            }, ">");

            ScrollTrigger.create({
                trigger: transitionOneMarkerRef.current,

                start: "top top",

                onEnter() {
                    transitionOneTl.play();
                },

                onLeaveBack() {
                    transitionOneTl.reverse();
                }
            });

            // Transition 2 timeline and animations
            const transitionTwoTl = gsap.timeline({
                paused: true
            });

            transitionTwoTl.to(beams, {
                attr: {
                    fill: "black"
                },
                duration: 1,
                ease: "power3.inOut",
            })
            .to(originTitle, {
                color: "#ffffff",
                duration: 1
            }, "<")
            .to(originHeadings, {
                color: "#ffffff",
                duration: 1
            }, "<")
            .to(originSubHeadings, {
                color: "#ffffff",
                duration: 1
            }, "<")
            .to(originDescription, {
                color: "#ffffff",
                duration: 1
            }, "<");

            ScrollTrigger.create({
                trigger: transitionTwoMarkerRef.current,

                start: "top top",

                onEnter() {
                    transitionTwoTl.play();
                },

                onLeaveBack() {
                    transitionTwoTl.reverse();
                }
            });

            // master timeline creation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollPanelRef.current,
                    start: 'top top',
                    end: ()=>window.innerHeight*6,
                    scrub: true,
                    pin: true,
                }
            });

            // master timeline animations
            tl.to(idyllicsContainer,{
                xPercent:-180,
                duration: 64
            }).to(idyllicsTitle,{
                xPercent:-100,
                duration: 60
            }, "0.5")

            .add("starting-overlap", "-=35")

            .to(originTitle, {
                yPercent: 890,
                duration: 64
            }, "starting-overlap")
            .to(originTrack, {
                yPercent: -100,
                duration: 64
            }, "starting-overlap")
            .to(manifestationsTrack, {
                yPercent: 0,
                duration: 32
            }, "-=24")
            .to(manifestationsLeftPanel, {
                xPercent: 0,
                duration: 32,
                opacity: 1,
            }, ">")

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

            // typography and visual elemnts registaration
            viewPortEngine.register(idyllicsDescription, {
                type: "paragraph",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(originDescription, {
                type: "paragraph",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryParagraphRevealer
            });
            
            // viewport based animation engine initiation
            viewPortEngine.start();
            
            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();
        }, viewPortRef.current);


        return () => {
            splits.forEach(split => split.revert());
            context.revert();
        };
    }, []);

    return (<>
        <div ref={scrollPanelRef} className="w-full h-[100vh]">
            <div
                ref={transitionOneMarkerRef}
                className="absolute top-[1vh] h-px w-full"
            />
            <div
                ref={transitionTwoMarkerRef}
                className="absolute top-[200vh] h-px w-full"
            />
        </div>
        <div ref={viewPortRef} className="viewport inset-0 fixed overflow-hidden w-full h-full">
            <div id="scenes-container" className="relative w-full h-full">
                <Landing/>

                {/* z-15 for the svg mask page transitoin */}
                <svg
                    className="transition-svg absolute inset-0 z-15 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <rect
                        className="beam beam-1"
                        x="100"
                        y="0"
                        width="100"
                        height="34"
                        fill="white"
                    />

                    <rect
                        className="beam beam-2"
                        x="100"
                        y="33"
                        width="100"
                        height="34"
                        fill="white"
                    />

                    <rect
                        className="beam beam-3"
                        x="100"
                        y="66"
                        width="100"
                        height="34"
                        fill="white"
                    />
                </svg>

                <HomeExperience artefacts={Artefacts}/>
            </div>
        </div>
    </>);
}

export default HomeTimeline;