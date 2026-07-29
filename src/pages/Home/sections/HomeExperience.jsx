import img_1 from "../../../assets/origin/img_1.webp";
import img_2 from "../../../assets/origin/img_2.webp";
import img_3 from "../../../assets/origin/img_3.webp";
import img_4 from "../../../assets/origin/img_4.webp";
import { idyllics } from '../../../data/idyllics';


const HomeExperience = () => {
    return(
        <div className="home-experience bg-white relative z-20 w-full h-full overflow-hidden">
            {/* idyllics track */}
            <div className="idyllics-track absolute left-50 top-1/2 -translate-y-1/2 flex items-center justify-center space-x-200 w-max">
                <div className="idyllics-title-container flex gap-12 flex-col w-[50vw] shrink-0 h-full items-start justify-center">
                    <h2 className="idyllics-title font-ravello text-start w-full text-black text-8xl">
                        Idyllics
                    </h2>
                    <h2 className="idyllics-title font-ravello text-center w-full text-black text-8xl">
                        Idyllics
                    </h2>
                    <h2 className="idyllics-title font-ravello text-end w-full text-black text-8xl">
                        Idyllics
                    </h2>
                </div>
            
                <div className="idyllics-container flex flex-row shrink-0 space-x-50">
                
                    {Object.entries(idyllics).map(([name, idyllic]) => (
                        <div
                            key={name}
                            className="justify-between flex flex-col items-center"
                        >
                        {/* description */}
                        <div className='flex flex-col gap-2 font-satoshi w-70'>
                            {/* Name */}
                            <div className="title-container overflow-hidden mb-8">
                                <h2 className='idyllic-name text-3xl text-left text-black font-ravello'>
                                    {name} <br/>
                                    <span className='text-lg text-[#5A5A5A] font-ravello'> 
                                        {idyllic.title}
                                    </span>
                                </h2>
                            </div>

                            {/* image */}
                            <img
                                className='w-55 mb-4'
                                src={idyllic.image}
                                alt={`${name} image`} 
                            />

                            {/* description */}
                            <p className='idyllics-description text-sm text-justify text-black mt-2 leading-6'>
                                {idyllic.description}
                            </p>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>

            {/* origin title */}
            <h1 className="origin-title text-9xl text-black absolute -rotate-90 origin-center font-ravello leading-none pointer-events-none select-none top-0 -right-90">
                Unveiling the Infinity
            </h1>

            {/* origin content track */}
            <div className="origin-track absolute text-black left-0 top-0 flex flex-row w-full">
                {/* left col */}
                <div className="w-full space-y-12 max-w-130 origin-content-container-left-col flex flex-col">
                    <div className="w-full flex items-end h-200">
                        <p className=" font-satoshi text-sm leading-6 pl-10">
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
                            <h1 className="text-5xl font-ravello">
                                The <br/> 
                                <span className="text-9xl font-ravello">
                                    Collective
                                </span>
                            </h1>
                        </div>
                        <h2 className=" text-lg font-satoshi font-bold">
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
                <div className="w-full space-y-12 max-w-130 origin-content-container-right-col flex flex-col">
                    <div className="w-full flex justify-end">
                        <img
                            className="w-110"
                            src={img_1}
                            alt="origin image 1"
                        />
                    </div>
                    <div className="w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-descirption-title text-right text-5xl font-ravello">
                                The <br/> 
                                <span className="text-9xl font-ravello">
                                    Philosophy
                                </span>
                            </h1>
                        </div>
                        <h2 className="text-lg font-satoshi font-bold">
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
                            <h1 className="text-5xl font-ravello text-right">
                                Looking<br/> 
                                <span className="text-9xl font-ravello">
                                    Beyond
                                </span>
                            </h1>
                        </div>
                        <h2 className="text-lg font-satoshi font-bold">
                            The journey has only begun.
                        </h2>
                        <p className="origin-description leading-6 text-sm font-satoshi">
                            Infinity Artverse is not defined by what has already been created, but by the possibilities that remain undiscovered. Every project becomes another step toward expanding the universe we continue to imagine. As new ideas emerge and new stories are told, our commitment remains unchanged—to explore beyond convention, create without boundaries, and inspire others to see the infinite within their own imagination.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeExperience;