const Footer = () => {
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

    return(
        <div className="manifestations-footer absolute bottom-0 left-0 w-full gap-15 z-50 flex items-start flex-row">

            {/* left col */}
            <div className="max-w-xl flex flex-col gap-5 w-full">
                <p className="text-sm text-black pl-5 font-satoshi">
                    Every manifestation begins with imagination. <br/>
                    Every journey begins with a single idea.
                </p>
                
                {/* devider */}
                <div className="w-full h-px bg-black/20" />

                {/* links container*/}
                <div className="flex flex-row w-full gap-10 pb-5 pl-5 h-full">
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
    );
}

export default Footer;