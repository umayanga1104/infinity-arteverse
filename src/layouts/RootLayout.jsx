import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const RootLayout = () => {
    const globalAnimationRef = useRef(null);
    const location = useLocation();

    useGSAP(() => {
        const lenis = new Lenis({
            autoRaf: false,
            smoothWheel: true,
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

            {/* Page outlet */}
            <div className="relative w-full bg-black">
                <main className="relative z-10 w-full min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default RootLayout;