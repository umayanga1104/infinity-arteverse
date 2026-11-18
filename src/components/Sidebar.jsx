import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LogoImg from "../assets/logo/logo_1.png";
// import { Home, User, FolderKanban, Mail, Menu, X } from "lucide-react";

const links = [
  { label: "Journey", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "What We Created", href: "/projects" },
];

const navLinks = [
  { label: "home", link: "/" },
  { label: "about us", link: "/about" },
  { label: "projects", link: "/projects" },
];

const socialLinks = [
  { label: "instagram", href: "https://www.instagram.com/infinityartverse/" },
  { label: "facebook", href: "https://www.facebook.com/infinityartverse" },
  { label: "linked_in", href: "https://www.linkedin.com/company/infinity-artverse/" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const containerRef = useRef(null); 
  const navigate = useNavigate();

  //the devider does not fade away in the main nav link click tl,
  //manually fade it away quickly to avoid visual bug, then fade it back in when the sidebar is opened again
  //fadeaway is in the "sidebarNavLinkRevealTl" tl
  const sidebarDeviderRef = useRef(null);
  // const sidebarLogoChevronContainerRef = useRef(null);

  const sidebarNavLinkRevealTl = useRef(null);
  const sidebarOpeningClosingTl = useRef(null);
  const isNavigatingRef = useRef(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    const DesktopTimeline = () => {
      gsap.set(containerRef.current, { xPercent: 96.5 });
      gsap.set(".sidebar-link-reveal", { yPercent: 110, opacity: 0 });
      gsap.set(sidebarDeviderRef.current, { opacity: 0 });
  
      sidebarOpeningClosingTl.current = gsap.timeline({ paused: true })
        .to(containerRef.current, {
          xPercent: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
  
      sidebarNavLinkRevealTl.current = gsap.timeline({ paused: true })
        .to(".sidebar-link-reveal", {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(sidebarDeviderRef.current, {
          opacity: 1,
          duration: 0.1,
        }, "<");
    }

    const TabletTimeline = () => {
      gsap.set(containerRef.current, { xPercent: 94 });
      gsap.set(".sidebar-link-reveal", { yPercent: 110, opacity: 0 });
      gsap.set(sidebarDeviderRef.current, { opacity: 0 });
  
      sidebarOpeningClosingTl.current = gsap.timeline({ paused: true })
        .to(containerRef.current, {
          xPercent: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
  
      sidebarNavLinkRevealTl.current = gsap.timeline({ paused: true })
        .to(".sidebar-link-reveal", {
          yPercent: -10,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(sidebarDeviderRef.current, {
          opacity: 1,
          duration: 0.1,
        }, "<");
    }

    const mobileTimeline = () => {
      gsap.set(containerRef.current, { xPercent: 88 });
      gsap.set(".sidebar-link-reveal", { yPercent: 110, opacity: 0 });
      gsap.set(sidebarDeviderRef.current, { opacity: 0 });
  
      sidebarOpeningClosingTl.current = gsap.timeline({ paused: true })
        .to(containerRef.current, {
          xPercent: 0,
          duration: 0.8,
          ease: "power2.inOut"
        });
  
      sidebarNavLinkRevealTl.current = gsap.timeline({ paused: true })
        .to(".sidebar-link-reveal", {
          yPercent: -10,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
        })
        .to(sidebarDeviderRef.current, {
          opacity: 1,
          duration: 0.1,
        }, "<");
    }

    mm.add("(min-width: 1200px)", DesktopTimeline);
    mm.add("(min-width: 768px) and (max-width: 1199px)", TabletTimeline);
    mm.add("(max-width: 767px)", mobileTimeline);

      return () => mm.revert();
  }, { scope: containerRef });

  const handleSidebarToggle = () => {
    if (isNavigatingRef.current) return;

    if (isOpen) {
      sidebarOpeningClosingTl.current.reverse();
      sidebarNavLinkRevealTl.current.reverse();
      setIsOpen(false);
      return;
    }

    gsap.set(containerRef.current, { opacity: 1 });
    sidebarOpeningClosingTl.current.play();
    sidebarNavLinkRevealTl.current.play();
    setIsOpen(true);
  };

  // Hide the text before changing pages, then retract the transparent sidebar.
  const handleLinkClick = (e, href) => {
    e.preventDefault();

    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;
    sidebarOpeningClosingTl.current.pause();

    sidebarNavLinkRevealTl.current.eventCallback("onReverseComplete", () => {
      sidebarNavLinkRevealTl.current.eventCallback("onReverseComplete", null);
      navigate(href);

      gsap.timeline({
        onComplete: () => {
          sidebarOpeningClosingTl.current.pause(0);
          sidebarNavLinkRevealTl.current.pause(0);
          setIsOpen(false);
          isNavigatingRef.current = false;
        },
      })
        .to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power1.out",
        }, "+=0.5")
        .to(containerRef.current, {
          xPercent: 96.5,
          duration: 0.2,
          ease: "power2.inOut",
        }, ">")
        .to(containerRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: "power1.in",
        }, ">");
    });

    sidebarNavLinkRevealTl.current.reverse();
  };

  return (
    <div
      ref={containerRef}
      /* REMOVED: transition-all duration-300 to stop CSS from clashing with GSAP */
      className="sidebar fixed border-l/2 border-black text-black bg-white top-0 right-0 flex h-screen w-full shadow-xl flex-col z-[100]"
    >
      <div
        onClick={handleSidebarToggle} 
        className="flex w-full justify-start p-4 cursor-pointer"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" 
          viewBox="0 0 24 24" fill="none" 
          stroke="currentColor" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" 
          className={`lucide-chevron-left transform transition-transform duration-700 ${isOpen ? "rotate-180" : ""}`}
        >
            <path d="m15 18-6-6 6-6"/>
        </svg>
      </div>

      <div className="flex flex-row w-full h-full overflow-hidden">
        {/* side items */}
        <div className="flex flex-col w-13 h-full justify-between">
          <p className="sidebar-text transform whitespace-nowrap text-xs pb-12 origin-left rotate-90 font-arima">
            Every manifestation begins with imagination. Every journey begins with a single idea.
          </p>
          {/* logo */}
            <div className="landing-logo-container flex overflow-hidden items-center justify-center">
                <img src={LogoImg} alt="Logo" className="object-contain" />
            </div>
        </div>
        <div className="flex flex-col w-full h-full">
          {/* nav items */}
          <ul className="flex flex-col w-full h-full justify-center items-center">
            {links.map((item) => (
              <li key={item.href} className="p-4">
                <div className="overflow-hidden pr-5">
                  <Link
                    to={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)} 
                    className="sidebar-link-reveal sidebar-text text-black font-italianno text-4xl md:text-6xl lg:text-8xl block cursor-pointer hover:font-bold transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          {/* footer items */}
          <div className="items-center flex flex-col gap-5 w-full pb-10">
            <div className="overflow-hidden">
              <p className="sidebar-link-reveal pr-8 md:pr-0 lg:pr-0 pb-8 md:pb-0 lg:pb-0 sidebar-text font-arima text-xs lg:text-sm md:text-xs text-black sm:text-left md:text-right lg:text-right">
                © 2026 Infinity Artverse Crafted <br/> with imagination.
              </p>
            </div>
            
            {/* devider */}
            <div ref={sidebarDeviderRef} className="sidebar-devider ml-50 w-full h-px bg-black/10" />

            {/* navbar footer*/}
            <div className="flex flex-col justify-center md:pl-35 items-center w-full h-full">
                {/* single container to hold both nav and social links */}
                <div className="flex flex-row max-w-sm pl-12 md:pl-0 lg:pl-0 w-full">
                  {/* nav links */}
                  <div className="flex-col flex w-full gap-2">
                      <div className="overflow-hidden">
                        <h2 className="sidebar-link-reveal sidebar-text font-arima uppercase text-black text-xs md:text-xs lg:text-sm">
                            studio
                        </h2>
                      </div>
                      <ul className="font-arima text-xs md:text-xs lg:text-sm text-black">
                          {navLinks.map((item) => (
                              <li
                                key={item.link}
                                onClick={(e) => handleLinkClick(e, item.link)}
                                className="sidebar-text font-arima md:text-xs lg:text-sm cursor-pointer hover:font-bold transition-all duration-300 overflow-hidden"
                              >
                                <span className="sidebar-link-reveal block">{item.label}</span>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* social links */}
                  <div className="flex-col flex w-full gap-2">
                      <div className="overflow-hidden">
                        <h2 className="sidebar-link-reveal sidebar-text font-arima uppercase text-black text-xs md:text-xs lg:text-sm">
                            connect
                        </h2>
                      </div>
                      <ul className="font-arima text-xs md:text-xs lg:text-sm text-black">
                          {socialLinks.map((item) => (
                              <li className="sidebar-text font-arima md:text-xs lg:text-sm cursor-pointer hover:font-bold transition-all duration-300 overflow-hidden" key={item.href}>
                                  <a className="sidebar-link-reveal inline-block" href={item.href} target="_blank" rel="noopener noreferrer">
                                      {item.label}
                                  </a>
                              </li>
                          ))}
                      </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;