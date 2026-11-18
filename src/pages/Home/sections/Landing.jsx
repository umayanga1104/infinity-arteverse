import { Link } from "react-router-dom";
import LogoImg from "../../../assets/logo/logo_1.png"

const Landing = () => {

    return (
        <div className="landing overflow-hidden relative z-10 w-full h-full flex flex-col items-center justify-center bg-transparent text-black">
            <div className="md:hidden lg:hidden w-full max-w-xs landing-content-container-mobile flex flex-col space-y-4 items-center justify-center">
                <h1 className="landing-title text-left pr-10 font-italianno w-full text-8xl origin-center">
                    Infinity <br/> Artverse
                </h1>
                <p className="landing-title text-left pr-10 font-arima w-full text-xs origin-center">
                    Photography, film, branding and visual stories shaped by curiosity and the freedom to create without boundaries.
                </p>
                <div className="w-full max-w-xs gap-6 flex flex-row">
                    <Link to="/about" className="inline-block py-3 px-4 text-xs bg-white border-1 border-black w-auto self-start rounded-sm text-black font-arima">
                        See who we are
                    </Link>
                    <Link to="/projects" className="inline-block py-3 px-4 text-xs bg-black w-auto self-start rounded-sm text-white font-arima">
                        See what we create
                    </Link>
                </div>
            </div>

            <div className="hidden md:flex lg:flex landing-content-container lg:mx-20 md:mx-20 lg:space-x-55 flex-row">
                {/* Infinity */}
                <div className="left-landing-content-column flex flex-col pt-20">
                    <p className="landing-paragraph text-left font-arima md:max-w-50 lg:max-w-xs text-black lg:text-sm md:text-xs">
                        It is the freedom to keep exploring, discovering, and creating beyond what is already known. Infinity is not about reaching an end, but continuing beyond it.
                    </p>
                    <h1 className="landing-title lg:text-right md:text-center font-italianno w-100 text-black md:text-8xl lg:text-9xl origin-center">
                        Infinity
                    </h1>
                    <p className="landing-paragraph font-arima text-left md:max-w-50 lg:max-w-xs text-black md:text-xs lg:text-sm">
                        Infinity represents the belief that creativity has no final form. An idea does not have to belong to one medium, one style, or one definition. It can begin as a thought, become an image, evolve into a story, transform into sound, or take a shape that was never imagined at the beginning. For us, infinity is the freedom to keep exploring—to create without placing a boundary around what something should become.
                    </p>
                </div>
                {/* logo */}
                {/* <div className="landing-logo-container lg:ml-10 md:mt-30 lg:mt-0 md:pr-25 flex overflow-hidden  items-center justify-center">
                    <img src={LogoImg} alt="Logo" className="object-contain lg:w-400 md:w-200" />
                </div> */}
                {/* Artverese */}
                <div className="right-landing-content-column items-end flex flex-col w-full">
                    <p className="opacity-0 md:hidden lg:display border-2 border-white h-25 landing-paragraph font-arima text-justify w-full text-black md:text-xs lg:text-sm">
                        infinity
                    </p>
                    <p className="landing-paragraph font-arima pt-20 text-right w-full text-black md:max-w-50 lg:max-w-xs md:text-xs lg:text-sm">
                        Every work created within this universe becomes a small manifestation of something once unseen. Some begin with a feeling, some with a memory, some with a question, and others simply with the desire to create something that has never existed before. Together, these fragments form the Artverse—a constantly evolving collection of perspectives, stories, and experiences. It is not simply a place where art is made; it is a universe where imagination becomes tangible.
                    </p>
                    <h1 className="landing-title font-italianno text-left w-full text-black md:text-8xl lg:text-9xl origin-center">
                        Artverse
                    </h1>
                    <p className="landing-paragraph font-arima text-right w-full text-black md:text-xs lg:text-sm md:max-w-50 lg:max-w-xs">
                        Artverse is the universe where those endless possibilities take form. It brings together ideas, emotions, stories, and different creative disciplines in one evolving space.
                    </p>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;