import { Link } from "react-router-dom";

import origin_vid_1 from "../../../assets/origin/optimized_mani_vid_1.webm";
import origin_vid_2 from "../../../assets/origin/optimized_mani_vid_2.webm";
import origin_vid_3 from "../../../assets/origin/optimized_mani_vid_3.webm";

import IceblinkReveal from "../../../assets/idyllic/i.webp"
import YarnReveal from "../../../assets/idyllic/y.webp"
import FeelReveal from "../../../assets/idyllic/f.webp"
import NostalgiaReveal from "../../../assets/idyllic/n.webp"
import TimelessReveal from "../../../assets/idyllic/t.webp"
import LinkedInIcon from "../../../assets/social_icons/linkedin.svg"
import FacebookIcon from "../../../assets/social_icons/facebook_logo.png"
import TikTokIcon from "../../../assets/social_icons/tiktok.svg"
import WhatsAppIcon from "../../../assets/social_icons/whatsapp.svg"

import ButterflyEffectImg from "../../../assets/artefactCovers/butterfly_effect/butterfly_effect_1.jpg"
import AnantasakhaImg from "../../../assets/artefactCovers/anantasakha/anantasakha_1.jpg"
import SevenDaysDescentImg1 from "../../../assets/artefactCovers/seven_days_descent/seven_days_descent_1.jpg"
import SevenDaysDescentImg2 from "../../../assets/artefactCovers/seven_days_descent/seven_days_descent_3.jpg"
import CapturingAffectionImg1 from "../../../assets/artefactCovers/capturing_affection/capturing_affection_3.jpg"
// import CapturingAffectionImg2 from "../../../assets/artefactCovers/capturing_affection/capturing_affection_4.jpg"
import SeemaWiiAadareImg1 from "../../../assets/artefactCovers/seema_wii_adare/seema_wii_adare_1.jpg"
import SeemaWiiAadareImg2 from "../../../assets/artefactCovers/seema_wii_adare/seema_wii_adare_3.jpg"
import TholPethiImg from "../../../assets/artefactCovers/thol_pethi/thol_pethi_1.jpg"
import HeenaParanaImg from "../../../assets/artefactCovers/heena_paarana/heena_paarana.jpg"
import YannemiImg7 from "../../../assets/artefactCovers/yannemi/yannemi_7.jpg" 

import GmailIcon from "../../../assets/social_icons/gmail.svg"

import Footer from "../../../components/Footer"


const HomeExperience = () => {
    return(
    <>
        {/* ########## MOBILE VIEW ########## */}
        <div className="md:hidden lg:hidden relative home-experience bg-transparent z-20 w-full h-screen overflow-hidden">
            <div className="flex flex-col mobile-home-experience-track relative items-left h-full mr-12">
                {/* go to projects section */}
                <h2 className="home-title font-cormorant pl-5 mt-15 text-center w-full max-w-xs text-black text-6xl">
                    Creativity has no final form.
                </h2>
                <p className="home-description font-arima pl-5 mt-15 text-center font-semibold w-full max-w-xs text-black text-md">
                    More than visuals. We create experiences.
                </p>
                <p className="home-description font-arima pl-5 mt-15 text-center w-full max-w-xs text-black text-xs">
                    Infinity Artverse brings different creative disciplines together in one evolving space. An idea might begin as a feeling, become an image, grow into a story, and find a form no one expected
                </p>
                {/* See What We Create button */}
                <Link to="/projects" className="inline-block ml-5 bg-black w-auto text-xs self-center mt-10 px-4 py-3 rounded-sm text-white font-arima">
                    See What We Create
                </Link>
                <div className="image-container pl-5 mb-5 mt-10 flex flex-col gap-5 w-full max-w-xs">
                    <img className="rounded-sm" src={YannemiImg7} alt="" />
                    <img className="rounded-sm" src={TholPethiImg} alt="" />
                    <img className="rounded-sm" src={HeenaParanaImg} alt="" />
                </div>
                {/* see the creators */}
                <section className="bg-black pl-2 w-full items-center justify-center pb-15 flex flex-col">
                    <h2 className="home-title font-cormorant mt-15 text-center w-full max-w-xs text-white text-6xl">
                        The Creators
                    </h2>
                    <p className="home-description text-center font-arima mt-10 text-cente w-full max-w-xs text-white text-xs">
                        Together, these paths formed a creative compass—one that encourages exploration beyond convention and imagination beyond li
                    </p>
                    {/* Know more about who we are Create button */}
                    <Link to="/projects" className="inline-block bg-white w-auto text-xs self-center mt-15 py-3 px-4 rounded-sm text-black font-arima">
                        Know more about who we are
                    </Link>

                    <p className="home-description font-arima mt-15 text-left font-semibold w-full max-w-xs text-white text-md">
                        More than visuals. We create experiences.
                    </p>
                </section>
                {/* create whats comes next */}
                <section className="w-full flex flex-col justify-center items-center">
                    <h2 className="home-title font-cormorant mt-15 text-center w-full max-w-xs text-black text-6xl">
                        Let’s createwhat comes next.
                    </h2>
                    <p className="home-description font-arima mt-15 text-center font-semibold w-full max-w-xs text-black text-md">
                        we are ready to bring your idea to a reality
                    </p>
                    <p className="home-description font-arima mt-15 text-center w-full max-w-xs text-black text-xs">
                        Discover the people, ideas, and creative process behind Infinity Artverse. Take a closer look at the minds and moments that bring the universe to life.
                    </p>

                    <div className="flex flex-col">
                        <p className="home-description font-arima mt-15 text-center font-semibold w-full max-w-xs text-black text-md">
                            ways to contact with us
                        </p>
                        {/* social media link set */}
                        <div className="flex flex-row gap-5 justify-center mt-5">
                            <a href="https://wa.me/" aria-label="Contact us on WhatsApp">
                                        <img src={WhatsAppIcon} className="w-6 h-6" alt="WhatsApp" />
                            </a>
                            <a href="mailto:" aria-label="Email us">
                                <img src={GmailIcon} className="w-6 h-6" alt="Gmail" />
                            </a>
                            <a href="" aria-label="Contact us on WhatsApp">
                                <img src={FacebookIcon} className="w-6 h-6" alt="WhatsApp" />
                            </a>
                            <a href="" aria-label="Email us">
                                <img src={LinkedInIcon} className="w-6 h-6" alt="LinkedIn" />
                            </a>
                            <a href="" aria-label="Email us">
                                <img src={TikTokIcon} className="w-6 h-6" alt="TikTok" />
                            </a>
                        </div>
                        {/* cta buttons */}
                        <div className="flex flex-col mt-15 gap-5">
                            <Link to="/projects" className="inline-block bg-black w-auto text-xs self-center px-4 py-3 rounded-sm text-white font-arima">
                                get in touch with creativity
                            </Link>
                            <Link to="/projects" className="inline-block bg-white border-1/2 border-black w-auto text-xs self-center px-4 py-3 rounded-sm text-black font-arima">
                                Know more about who we are
                            </Link>
                        </div>
                    </div>
                </section>
                {/* mobile footer */}
                <footer className="bg-black w-full mt-15 pl-5 flex flex-col">
                    <h2 className="home-title font-cormorant mt-6 text-left w-full max-w-xs text-white text-5xl">
                        Infinity <br/>
                        Artverse
                    </h2>
                    <div className="flex flex-col">
                        <p className="home-description text-left font-arima mt-10 text-cente w-full max-w-xs text-white text-xs">
                            Every manifestation begins with imagination.
                        </p>
                        <p className="home-description text-left font-arima text-cente w-full max-w-xs text-white text-xs">
                            Every journey begins with a single idea.
                        </p>
                    </div>
                    <p className="border-t-1 border-t-white/50 mt-10 text-white text-arima text-xs text-center py-4">
                        © 2026 Infinity Artverse
                    </p>
                </footer>
            </div>
        </div>
        
        {/* ########## DESKTOP VIEW ########## */}
        <div className="hidden md:block lg:block relative home-experience bg-transparent z-20 w-full h-screen overflow-hidden">
            {/* idyllics track */}
            <div className="idyllics-track absolute left-50 top-1/2 -translate-y-1/2 flex items-center justify-center  w-max">
                <div className="idyllics-title-container flex w-[50vw] shrink-0 h-150 items-start justify-center">
                    <h2 className="home-title font-cormorant mt-15 text-center w-full text-black sm:text-6xl lg:text-8xl">
                        Idyllics
                    </h2>
                </div>
                
                <div className="idyllics-container flex flex-row shrink-0 lg:gap-60 md:gap-40">
                    {/* Iceblink */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        <img
                            className='lg:w-45 md:w-40'
                            src={IceblinkReveal} 
                            alt={"Iceblink"} 
                        />

                        {/* description */}
                        <div className='flex flex-col gap-2 font-arima w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name lg:text-3xl md:text-2xl text-center text-black font-cormorant'>
                                    Ice Blink <br/>
                                    <span className='text-[#5A5A5A] lg:text-3xl md:text-2xl font-italianno'> 
                                        The Path of Reflection
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-center md:text-xs lg:text-sm text-black mt-2 leading-loose'>
                                Iceblink is the first idyllic path of Infinity Artverse. Inspired by the distant reflections that guide explorers through uncertainty, it represents the art of preserving moments in time. Through photography, fleeting memories become lasting reflections, capturing stories that continue to illuminate the journey ahead.
                            </p>
                        </div>
                    </div>

                    {/* Nostalgia */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        {/* description */}
                        <div className='flex flex-col gap-2 font-arima w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-center lg:text-3xl md:text-2xl text-black font-cormorant'>
                                    Nostalgia <br/>
                                    <span className='lg:text-3xl md:text-2xl font-italianno text-[#5A5A5A]'> 
                                        The Path of Memory
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-center md:text-xs lg:text-sm text-black mt-2 leading-loose'>
                                Nostalgia is the second idyllic path, born from the connection between memory and emotion. It embraces the moments that replay within us, transforming fragments of the past into moving stories. Through videography, memories are preserved not as records, but as experiences that can be felt again and again.
                            </p>
                        </div>

                        <img 
                            className='lg:w-45 md:w-40'
                            src={NostalgiaReveal} 
                            alt={"Iceblink"} 
                        />
                    </div>

                    {/* Feel */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        <img 
                            className='lg:w-45 md:w-40'
                            src={FeelReveal} 
                            alt={"Feel"} 
                        />

                        {/* description */}
                        <div className='flex flex-col gap-2 font-arima w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-center lg:text-3xl md:text-2xl text-black font-cormorant'>
                                    Feel <br/>
                                    <span className='lg:text-3xl md:text-2xl font-italianno text-[#5A5A5A]'> 
                                        The Path of Emotion
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-center md:text-xs lg:text-sm text-black mt-2 leading-loose'>
                                Feel is the third idyllic path, where imagination and emotion converge. It is the expression of thoughts shaped by memories, experiences, colours, and forms. Through creative exploration, this path transforms emotions into visual experiences that resonate beyond words.
                            </p>
                        </div>
                    </div>

                    {/* Timeless */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        {/* description */}
                        <div className='flex flex-col gap-2 font-arima w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-center lg:text-3xl md:text-2xl text-black font-cormorant'>
                                    Timeless <br/>
                                    <span className='text-[#5A5A5A] lg:text-3xl md:text-2xl font-italianno'> 
                                        The Path of Discovery
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-center md:text-xs lg:text-sm text-black mt-2 leading-loose'>
                                Timeless is the fourth idyllic path, inspired by the wonder found in the unexpected. It celebrates creations that transcend trends and moments, revealing new perspectives within the familiar. Through experimentation and innovation, this path seeks to create works that remain meaningful across time.
                            </p>
                        </div>

                        <img 
                            className='lg:w-45 md:w-40'
                            src={TimelessReveal} 
                            alt={"Timeless"} 
                        />
                    </div>

                    {/* Yarn */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        <img 
                            className='lg:w-45 md:w-40'
                            src={YarnReveal} 
                            alt={"Yarn"}
                        />

                        {/* description */}
                        <div className='flex flex-col gap-2 font-arima w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name lg:text-3xl md:text-2xl text-center text-black font-cormorant'>
                                    Yearn <br/>
                                    <span className='text-[#5A5A5A] lg:text-3xl md:text-2xl font-italianno'> 
                                        The Path of Identity
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-center md:text-xs lg:text-sm text-black mt-2 leading-loose'>
                                Yearn is the fifth and final idyllic path, embodying the human desire to create, grow, and leave a lasting mark. It represents the pursuit of individuality and purpose, transforming aspirations into distinctive identities. Through branding and visual storytelling, this path helps ideas evolve into something uniquely their own.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* idyllics description track */}
            <div className="w-full absolute bottom-0 left-0 overflow-hidden">
                <p className="idyllics-description-track whitespace-nowrap font-bold font-arima lg:text-sm md:text-xs text-black leading-loose">
                    Idyllics are the paths through which Infinity Artverse explores creativity. Each path carries its own character, emotion, and way of seeing—guiding ideas from the unseen into something tangible. Together, they form the creative language of the Artverse, connecting different forms of expression while leaving endless room for discovery.
                </p>
            </div>

            {/* origin title */}
            <h1 className="origin-title w-full md:hidden sm:hidden lg:block text-9xl text-black absolute -rotate-90 origin-center font-cormorant leading-none pointer-events-none select-none top-0 left-155">
                Unveiling the Infinity
            </h1>

            {/* origin content track */}
            <div className="origin-track absolute lg:space-x-10 md:space-x-2 text-black lg:right-0 justify-center top-0 flex flex-row w-full">
                {/* left col */}
                <div className="w-full space-y-24 max-w-md origin-content-container-left-col justify-center flex flex-col">
                    <div className="w-full flex items-end justify-center h-200">
                        <p className="origin-description md:max-w-60 lg:max-w-sm md:text-xs text-center font-arima leading-6">
                            Infinity Artverse began with a simple belief—that creativity should never be confined by a single medium, style, or perspective. What started as a passion for creating visual experiences gradually evolved into a universe where photography, cinematography, branding, and storytelling coexist under one artistic identity. Rather than following trends, we chose to build a space where imagination could lead every decision and every creation.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        {/* <img 
                            className="w-110"
                            src={img_2} 
                            alt="origin image 2" 
                        /> */}
                        <video
                            className="md:w-90 lg:w-110 rounded-sm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            poster="/images/video-poster.webp"
                        >
                            <source src={origin_vid_3} type="video/webm" />
                        </video>
                    </div>
                    <div className="w-full h-220 overflow-hidden relative items-center flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-headings text-center md:text-6xl lg:text-8xl font-cormorant">
                                The <br/> 
                                <span className="md:text-6xl lg:text-8xl font-cormorant">
                                    Collective
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-sub-headings lg:text-3xl md:text-2xl font-italianno">
                            Built by people who believe in creation.
                        </h2>
                        <p className="origin-description md:max-w-60 lg:max-w-sm text-center leading-6 z-35 md:text-xs lg:text-sm font-arima">
                            Behind every manifestation is a team brought together by a shared passion for creativity. Each member contributes a unique perspective, allowing different disciplines to merge into one unified vision. By combining individual strengths with collaborative thinking, Infinity Artverse continues to grow as a creative collective where ideas are transformed into experiences that inspire and connect.
                        </p>

                        {/* background image for last paragraph in right col */}
                        <div className="w-full absolute -bottom-10 z-32 left-0">
                            {/* <img
                                className="w-100"
                                src={img_4}
                                alt="origin image 1"
                            /> */}
                        </div>
                    </div>
                </div>

                {/* right col */}
                <div className="w-full space-y-24 max-w-md origin-content-container-right-col flex flex-col">
                    <div className="w-full flex justify-center">
                        {/* <img
                            className="w-110"
                            src={img_1}
                            alt="origin image 1"
                        /> */}

                        <video
                            className="md:w-90 lg:w-110 rounded-sm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            // poster="/images/video-poster.webp"
                        >
                            <source src={origin_vid_1} type="video/webm" />
                        </video>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-headings text-center md:text-6xl lg:text-8xl font-cormorant">
                                The <br/> 
                                <span className="md:text-6xl lg:text-8xl font-cormorant">
                                    Philosophy
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-sub-headings text-center md:max-w-60 lg:max-w-sm  lg:text-3xl md:text-2xl font-italianno">
                            Guided by imagination. Driven by purpose.
                        </h2>
                        <p className="origin-description text-center md:max-w-60 lg:max-w-sm leading-6 md:text-xs lg:text-sm font-arima">
                            At the heart of Infinity Artverse lies a philosophy of exploration. We believe creativity grows when curiosity is embraced and limitations are challenged. Every project becomes a journey of discovery, where ideas are refined through collaboration, experimentation, and thoughtful design. It is this pursuit of meaningful expression that continues to shape the Artverse and everything created within it.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        {/* <img
                            className="w-110"
                            src={img_3}
                            alt="origin image 4"
                        /> */}
                        <video
                            className="md:w-90 lg:w-110 rounded-sm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="none"
                            // poster="/images/video-poster.webp"
                        >
                            <source src={origin_vid_2} type="video/webm" />
                        </video>
                    </div>
                    <div className="w-full flex flex-col items-center space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-headings md:text-6xl lg:text-8xl font-cormorant text-center">
                                Looking<br/> 
                                <span className="md:text-6xl lg:text-8xl font-cormorant">
                                    Beyond
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-sub-headings text-center lg:text-3xl md:text-2xl font-italianno">
                            The journey has only begun.
                        </h2>
                        <p className="origin-description text-center md:max-w-60 lg:max-w-sm leading-6 md:text-xs lg:text-sm font-arima">
                            Infinity Artverse is not defined by what has already been created, but by the possibilities that remain undiscovered. Every project becomes another step toward expanding the universe we continue to imagine. As new ideas emerge and new stories are told, our commitment remains unchanged—to explore beyond convention, create without boundaries, and inspire others to see the infinite within their own imagination.
                        </p>
                    </div>
                </div>
            </div>
            {/* sections after origin section */}
            <div className="after-origin-track relative w-full space-y-10 md:pb-80 lg:pb-120 flex flex-col items-center justify-center">
                
                {/* artefact cover overlay */}
                <div className="absolute flex flex-col justify-between inset-0 text-black overflow-hidden">
                    <div className="w-full flex row justify-between">
                        {/* left col */}
                        <div className="flex flex-col md:max-w-60 mt-20 lg:max-w-xs space-y-8 pr-10 overflow-hidden -translate-x-15">
                            <img src={ButterflyEffectImg} alt="aretefact_cover_1" />
                            <img src={AnantasakhaImg} alt="aretefact_cover_2" />
                            <img src={SevenDaysDescentImg1} alt="aretefact_cover_3" />
                        </div>

                        {/* right col */}
                        <div className="flex flex-col md:max-w-60 mt-20 lg:max-w-xs  space-y-8 pl-10 overflow-hidden translate-x-15">
                            <img src={SevenDaysDescentImg2} alt="aretefact_cover_1" />
                            <img src={CapturingAffectionImg1} alt="aretefact_cover_2" />
                            <img src={SeemaWiiAadareImg2} alt="aretefact_cover_3" />
                        </div>
                    </div>

                    <div className="flex flex-row justify-around lg:justify-center space-x-6 translate-y-10">
                        <img className="md:h-70 lg:h-100 lg:mt-10" src={SeemaWiiAadareImg1} alt="aretefact_cover_1" />
                        <img className="md:h-70 lg:h-100 lg:mb-10" src={HeenaParanaImg} alt="aretefact_cover_2" />
                        <img className="md:h-70 lg:h-100 lg:mt-10" src={TholPethiImg} alt="aretefact_cover_3" />
                    </div>
                </div>
                {/* go to manifestation section */}
                <div className="go-to-manifestation-section w-full flex-col flex items-center md:space-y-6 lg:space-y-10">
                    <div className="overflow-hidden w-full max-w-md">
                        <h1 className=" text-black w-full md:text-6xl lg:text-8xl font-cormorant text-center">
                            Have Something in Mind?
                        </h1>
                    </div>

                    <h2 className="after-origin-sub-headings text-center text-black font-italianno md:text-2xl lg:text-3xl">
                        we are ready to bring your idea to a reality
                    </h2>

                    <p className="after-origin-descriptions text-center text-black font-arima md:text-xs lg:text-sm md:max-w-sm lg:max-w-md">
                        Discover the people, ideas, and creative process behind Infinity Artverse. Take a closer look at the minds and moments that bring the universe to life.
                    </p>

                    <div className="w-full lg:max-w-xl md:max-w-md flex flex-row justify-center">
                            {/* direct contact */}
                            <div className="flex flex-col w-full">
                                <h2 className="after-origin-sub-headings font-semibold text-center text-black font-arima md:text-xs lg:text-sm">
                                    for direct business queries
                                </h2>
                                <div className="w-full flex flex-row justify-center space-x-6">
                                    <a href="https://wa.me/" aria-label="Contact us on WhatsApp">
                                        <img src={WhatsAppIcon} className="md:w-6 md:h-6 lg:w-8 lg:h-8" alt="WhatsApp" />
                                    </a>
                                    <a href="mailto:" aria-label="Email us">
                                        <img src={GmailIcon} className="md:w-6 md:h-6 lg:w-8 lg:h-8" alt="Gmail" />
                                    </a>
                                </div>
                            </div>
                            {/* social media links*/}
                            <div className="flex flex-col w-full">
                                <h2 className="after-origin-sub-headings font-semibold text-center text-black font-arima md:text-xs lg:text-sm">
                                    for direct business queries
                                </h2>
                                <div className="w-full flex flex-row justify-center space-x-6">
                                    <a href="" aria-label="Contact us on WhatsApp">
                                        <img src={FacebookIcon} className="md:w-6 md:h-6 lg:w-8 lg:h-8" alt="WhatsApp" />
                                    </a>
                                    <a href="" aria-label="Email us">
                                        <img src={LinkedInIcon} className="md:w-6 md:h-6 lg:w-8 lg:h-8" alt="LinkedIn" />
                                    </a>
                                    <a href="" aria-label="Email us">
                                        <img src={TikTokIcon} className="md:w-6 md:h-6 lg:w-8 lg:h-8" alt="TikTok" />
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Explore about us section */}
                <div className="go-to-manifestation-section w-full flex-col flex items-center space-y-10 mt-20">
                    <div className="overflow-hidden w-full max-w-md">
                        <h1 className="after-origin-headings text-black w-full md:text-6xl lg:text-8xl font-cormorant text-center">
                            Beyond the Creations
                        </h1>
                    </div>

                    <div className="bg-black lg:pl-20 lg:pt-5 lg:pb-10 md:px-5 md:pt-8 md:pb-12 drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] w-full lg:max-w-3xl md:max-w-md relative flex rounded-md mt-2">
                        <div className="flex flex-col space-y-10 max-w-sm w-full">
                            <p className="after-origin-descriptions text-left text-white font-arima md:text-xs lg:text-sm md:max-w-xs lg:max-w-md">
                                Discover the people, ideas, and creative process behind Infinity Artverse. Take a closer look at the minds and moments that bring the universe to life.
                            </p>
                            {/* Explore About Us button */}
                            <Link to="/about" className="inline-block lg:text-sm md:text-xs bg-white w-auto self-start md:px-3 md:py-2 lg:px-4 lg:py-2 rounded-sm text-black font-arima">
                                Explore About Us
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Explore the Manifestations section */}
                <div className="go-to-manifestation-section w-full flex-col flex items-center space-y-10 mt-20">
                    <div className="overflow-hidden w-full max-w-lg">
                        <h1 className="after-origin-headings text-black w-full md:text-6xl lg:text-8xl font-cormorant text-center">
                            Explore the Manifestations
                        </h1>
                    </div>

                    <h2 className="after-origin-sub-headings text-center text-black font-italianno md:text-2xl lg:text-3xl">
                        Imaginations that came true by our hands
                    </h2>

                    <p className="after-origin-descriptions text-center text-black font-arima md:text-xs lg:text-sm md:max-w-xs lg:max-w-md">
                        Every creation begins with an idea. Discover the projects, stories, and visual experiences that have taken shape within Infinity Artverse.
                    </p>

                    <div className="w-full z-50 max-w-xl flex flex-row justify-center">
                            {/* See What We Create button */}
                            <Link to="/projects" className="inline-block lg:text-sm md:text-xs bg-black w-auto self-start md:px-3 md:py-3 lg:px-4 lg:py-2 rounded-sm text-white font-arima">
                                See What We Create
                            </Link>
                    </div>
                </div>
                <Footer/>
            </div>

            {/* <Footer/> */}
        </div>
    </>
        
    );
}

export default HomeExperience;