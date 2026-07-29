import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/all";

import Landing from "../pages/Home/sections/Landing";
import { viewPortEngine } from "../animations/engine/viewportEngine";
import HomeExperience from "../pages/Home/sections/HomeExperience";
import { viewportHorizontalProgress, viewportVerticalProgress } from "../animations/helpers/viewportProgress";
import { primaryParagraphRevealer } from "../animations/helpers/paragraphRevealHelper";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const HomeTimeline = () => {
    const viewPortRef = useRef(null);
    const scrollPanelRef = useRef(null);

    const navLinks = [
        {label: "home"},
        {label: "projects"},
        {label: "about us"},
        {label: "contact us"},
    ];
    
    const socialLinks = [
        {label: "instagram"},
        {label: "behance"},
        {label: "linked_in"},
        {label: "youtube"},
    ]

    useEffect(() => {
        const splits = [];

        const context = gsap.context(() => {

            const q = gsap.utils.selector(viewPortRef);

            const landing = q(".landing");
            const homeExperience=q(".home-experience");
            const idyllicsTrack = q(".idyllics-track");
            const idyllicsDescription = q(".idyllics-description");
            const originTitle = q(".origin-title");
            const originDescription = q(".origin-description");
            const originTrack = q(".origin-track");
            const footer = q(".footer");

            // elements initial positions config
            gsap.set(landing,{
                xPercent:0,
            })

            gsap.set(homeExperience, {
                xPercent: 100,
                yPercent: -100
            });

            gsap.set(idyllicsTrack, {
                xPercent: 0
            })

            gsap.set(originTitle, {
                yPercent: -500
            })

            gsap.set(originTrack, {
                yPercent: 100
            })

            gsap.set(footer, {
                yPercent: 150,
            })

            // timeline creation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: scrollPanelRef.current,
                    start: 'top top',
                    end: ()=>window.innerHeight*5,
                    scrub: true,
                    pin: true,
                }
            });

            //settle downs the layout with the pinning of scroll trigger
            ScrollTrigger.refresh();

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
            
            // master timeline animations
            tl.to(homeExperience, {
                xPercent: 0,
                duration: 8
            })
            .to(idyllicsTrack, {
                xPercent: -120,
                duration: 32
            })
            .add("starting-overlap", "-=20")

            .to(originTitle, {
                yPercent: 890,
                duration: 32
            }, "starting-overlap")
            .to(originTrack, {
                yPercent: -85,
                duration: 32
            }, "starting-overlap")
            .to(footer, {
                yPercent: 0,
                duration: 28,
                delay: 5
            }, "-=16")
            
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
                <Landing/>
                <HomeExperience/>
                {/* footer */}
                <div className="footer absolute bottom-0 left-0 w-full gap-15 z-50 flex flex-row">
                    <h1 className="font-ravello pl-70 text-black text-9xl leading-1 uppercase opacity-46">
                        Infinity <br/> 
                        <span className="font ravello text-9xl opacity-15">
                            Artverse
                        </span>
                    </h1>

                    {/* left col */}
                    <div className="w flex flex-col gap-5 w-full">
                        <p className="text-sm text-black font-satoshi">
                            Every manifestation begins with imagination. <br/>
                            Every journey begins with a single idea.
                        </p>
                        
                        {/* devider */}
                        <div className="w-full h-px bg-black/20" />

                        {/* links container*/}
                        <div className="flex flex-row w-full gap-10 pb-5 h-full">
                            {/* nav links */}
                            <div className="flex-col flex w-full h-full gap-2">
                                <h2 className="font-satoshi uppercase text-black text-sm">
                                    studio
                                </h2>
                                <ul className="font-satoshi text-sm text-black">
                                    {navLinks.map((item, index) => (
                                        <li className="font-satoshi text-sm hover:underline cursor-pointer" key={index}>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* social links */}
                            <div className="flex-col flex w-full h-full gap-2">
                                <h2 className="font-satoshi uppercase text-black text-sm">
                                    connect
                                </h2>
                                <ul className="font-satoshi text-sm text-black">
                                    {socialLinks.map((item, index) => (
                                        <li className="font-satoshi text-sm hover:underline cursor-pointer" key={index}>
                                            {item.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* all rights resereved */}
                            <div className="w-full h-full flex items-end">
                                <p className="font-satoshi text-sm text-black text-right">
                                    © 2026 Infinity Artverse Crafted <br/> with imagination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default HomeTimeline;