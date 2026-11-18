import { Link } from "react-router-dom";

const ManifestationFooter = () => {
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
        <div className="manifestations-footer hidden md:flex lg:flex fixed bottom-0 left-0 w-full gap-15 z-50 items-start flex-row">

            {/* left col */}
            <div className="max-w-xl flex flex-col gap-5 w-full">
                <p className="md:text-xs lg:text-sm text-black pl-5 font-arima">
                    Every manifestation begins with imagination. <br/>
                    Every journey begins with a single idea.
                </p>
                
                {/* devider */}
                <div className="w-full h-px bg-black/20" />

                {/* links container*/}
                <div className="flex flex-row w-full gap-10 pb-5 pl-5 h-full">
                    {/* nav links */}
                    <div className="flex-col flex w-full h-full gap-2">
                        <h2 className="font-arima uppercase text-black md:text-xs lg:text-sm">
                            studio
                        </h2>
                        <ul className="font-arima md:text-xs lg:text-sm text-black">
                            {navLinks.map((item, index) => (
                                <li className="font-arima md:text-xs lg:text-sm hover:font-bold transition-all duration-300"
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
                        <ul className="font-arima md:text-xs lg:text-sm text-black">
                            {socialLinks.map((item, index) => (
                                <li className="font-arima md:text-xs lg:text-sm hover:font-bold transition-all duration-300" key={index}>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* all rights resereved */}
                    <div className="w-full h-full flex items-end md:pr-25">
                        <p className="font-arima md:text-xs lg:text-sm text-black text-right">
                            © 2026 Infinity Artverse Crafted <br/> with imagination.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManifestationFooter;