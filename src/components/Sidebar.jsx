import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LogoImg from "../assets/logo/logo_1.png";
// import { Home, User, FolderKanban, Mail, Menu, X } from "lucide-react";

const links = [
  { label: "JOURNEY", href: "/" },
  { label: "WHO WE ARE", href: "/about" },
  { label: "GET IN TOUCH", href: "/contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const containerRef = useRef(null); 
  const sidebarTimelineRef = useRef(null);
  const navigate = useNavigate();

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

  useGSAP(() => {
    // 1. Initially hide it off-screen to the right
    gsap.set(containerRef.current, { x: 550 });
    gsap.set(".sidebar-link-reveal", { yPercent: 110, opacity: 0 });
    
    // 2. Build a snappy timeline with a clean power2.out ease
    sidebarTimelineRef.current = gsap.timeline({ paused: true })
      .to(containerRef.current, {
        x: 0,
        duration: 0.4, // Reduced from 2s to 0.4s for standard crisp UI performance
        ease: "power2.out" 
      })
      .to(".sidebar-link-reveal", {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.1,
      }, "-=0.15");
  }, { scope: containerRef });

  const handleSidebarToggle = () => {
    setIsOpen((prev) => {
      const nextState = !prev;
      if(nextState) {
        sidebarTimelineRef.current.play();
      }else {
        sidebarTimelineRef.current.reverse();
      }
      return nextState;
    } );
  }

  // 3. Handle link clicks by intercepting the event, reversing, and navigating on reverse completion
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    
    // Set the onReverseComplete callback dynamically just for this exit action
    sidebarTimelineRef.current.eventCallback("onReverseComplete", () => {
      setIsOpen(false);
      navigate(href); // Navigate only after the sidebar is safely tucked away
    });

    sidebarTimelineRef.current.reverse();
  };

  return (
    <div
      ref={containerRef}
      /* REMOVED: transition-all duration-300 to stop CSS from clashing with GSAP */
      className="sidebar fixed border-l border-white bg-black top-0 right-0 flex h-screen w-full max-w-150 shadow-xl flex-col z-[100]"
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
          <p className="sidebar-text transform whitespace-nowrap text-xs pb-12 origin-left rotate-90 font-satoshi">
            Every manifestation begins with imagination. Every journey begins with a single idea.
          </p>
          {/* logo */}
            <div className="landing-logo-container flex overflow-hidden items-center justify-center">
                <img src={LogoImg} alt="Logo" className="object-contain" />
            </div>
        </div>
        <div className="flex flex-col w-full h-full">
          {/* nav items */}
          <ul className="flex flex-col w-full h-full items-center mt-10">
            {links.map((item, index) => (
              <li key={index} className="p-4">
                <div className="overflow-hidden">
                  <Link
                    to={item.href} 
                    onClick={(e) => handleLinkClick(e, item.href)} 
                    className="sidebar-link-reveal sidebar-text text-white font-ravello text-6xl block"
                  >
                    {item.label}
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          {/* footer items */}
          <div className="items-center flex flex-col gap-5 w-full pb-10">
            <p className="sidebar-text font-satoshi text-sm text-white text-right">
              © 2026 Infinity Artverse Crafted <br/> with imagination.
            </p>
            
            {/* devider */}
            <div className="sidebar-devider ml-50 w-full h-px bg-white/20" />

            {/* links, nav items container*/}
            <div className="flex flex-col pl-10 items-center w-full h-full">
                {/* single container to hold both nav and social links */}
                <div className="flex flex-row max-w-sm w-full">
                  {/* nav links */}
                  <div className="flex-col flex w-full gap-2">
                      <h2 className="sidebar-text font-satoshi uppercase text-white text-sm">
                          studio
                      </h2>
                      <ul className="font-satoshi text-sm text-white">
                          {navLinks.map((item, index) => (
                              <li className="sidebar-text font-satoshi text-sm hover:underline cursor-pointer" key={index}>
                                  {item.label}
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* social links */}
                  <div className="flex-col flex w-full gap-2">
                      <h2 className="sidebar-text font-satoshi uppercase text-white text-sm">
                          connect
                      </h2>
                      <ul className="font-satoshi text-sm text-white">
                          {socialLinks.map((item, index) => (
                              <li className="sidebar-text font-satoshi text-sm hover:underline cursor-pointer" key={index}>
                                  {item.label}
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