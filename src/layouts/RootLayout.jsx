import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

import LogoImg from "../assets/logo/logo_1.png"

gsap.registerPlugin(ScrollTrigger);

const RootLayout = () => {
    const globalAnimationRef = useRef(null);
    const location = useLocation();

    useGSAP(() => {
        const lenis = new Lenis({
            autoRaf: false,
            smoothWheel: true,
            lerp: 0.08,
            wheelMultiplier: 0.4,
        });

        const updateScroll = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(updateScroll);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(updateScroll);   
            lenis.destroy();
        };
    }, { scope: globalAnimationRef });

    useGSAP(()=> {
        const q = gsap.utils.selector(globalAnimationRef);

        const sidebar = q(".sidebar");
        const sidebarText = q(".sidebar-text");
        const sidebarDevider = q(".sidebar-devider");
        const sidebarChevron = q(".lucide-chevron-left");
        const transitionOneMarker = q(".transition-one-marker")[0];
        const transitionTwoMarker = q(".transition-two-marker")[0];

        // initial loader animation elements
        const initialBeams = q(".initial-beam");
        const loadingScreenLogo = q(".loading-screen-logo-container");
        const initialAnimationContainer = q(".intial-animation-container");

        // intial animation timeline creation
        const initialAnimationTl = gsap.timeline();

        // intial timeline animations
        initialAnimationTl.fromTo(loadingScreenLogo, {
            opacity: 0
        }, {
            opacity: 100,
            duration: 3,
            ease: "power1.in"
        })
        .to(initialBeams, {
            xPercent: 100,
            duration: 1.5,
            stagger: 0.3,
            ease: "power3.inOut"
        })
        .to(loadingScreenLogo, {
            opacity: 0,
            duration: 2,
            ease: "power3.inOut",
        }, "-=3.8")
        .to(initialAnimationContainer, {
            display:"none",
        }, "+=1")

        //Transtion 1 timeline and animations
            const transitionOneTl = gsap.timeline({
                paused: true
            });

            transitionOneTl.to(sidebar, {
                backgroundColor: "#cccccc",
                borderLeftColor: "#000000",
                textColor: "#000000",
                duration: 0.5
            });

            if (transitionOneMarker) {
                ScrollTrigger.create({
                    trigger: transitionOneMarker,
                    start: "top top",
                    onEnter() {
                        transitionOneTl.play();
                    },
                    onLeaveBack() {
                        transitionOneTl.reverse();
                    }
                });
            }

            // Transition 2 timeline and animations
            const transitionTwoTl = gsap.timeline({
                paused: true
            });

            transitionTwoTl.to(sidebar, {
                backgroundColor: "#ffffff",
                borderLeftColor: "#000000",
                duration: 0.5
            })
            .to(sidebarText, {
                color: "#000000",
                duration: 0.5
            }, "<")
            .to(sidebarDevider, {
                backgroundColor: "#000000",
                duration: 0.5
            }, "<")
            .to(sidebarChevron, {
                color: "#000000",
                duration: 0.5
            }, "<");

            if (transitionTwoMarker) {
                ScrollTrigger.create({
                    trigger: transitionTwoMarker,
                    start: "top top",
                    onEnter() {
                        transitionTwoTl.play();
                    },
                    onLeaveBack() {
                        transitionTwoTl.reverse();
                    }
                });
            }
    }, {
        scope: globalAnimationRef,
        dependencies: [location.pathname]
    })

    return (
        <div ref={globalAnimationRef} className="global-animation container relative min-h-screen w-full bg-black">
            <Sidebar />
            {/* animation assets container */}
            <div className="intial-animation-container flex items-center justify-center fixed inset-0 z-100">
                {/* logo */}
                <div className="loading-screen-logo-container z-100 overflow-hidden items-center justify-center">
                    <img src={LogoImg} alt="Logo" className="object-contain w-200" />
                </div>

                {/* z-50 svg mask for initial page transition part*/}
                <svg
                    className="transition-svg fixed inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <rect
                        className="initial-beam initial-beam-1"
                        x="0"
                        y="0"
                        width="100"
                        height="34"
                        fill="#000000"
                    />

                    <rect
                        className="initial-beam initial-beam-2"
                        x="0"
                        y="33"
                        width="100"
                        height="34"
                        fill="#000000"
                    />

                    <rect
                        className="initial-beam initial-beam-3"
                        x="0"
                        y="66"
                        width="100"
                        height="34"
                        fill="#000000"
                    />
                </svg>
            </div>

            {/* Page outlet */}
            <div className="relative w-full bg-black">
                <main className="relative overflow-hidden z-10 w-full min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default RootLayout;