import LogoImg from "../../../assets/logo/logo_1.png"

const Landing = () => {

    return (
        <div className="landing overflow-hidden relative z-10 w-full h-full flex flex-col items-start justify-around text-white">

            <div className="landing-content-container ml-20 -space-x-55 flex flex-row">
                {/* Infinity */}
                <div className="left-landing-content-column flex flex-col pt-20">
                    <p className="landing-paragraph text-left font-satoshi max-w-xs text-gray-300 text-sm">
                        It is the freedom to keep exploring, discovering, and creating beyond what is already known. Infinity is not about reaching an end, but continuing beyond it.
                    </p>
                    <h1 className="landing-title text-right font-italianno w-100 text-left text-gray-300 text-9xl origin-center">
                        Infinity
                    </h1>
                    <p className="landing-paragraph font-satoshi text-left max-w-xs text-gray-300 text-sm">
                        Infinity represents the belief that creativity has no final form. An idea does not have to belong to one medium, one style, or one definition. It can begin as a thought, become an image, evolve into a story, transform into sound, or take a shape that was never imagined at the beginning. For us, infinity is the freedom to keep exploring—to create without placing a boundary around what something should become.
                    </p>
                </div>
                {/* logo */}
                <div className="landing-logo-container ml-10 flex overflow-hidden items-center justify-center">
                    <img src={LogoImg} alt="Logo" className="object-contain w-200" />
                </div>
                {/* Artverese */}
                <div className="right-landing-content-column items-end flex flex-col max-w-md w-full">
                    <p className="opacity-0 border-2 border-white h-25 landing-paragraph font-satoshi text-justify w-full text-gray-300 text-sm">
                        infinity
                    </p>
                    <p className="landing-paragraph font-satoshi pt-20 text-right w-full text-gray-300 max-w-xs text-sm">
                        Every work created within this universe becomes a small manifestation of something once unseen. Some begin with a feeling, some with a memory, some with a question, and others simply with the desire to create something that has never existed before. Together, these fragments form the Artverse—a constantly evolving collection of perspectives, stories, and experiences. It is not simply a place where art is made; it is a universe where imagination becomes tangible.
                    </p>
                    <h1 className="landing-title font-italianno text-left w-full text-gray-300 text-9xl origin-center">
                        Artverse
                    </h1>
                    <p className="landing-paragraph font-satoshi text-right w-full text-gray-300 text-sm max-w-xs">
                        Artverse is the universe where those endless possibilities take form. It brings together ideas, emotions, stories, and different creative disciplines in one evolving space.
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;