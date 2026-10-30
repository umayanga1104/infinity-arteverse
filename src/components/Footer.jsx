import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const navLinks = [
        {label: "home", link: "/"},
        {label: "about us", link: "/about"},
        {label: "contact us", link: "/contact"},
    ];
    
    const socialLinks = [
        {label: "instagram", href: "https://www.instagram.com/infinityartverse/"},
        {label: "behance", href: "https://www.behance.net/infinityartverse"},
        {label: "linked_in", href: "https://www.linkedin.com/company/infinity-artverse/"},
    ]

    const handleLinkClick = (e, link) => {
        e.preventDefault();
        navigate(link);
    }

    return(
        <div className="footer relative w-full gap-15 z-50 flex flex-row">
            <h1 className="font-ravello text-black text-9xl leading-1 uppercase opacity-46">
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
                                <li className="font-satoshi text-sm hover:underline cursor-pointer" 
                                    key={index} onClick={(e) => handleLinkClick(e, item.link)}
                                >
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
                                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                                        {item.label}
                                    </a>
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
    );
}

export default Footer;