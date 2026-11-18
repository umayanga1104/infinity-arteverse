import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

import Landing from "../pages/Home/sections/Landing";
import { viewPortEngine } from "../animations/engine/viewportEngine";
import HomeExperience from "../pages/Home/sections/HomeExperience";
import { viewportHorizontalProgress, viewportIntersectionProgress, viewportVerticalProgress } from "../animations/helpers/viewportProgress";
import { primaryParagraphRevealer } from "../animations/helpers/paragraphRevealHelper";
import { fadeInRevealer } from "../animations/helpers/fadeInRevealHelper";
import { primaryTitleRevealer } from "../animations/helpers/titleRevealHelper";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const HomeTimeline = () => {
    const viewPortRef = useRef(null);
    const scrollPanelRef = useRef(null);
    const masterTlRef = useRef(null);        // ← so you can pause/resume it
    const enterDetailsTlRef = useRef(null);  // ← bridge out of useEffect
    const exitDetailsTlRef = useRef(null);   // ← bridge out of useEffect

    const transitionOneMarkerRef = useRef(null);
    const transitionTwoMarkerRef = useRef(null);

    useEffect(() => {
        const mm = gsap.matchMedia();

        // ################ DESKTOP TL ################# //
        const DesktopTimeline = () => {
            const splits = [];

            const context = gsap.context(() => {

            const q = gsap.utils.selector(viewPortRef);

            const landing = q(".landing");
            // const homeTitle = q(".home-title");
            // const homeDescription = q(".home-description");
            const homeExperience=q(".home-experience");
            const idyllicsTitle = q(".idyllics-title-container");
            const idyllicsContainer = q(".idyllics-container");
            const idyllicsName = q(".idyllic-name");
            const idyllicsDescription = q(".idyllics-description");
            const idyllicsDescriptionTrack = q(".idyllics-description-track");
            const originTitle = q(".origin-title");
            const originDescription = q(".origin-description");
            const originHeadings = q(".origin-headings");
            const originSubHeadings = q(".origin-sub-headings");
            const originTrack = q(".origin-track");
            const afterOriginTrack = q(".after-origin-track");
            const afterOriginHeading = q(".after-origin-headings");
            const afterOriginSubHeading = q(".after-origin-sub-headings");
            const afterOriginDescription = q(".after-origin-descriptions");
            const homeExperienceMedia = q(".home-experience img, .home-experience video");
            // const footer = q(".footer");

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
            gsap.set(idyllicsDescriptionTrack, {
                xPercent: -80
            })

            gsap.set(idyllicsContainer, {
                xPercent: 100,
            })

            gsap.set(originTitle, {
                yPercent: -720
            })

            gsap.set(originTrack, {
                yPercent: 100
            })

            gsap.set(afterOriginTrack, {
                yPercent: 120
            })

            // gsap.set(footer, { 
            //     opacity: 0, 
            //     yPercent: 150
            // })

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
            }).to(landing, {
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
            }, "<")
            .to(homeExperience, {
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
                    fill: "#ffffff"
                },
                duration: 1,
                ease: "power3.inOut",
            })
            .to(originTitle, {
                // color: "#ffffff",
                color: "#000000",
                duration: 1
            }, "<")
            .to(originHeadings, {
                color: "#000000",
                duration: 1
            }, "<")
            .to(originSubHeadings, {
                color: "#000000",
                duration: 1
            }, "<")
            .to(originDescription, {
                color: "#000000",
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
            .to(idyllicsDescriptionTrack,{
                xPercent: 100,
                duration: 64
            }, "<").to(idyllicsTitle,{
                filter: "blur(15px)",
                opacity: 0,
                duration: 64
            }, "<")

            .add("starting-overlap", "-=35")

            .to(originTitle, {
                yPercent: 920,
                duration: 64
            }, "starting-overlap")
            .to(originTrack, {
                yPercent: -100,
                duration: 64
            }, "starting-overlap")
            .to(afterOriginTrack, {
                yPercent: -68,
                duration: 100,
            }, "-=42")
            // .to(footer, {
            //     yPercent: 0,
            //     opacity: 1,
            //     duration: 4,
            // }, "-=8")
            masterTlRef.current = tl;

            // typography and visual elemnts registaration
            viewPortEngine.register(idyllicsName, {
                type: "title",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(idyllicsDescription, {
                type: "paragraph",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(originHeadings, {
                type: "title",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(originDescription, {
                type: "paragraph",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(afterOriginHeading, {
                type: "title",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(afterOriginSubHeading, {
                type: "paragraph",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(afterOriginDescription, {
                type: "paragraph",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(homeExperienceMedia, {
                type: "fade",
                active: false,
                progress: viewportIntersectionProgress,
                animation: fadeInRevealer
            });
            
            // viewport based animation engine initiation
            viewPortEngine.start();
            
            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();
            }, viewPortRef.current);

            return () => {
                splits.forEach(split => split.revert());
                context.revert();
                viewPortEngine.terminate();
            };
        };

        // ################ TABLET TL ################# //
        const TabletTimeline = () => {
            const splits = [];

            const context = gsap.context(() => {

            const q = gsap.utils.selector(viewPortRef);

            const landing = q(".landing");
            // const homeTitle = q(".home-title");
            // const homeDescription = q(".home-description");
            const homeExperience=q(".home-experience");
            const idyllicsTitle = q(".idyllics-title-container");
            const idyllicsContainer = q(".idyllics-container");
            const idyllicsName = q(".idyllic-name");
            const idyllicsDescription = q(".idyllics-description");
            const idyllicsDescriptionTrack = q(".idyllics-description-track");
            const originDescription = q(".origin-description");
            const originHeadings = q(".origin-headings");
            const originSubHeadings = q(".origin-sub-headings");
            const originTrack = q(".origin-track");
            const afterOriginTrack = q(".after-origin-track");
            const afterOriginHeading = q(".after-origin-headings");
            const afterOriginSubHeading = q(".after-origin-sub-headings");
            const afterOriginDescription = q(".after-origin-descriptions");
            const homeExperienceMedia = q(".home-experience img, .home-experience video");
            // const footer = q(".footer");

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
                xPercent: 50,
            })
            gsap.set(idyllicsDescriptionTrack, {
                xPercent: -250
            })

            gsap.set(idyllicsContainer, {
                xPercent: 30,
            })

            gsap.set(originTrack, {
                yPercent: 100
            })

            gsap.set(afterOriginTrack, {
                yPercent: 120
            })

            // gsap.set(footer, { 
            //     opacity: 0, 
            //     yPercent: 150
            // })

            // intial state of transitions
            gsap.set(beams, {
                attr: {
                    x: 100
                }
            })

            // enter details timeline & animations
            const enterDetailsTl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "power4"
                }
            });

            // exit details timeline & animations
            const exitDetailsTl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1,
                    ease: "power2.inOut"
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
            }).to(landing, {
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
            }, "<")
            .to(homeExperience, {
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
                    fill: "#ffffff"
                },
                duration: 1,
                ease: "power3.inOut",
            })
            .to(originHeadings, {
                color: "#000000",
                duration: 1
            }, "<")
            .to(originSubHeadings, {
                color: "#000000",
                duration: 1
            }, "<")
            .to(originDescription, {
                color: "#000000",
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
            .to(idyllicsDescriptionTrack,{
                xPercent: 100,
                duration: 32
            }, "<").to(idyllicsTitle,{
                filter: "blur(15px)",
                opacity: 0,
                duration: 40
            }, "<")

            .add("starting-overlap", "-=48")

            .to(originTrack, {
                yPercent: -100,
                duration: 64
            }, "starting-overlap")
            .to(afterOriginTrack, {
                yPercent: -37,
                duration: 110,
            }, "-=48")
            // .to(footer, {
            //     yPercent: 0,
            //     opacity: 1,
            //     duration: 4,
            // }, "-=8")

            // store timelines in refs so handlers below can reach them
            enterDetailsTlRef.current = enterDetailsTl;
            exitDetailsTlRef.current = exitDetailsTl;
            masterTlRef.current = tl;

            // typography and visual elemnts registaration
            viewPortEngine.register(idyllicsName, {
                type: "title",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(idyllicsDescription, {
                type: "paragraph",
                active: false, 
                progress: viewportHorizontalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(originHeadings, {
                type: "title",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(originDescription, {
                type: "paragraph",
                active: false, 
                progress: viewportVerticalProgress, 
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(afterOriginHeading, {
                type: "title",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryTitleRevealer
            });

            viewPortEngine.register(afterOriginSubHeading, {
                type: "paragraph",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(afterOriginDescription, {
                type: "paragraph",
                active: false,
                progress: viewportVerticalProgress,
                animation: primaryParagraphRevealer
            });

            viewPortEngine.register(homeExperienceMedia, {
                type: "fade",
                active: false,
                progress: viewportIntersectionProgress,
                animation: fadeInRevealer
            });
            
            // viewport based animation engine initiation
            viewPortEngine.start();
            
            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();
            }, viewPortRef.current);

            return () => {
                splits.forEach(split => split.revert());
                context.revert();
                viewPortEngine.terminate();
            };
        };

        // ################ MOBILE TL ################# //
        const MobileTimeline = () => {
            const splits = [];

            const context = gsap.context(() => {

            const q = gsap.utils.selector(viewPortRef);

            const landing = q(".landing");
            // const homeTitle = q(".home-title");
            // const homeDescription = q(".home-description");
            const homeExperience=q(".home-experience");
            const mobileHomeExperienceTrack = q(".mobile-home-experience-track");
            

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
            gsap.set(mobileHomeExperienceTrack, {
                yPercent: 0,
            })

            

            // intial state of transitions
            gsap.set(beams, {
                attr: {
                    x: 100
                }
            })

            // enter details timeline & animations
            const enterDetailsTl = gsap.timeline({
                paused: true,
                defaults: {
                    ease: "power4"
                }
            });

            // exit details timeline & animations
            const exitDetailsTl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1,
                    ease: "power2.inOut"
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
            }).to(landing, {
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
            }, "<")
            .to(homeExperience, {
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
                    fill: "#ffffff"
                },
                duration: 1,
                ease: "power3.inOut",
            })
            

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
            tl.to(mobileHomeExperienceTrack, {
                yPercent: -280,
                duration: 16,
            })

            // store timelines in refs so handlers below can reach them
            enterDetailsTlRef.current = enterDetailsTl;
            exitDetailsTlRef.current = exitDetailsTl;
            masterTlRef.current = tl;

            // typography and visual elemnts registaration
            
            
            // viewport based animation engine initiation
            viewPortEngine.start();
            
            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();
            }, viewPortRef.current);

            return () => {
                splits.forEach(split => split.revert());
                context.revert();
                viewPortEngine.terminate();
            };
        };

        mm.add("(min-width: 1200px)", DesktopTimeline);

        mm.add("(min-width: 768px) and (max-width: 1199px)", TabletTimeline);
        mm.add("(max-width: 767px)", MobileTimeline);

        return () => mm.revert();
    }, []);

    return (<>
        <div ref={scrollPanelRef} className="w-full h-[100vh]">
            <div
                ref={transitionOneMarkerRef}
                className="transition-one-marker absolute top-[1vh] h-px w-full"
            />
            <div
                ref={transitionTwoMarkerRef}
                className="transition-two-marker absolute top-[200vh] h-px w-full"
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
                        fill="#CCCCCC"
                    />

                    <rect
                        className="beam beam-2"
                        x="100"
                        y="33"
                        width="100"
                        height="34"
                        fill="#CCCCCC"
                    />

                    <rect
                        className="beam beam-3"
                        x="100"
                        y="66"
                        width="100"
                        height="34"
                        fill="#CCCCCC"
                    />
                </svg>

                <HomeExperience/>

                {/* 
                <HomeExperience
                    artefacts={Artefacts}
                    onProjectClick={handleProjectClick}  // ← passed down
                    onBack={handleBack}                  // ← passed down
                    activeProject={activeProject}
                /> */}
            </div>
        </div>
    </>);
}

export default HomeTimeline;