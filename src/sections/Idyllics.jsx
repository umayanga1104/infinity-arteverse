import IceBlinkImage  from '../assets/idyllic/ice_blink.webp';
import YarnImage      from '../assets/idyllic/yarn.webp';
import FeelImage      from '../assets/idyllic/feel.webp';
import NostalgiaImage from '../assets/idyllic/nostalgia.webp';
import TimelessImage  from '../assets/idyllic/timeless.webp';

const Idyllics = () => {
    return (
        <div className="idyllics overflow-hidden relative z-20 w-full h-full flex items-center justify-center overflow-hidden bg-gray-100 text-black">
            <div className="idyllics-title-container flex w-[50vw] shrink-0 h-150 items-start justify-center">
                <h2 className="idyllics-title font-ravello mt-15 text-center w-full text-black text-8xl">
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
                            <h2 className='idyllic-name text-3xl text-black font-ravello'>
                                Ice Blink <br/>
                                <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                    The Path of Reflection
                                </span>
                            </h2>
                        </div>
                        {/* description */}
                        <p className='idyllics-description text-sm text-black mt-2 leading-loose'>
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
                            <h2 className='idyllic-name text-3xl text-black font-ravello'>
                                Nostalgia <br/>
                                <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                    The Path of Memory
                                </span>
                            </h2>
                        </div>
                        {/* description */}
                        <p className='idyllics-description text-sm text-black mt-2 leading-loose'>
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
                            <h2 className='idyllic-name text-3xl text-black font-ravello'>
                                Feel <br/>
                                <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                    The Path of Emotion
                                </span>
                            </h2>
                        </div>
                        {/* description */}
                        <p className='idyllics-description text-sm text-black mt-2 leading-loose'>
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
                            <h2 className='idyllic-name text-3xl text-black font-ravello'>
                                Timeless <br/>
                                <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                    The Path of Discovery
                                </span>
                            </h2>
                        </div>
                        {/* description */}
                        <p className='idyllics-description text-sm text-black mt-2 leading-loose'>
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
                            <h2 className='idyllic-name text-3xl text-black font-ravello'>
                                Yearn <br/>
                                <span className='text-lg text-[#5A5A5A] font-satoshi'> 
                                    The Path of Identity
                                </span>
                            </h2>
                        </div>
                        {/* description */}
                        <p className='idyllics-description text-sm text-black mt-2 leading-loose'>
                            Yearn is the fifth and final idyllic path, embodying the human desire to create, grow, and leave a lasting mark. It represents the pursuit of individuality and purpose, transforming aspirations into distinctive identities. Through branding and visual storytelling, this path helps ideas evolve into something uniquely their own.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Idyllics;