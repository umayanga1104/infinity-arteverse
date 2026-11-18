import { Link } from "react-router-dom";

const Footer = () => {
    const navLinks = [
        {label: "home", link: "/"},
        {label: "about us", link: "/about"},
        {label: "projects", link: "/projects"},
    ];
    
    const socialLinks = [
        {label: "instagram", href: "https://www.instagram.com/infinityartverse/"},
        {label: "behance", href: "https://www.behance.net/infinityartverse"},
        {label: "linked_in", href: "https://www.linkedin.com/company/infinity-artverse/"},
    ]

    return(
        <div className="footer absolute bg-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] bottom-0 left-0 lg:pt-20 md:pt-15 md:px-12 w-full gap-15 z-50 flex flex-row">
            <h1 className="font-cormorant text-black md:text-7xl lg:text-9xl leading-1 uppercase opacity-46">
                Infinity <br/> 
                <span className="font-cormorant md:text-7xl lg:text-9xl opacity-15">
                    Artverse
                </span>
            </h1>

            {/* left col */}
            <div className="w flex flex-col gap-5 w-full">
                <p className="md:text-xs lg:text-sm text-black font-arima">
                    Every manifestation begins with imagination. <br/>
                    Every journey begins with a single idea.
                </p>
                
                {/* devider */}
                <div className="w-full h-px bg-black/20" />

                {/* links container*/}
                <div className="flex flex-row w-full gap-10 md:pr-10 pb-5 h-full">
                    {/* nav links */}
                    <div className="flex-col flex w-full h-full gap-2">
                        <h2 className="font-arima uppercase text-black md:text-xs lg:text-sm">
                            studio
                        </h2>
                        <ul className="font-arima text-black">
                            {navLinks.map((item, index) => (
                                <li className="font-arima md:text-xs lg:text-sm hover:underline cursor-pointer"
                                    key={index}
                                >
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* social links */}
                    <div className="flex-col flex w-full h-full gap-2">
                        <h2 className="font-arima uppercase text-black md:text-xs lg:text-sm">
                            connect
                        </h2>
                        <ul className="font-arima text-black">
                            {socialLinks.map((item, index) => (
                                <li className="font-arima md:text-xs lg:text-sm hover:underline cursor-pointer" key={index}>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* all rights resereved */}
                    <div className="w-full h-full flex items-end">
                        <p className="hidden font-arima text-sm text-black text-right">
                            © 2026 Infinity Artverse Crafted <br/> with imagination.
                        </p>
                        <p className="hidden font-arima md:text-xs lg:text-sm text-black text-right">
                            © 2026 Infinity Artverse
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;