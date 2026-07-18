import img_1 from "../assets/origin/img_1.webp"
import img_2 from "../assets/origin/img_2.webp"
import img_3 from "../assets/origin/img_3.webp"
import img_4 from "../assets/origin/img_4.webp"
import img_5 from "../assets/origin/img_5.webp"

const Origin = () => {
    return (
        <div className="origin flex overflow-hidden justify-center relative z-30 w-full h-full bg-black text-white">
            {/* <StarFieldCanvas/> */}
            <h1 className="origin-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-ravello text-center text-white text-7xl z-50">
                Unveiling the Infinity
            </h1>

            {/* origin data container */}
            <div className="origin-info-container flex flex-col space-y-16 w-full max-w-5xl">
                {/* para 1 */}
                <div className="origin-info-container w-full space-x-28 flex flex-row justify-center items-center">
                    <div className="origin-info-title w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-descirption-title text-5xl font-ravello">
                                The <br/> 
                                <span className="text-9xl font-ravello">
                                    Beginning
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-descirption-title-description text-lg font-satoshi font-bold">
                            Every universe begins with a single idea.
                        </h2>
                        <p className="origin-info-description leading-6 text-sm font-satoshi">
                            Infinity Artverse began with a simple belief—that creativity should never be confined by a single medium, style, or perspective. What started as a passion for creating visual experiences gradually evolved into a universe where photography, cinematography, branding, and storytelling coexist under one artistic identity. Rather than following trends, we chose to build a space where imagination could lead every decision and every creation.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src={img_1}
                            alt="image 1"
                            className="origin-img object-cover h-70"
                        />
                    </div>
                </div>

                {/* para 2 */}
                <div className="origin-info-container w-full space-x-8 flex flex-row justify-center items-center">
                    <div className="w-full flex justify-center">
                        <img
                            src={img_2}
                            alt="image 2"
                            className="origin-img h-70 object-cover"
                        />
                    </div>
                    <div className="origin-info-title w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-descirption-title text-right text-7xl font-ravello">
                                What We <br/>
                                <span className="text-9xl font-ravello">
                                    Create
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-descirption-title-description text-md font-satoshi font-bold">
                            More than visuals. We create experiences.
                        </h2>
                        <p className="origin-info-description leading-6 text-sm font-satoshi">
                            Our work extends beyond producing images or videos. Every project is approached as an opportunity to craft an experience that communicates emotion, purpose, and identity. Whether through photography that preserves moments, cinematography that tells stories, branding that shapes perception, or visual experimentation that explores new ideas, each creation is designed to leave a lasting impression.
                        </p>
                    </div>
                </div>

                {/* para 3 */}
                <div className="origin-info-container w-full space-x-8 flex flex-row justify-center items-center">
                    <div className="origin-info-title w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-descirption-title text-7xl font-ravello">
                                The <br/>
                                <span className="text-9xl font-ravello">
                                    Philosophy
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-descirption-title-description text-md font-satoshi font-bold">
                            Guided by imagination. Driven by purpose.
                        </h2>
                        <p className="origin-info-description leading-6 text-sm font-satoshi">
                            At the heart of Infinity Artverse lies a philosophy of exploration. We believe creativity grows when curiosity is embraced and limitations are challenged. Every project becomes a journey of discovery, where ideas are refined through collaboration, experimentation, and thoughtful design. It is this pursuit of meaningful expression that continues to shape the Artverse and everything created within it.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src={img_3}
                            alt="image 3"
                            className="origin-img h-70 object-cover"
                        />
                    </div>
                </div>

                {/* para 4 */}
                <div className="origin-info-container w-full space-x-8 flex flex-row justify-center items-center">
                    <div className="w-full flex justify-center">
                        <img
                            src={img_4}
                            alt="image 4"
                            className="origin-img h-70 object-cover"
                        />
                    </div>
                    <div className="origin-info-title w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-descirption-title text-right text-7xl font-ravello">
                                The <br/>
                                <span className="text-9xl font-ravello">
                                    Collective
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-descirption-title-description text-md font-satoshi font-bold">
                            Built by people who believe in creation.
                        </h2>
                        <p className="origin-info-description leading-6 text-sm font-satoshi">
                            Behind every manifestation is a team brought together by a shared passion for creativity. Each member contributes a unique perspective, allowing different disciplines to merge into one unified vision. By combining individual strengths with collaborative thinking, Infinity Artverse continues to grow as a creative collective where ideas are transformed into experiences that inspire and connect.
                        </p>
                    </div>
                </div>

                {/* para 5 */}
                <div className="origin-info-container w-full space-x-8 flex flex-row justify-center items-center">
                    <div className="origin-info-title w-full flex flex-col space-y-4">
                        <div className="overflow-hidden">
                            <h1 className="origin-descirption-title text-7xl font-ravello">
                                Looking <br/>
                                <span className="text-9xl font-ravello">
                                    Beyond
                                </span>
                            </h1>
                        </div>
                        <h2 className="origin-descirption-title-description text-md font-satoshi font-bold">
                            The journey has only begun.
                        </h2>
                        <p className="origin-info-description leading-6 text-sm font-satoshi">
                            Infinity Artverse is not defined by what has already been created, but by the possibilities that remain undiscovered. Every project becomes another step toward expanding the universe we continue to imagine. As new ideas emerge and new stories are told, our commitment remains unchanged—to explore beyond convention, create without boundaries, and inspire others to see the infinite within their own imagination.
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src={img_5}
                            alt="image 5"
                            className="origin-img object-cover h-70"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Origin;