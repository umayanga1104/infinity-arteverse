import img_1 from "../../../assets/origin/img_1.webp";
import img_2 from "../../../assets/origin/img_2.webp";
import img_3 from "../../../assets/origin/img_3.webp";
import img_4 from "../../../assets/origin/img_4.webp";

import IceBlinkImage  from '../../../assets/idyllic/ice_blink.webp';
import YarnImage      from '../../../assets/idyllic/yarn.webp';
import FeelImage      from '../../../assets/idyllic/feel.webp';
import NostalgiaImage from '../../../assets/idyllic/nostalgia.webp';
import TimelessImage  from '../../../assets/idyllic/timeless.webp';


const HomeExperience = ({ artefacts, onProjectClick, onBack, activeProject }) => {

    return(
        <div className="home-experience bg-transparent relative z-20 w-full h-full overflow-hidden">
            {/* idyllics track */}
            <div className="idyllics-track absolute left-50 top-1/2 -translate-y-1/2 flex items-center justify-center space-x-100 w-max">
                <div className="idyllics-title-container flex w-[50vw] shrink-0 h-150 items-start justify-center">
                    <h2 className="home-title font-ravello mt-15 text-center w-full text-[#5d5646] text-8xl">
                        Idyllics
                    </h2>
                </div>
                
                <div className="idyllics-container flex flex-row shrink-0 gap-60">
                    {/* Iceblink */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        <img
                            className='w-55'
                            src={IceBlinkImage} 
                            alt={"Iceblink"} 
                        />

                        {/* description */}
                        <div className='flex flex-col gap-2 font-satoshi w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-3xl text-[#5d5646] font-ravello'>
                                    Ice Blink <br/>
                                    <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                        The Path of Reflection
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-sm text-[#4d4c4b] mt-2 leading-loose'>
                                Iceblink is the first idyllic path of Infinity Artverse. Inspired by the distant reflections that guide explorers through uncertainty, it represents the art of preserving moments in time. Through photography, fleeting memories become lasting reflections, capturing stories that continue to illuminate the journey ahead.
                            </p>
                        </div>
                    </div>

                    {/* Nostalgia */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        {/* description */}
                        <div className='flex flex-col gap-2 font-satoshi w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-3xl text-[#5d5646] font-ravello'>
                                    Nostalgia <br/>
                                    <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                        The Path of Memory
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-sm text-[#4d4c4b] mt-2 leading-loose'>
                                Nostalgia is the second idyllic path, born from the connection between memory and emotion. It embraces the moments that replay within us, transforming fragments of the past into moving stories. Through videography, memories are preserved not as records, but as experiences that can be felt again and again.
                            </p>
                        </div>

                        <img 
                            className='w-55'
                            src={NostalgiaImage} 
                            alt={"Iceblink"} 
                        />
                    </div>

                    {/* Feel */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        <img 
                            className='w-55'
                            src={FeelImage} 
                            alt={"Feel"} 
                        />

                        {/* description */}
                        <div className='flex flex-col gap-2 font-satoshi w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-3xl text-[#5d5646] font-ravello'>
                                    Feel <br/>
                                    <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                        The Path of Emotion
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-sm text-[#4d4c4b] mt-2 leading-loose'>
                                Feel is the third idyllic path, where imagination and emotion converge. It is the expression of thoughts shaped by memories, experiences, colours, and forms. Through creative exploration, this path transforms emotions into visual experiences that resonate beyond words.
                            </p>
                        </div>
                    </div>

                    {/* Timeless */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        {/* description */}
                        <div className='flex flex-col gap-2 font-satoshi w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-3xl text-[#5d5646] font-ravello'>
                                    Timeless <br/>
                                    <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                        The Path of Discovery
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-sm text-[#4d4c4b] mt-2 leading-loose'>
                                Timeless is the fourth idyllic path, inspired by the wonder found in the unexpected. It celebrates creations that transcend trends and moments, revealing new perspectives within the familiar. Through experimentation and innovation, this path seeks to create works that remain meaningful across time.
                            </p>
                        </div>

                        <img 
                            className='w-55'
                            src={TimelessImage} 
                            alt={"Timeless"} 
                        />
                    </div>

                    {/* Yarn */}
                    <div
                        className="justify-between flex flex-col gap-5 items-center"
                    >
                        <img 
                            className='w-55'
                            src={YarnImage} 
                            alt={"Yarn"} 
                        />

                        {/* description */}
                        <div className='flex flex-col gap-2 font-satoshi w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden">
                                <h2 className='idyllic-name text-3xl text-[#5d5646] font-ravello'>
                                    Yearn <br/>
                                    <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                        The Path of Identity
                                    </span>
                                </h2>
                            </div>
                            {/* description */}
                            <p className='idyllics-description text-sm text-[#4d4c4b] mt-2 leading-loose'>
                                Yearn is the fifth and final idyllic path, embodying the human desire to create, grow, and leave a lasting mark. It represents the pursuit of individuality and purpose, transforming aspirations into distinctive identities. Through branding and visual storytelling, this path helps ideas evolve into something uniquely their own.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* origin title */}
            <h1 className="origin-title text-9xl text-[#5d5646] absolute -rotate-90 origin-center font-ravello leading-none pointer-events-none select-none top-0 -right-90">
                Unveiling the Infinity
            </h1>

            {/* origin content track */}
            <div className="origin-track absolute text-black left-0 top-0 flex flex-row w-full">
                {/* left col */}
                <div className="w-full space-y-16 max-w-138 origin-content-container-left-col flex flex-col">
                    <div className="w-full flex items-end h-200">
                        <p className="origin-description font-satoshi text-sm leading-6 pl-10">
                            Infinity Artverse began with a simple belief—that creativity should never be confined by a single medium, style, or perspective. What started as a passion for creating visual experiences gradually evolved into a universe where photography, cinematography, branding, and storytelling coexist under one artistic identity. Rather than following trends, we chose to build a space where imagination could lead every decision and every creation.
                        </p>
                    </div>
                    <div className="w-full flex">
                        <img 
                            className="w-110"
                            src={img_2} 
                            alt="origin image 2" 
                        />
                    </div>
                    <div className="w-full h-220 overflow-hidden pl-10 relative flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-headings text-5xl font-ravello">
                                The <br/> 
                                <span className="text-9xl font-ravello">
                                    Collective
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-sub-headings text-lg font-satoshi font-bold">
                            Built by people who believe in creation.
                        </h2>
                        <p className="origin-description leading-6 z-35 text-sm font-satoshi">
                            Behind every manifestation is a team brought together by a shared passion for creativity. Each member contributes a unique perspective, allowing different disciplines to merge into one unified vision. By combining individual strengths with collaborative thinking, Infinity Artverse continues to grow as a creative collective where ideas are transformed into experiences that inspire and connect.
                        </p>

                        {/* background image for last paragraph in right col */}
                        <div className="w-full absolute -bottom-10 z-32 left-0">
                            <img
                                className="w-100"
                                src={img_4}
                                alt="origin image 1"
                            />
                        </div>
                    </div>
                </div>

                {/* right col */}
                <div className="w-full space-y-16 max-w-138 origin-content-container-right-col flex flex-col">
                    <div className="w-full flex justify-end">
                        <img
                            className="w-110"
                            src={img_1}
                            alt="origin image 1"
                        />
                    </div>
                    <div className="w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-headings text-right text-5xl font-ravello">
                                The <br/> 
                                <span className="text-9xl font-ravello">
                                    Philosophy
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-sub-headings text-lg font-satoshi font-bold">
                            Guided by imagination. Driven by purpose.
                        </h2>
                        <p className="origin-description leading-6 text-sm font-satoshi">
                            At the heart of Infinity Artverse lies a philosophy of exploration. We believe creativity grows when curiosity is embraced and limitations are challenged. Every project becomes a journey of discovery, where ideas are refined through collaboration, experimentation, and thoughtful design. It is this pursuit of meaningful expression that continues to shape the Artverse and everything created within it.
                        </p>
                    </div>
                    <div className="w-full flex justify-end">
                        <img
                            className="w-110"
                            src={img_3}
                            alt="origin image 4"
                        />
                    </div>
                    <div className="w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-headings text-5xl font-ravello text-right">
                                Looking<br/> 
                                <span className="text-9xl font-ravello">
                                    Beyond
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-sub-headings text-lg font-satoshi font-bold">
                            The journey has only begun.
                        </h2>
                        <p className="origin-description leading-6 text-sm font-satoshi">
                            Infinity Artverse is not defined by what has already been created, but by the possibilities that remain undiscovered. Every project becomes another step toward expanding the universe we continue to imagine. As new ideas emerge and new stories are told, our commitment remains unchanged—to explore beyond convention, create without boundaries, and inspire others to see the infinite within their own imagination.
                        </p>
                    </div>
                </div>
            </div>

            {/* manifestations track */}
            <div className="manifestations-track relative z-40 w-full h-full flex flex-col items-start justify-center bg-white text-white">
                {/* manifestations left panel */}
                <div className="manifestations-left-panel absolute top-0 left-10 flex flex-col">
                    <div className="title-container overflow-hidden">
                        <h1 className="manifestations-title text-black text-8xl font-light font-ravello leading-snug mb-10">
                            Manifestations
                        </h1>
                    </div>

                    <ul className="manifestations-projects max-w-35 leading-relaxed w-full text-black text-sm font-satoshi">
                        {Object.keys(artefacts).map((name) => (
                            <li 
                                className="cursor-pointer hover:font-bold transition-all duration-300" 
                                key={name}
                                onClick={() => onProjectClick(name)}  // ← fires up to timeline
                            >
                                {name.toLowerCase().replace(/_/g, ' ')}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* project info */}
                <div className="manifestation-info-panel absolute top-0 left-10 flex flex-col">
                    <div className="title-container overflow-hidden">
                        <h1 className="manifestations-title text-black text-8xl font-light font-ravello leading-snug mb-10">
                            {activeProject?.details.title}
                        </h1>
                    </div>

                    <div className="max-w-md space-y-10 leading-relaxed w-full text-black text-sm font-satoshi">
                        <div className="project-description">
                            {activeProject?.details.fullDescription}
                        </div>
                        <div className="type-and-collab-stat flex flex-col">
                            <p className="project-type flex flex-row">
                                Type: <span className="font-bold ml-4">{activeProject?.details.type.join(", ")}</span>
                            </p>
                            <p className={`collaborations ${activeProject?.details.collaboration.isCollaboration ? "flex" : "hidden"}`}>
                                Collaborations: <span className="font-bold">{activeProject?.details.collaboration.partner.join(" | ")}</span>
                            </p>
                        </div>
                        <ul className="credits flex flex-col">
                            {activeProject?.details.credits.map((credit, index) => (
                                <li key={index} className="credit-item flex flex-row">
                                    <span className="credit-role">{credit.role}</span>: 
                                    <span className="credit-name font-bold">{credit.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="">
                        <button 
                            className="text-sm cursor-pointer text-black font-bold mt-15 font-satoshi" 
                            onClick={onBack}
                        >
                            {"<< Back to Manifestations"}
                        </button>
                    </div>
                </div>

                {Object.entries(artefacts).map(([name, artefact]) => (
                    artefact.images.map((img, i) => (
                        <div 
                            key={`${name}-${i}`}
                            className="absolute top-0 left-0"
                            ref={el => {
                                if(!artefact.refs.cards[i]) artefact.refs.cards[i] = el
                            }}
                        >
                            <img
                                src={img.image}
                                alt={img.alt}
                                className="w-60 object-cover shadow-md select-none"
                                draggable={false}
                            />
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
}

export default HomeExperience;