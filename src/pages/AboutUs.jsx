import { memo } from "react";
import Footer from "../components/Footer"

const ContactInfoCard = memo(({type, detail="", href=""}) => {
    return (
        <div className="w-full flex-col text-black">
            <h3 className="font-satoshi text-sm font-bold">
                {type}
            </h3>
            {href === "" ?
                <p className="font-satoshi text-sm text-black">
                    {detail}
                </p>
                :
                <a className="cursor-pointer font-satoshi text-sm text-black" href={href} target="_blank">
                    {detail}
                </a>
            }
        </div>
    );
});

const AboutUs = () => {

    return (
        <div className="w-full flex flex-col bg-white items-center justify-between h-screen relative overflow-hidden">
            <h1 className="font-ravello text-black text-8xl pt-8">
                Get In Touch
            </h1>
            {/* contact information container */}
            <div className="flex flex-row space-x-20">
                {/* col-1 */}
                <div className="flex flex-col gap-5">
                    <ContactInfoCard type="Email" detail="hello@infinityartverse.com" />
                    <ContactInfoCard type="Phone" detail="+94 71 018 4698" />
                    <ContactInfoCard type="Location" detail="Sri Lanka" />
                </div>
                {/* col-2 */}
                <div className="flex flex-col gap-5">
                    <ContactInfoCard type="Instagram" detail="instagram.com/infinityartverse" href="https://www.instagram.com/infinityartverse/" />
                    <ContactInfoCard type="Facebook" detail="facebook.com/infinityartverse" href="https://www.facebook.com/infinityartverse" />
                    <ContactInfoCard type="LinkedIn" detail="linkedin.com/company/infinity-artverse" href="https://www.linkedin.com/company/infinity-artverse/" />
                </div>
                {/* col-3 */}
                <div className="flex flex-col gap-5">
                    <ContactInfoCard type="Web" detail="infinity-artverse.com" href="infinity-artverse.com" />

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;