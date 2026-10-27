// All copies share the same content and layout.
const AboutUsContentSection = () => {
    return (
        <div className="w-full flex flex-col bg-white items-center gap-10 relative">

            {/* Main heading */}
            <h1 className="font-ravello text-black text-8xl pt-8">
                Who We Are
            </h1>

            <div className="w-full px-40 gap-7 flex flex-col text-black">

                {/* 1 */}
                <div className="flex flex-col gap-2">
                    <div className="overflow-hidden">
                        <h1 className="about-us-content-titles font-ravello max-w-3xl w-full pr-20 text-black text-8xl">
                            Behind the Frames
                        </h1>
                    </div>

                    <p className="about-us-content-paragraphs font-satoshi max-w-3xl w-full pl-70 text-sm">
                        Every finished creation has a story that exists
                        beyond the final image. Reveal the experiments,
                        late nights, unexpected challenges, discarded ideas,
                        and little moments that shaped your projects.
                    </p>

                    <p className="about-us-content-quotes font-italianno max-w-3xl w-full pr-60 text-2xl">
                        “What you see is only a fragment of what it took
                        to bring it to life.”
                    </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col gap-2 items-end">
                    <div className="overflow-hidden">
                        <h1 className="about-us-content-titles font-ravello max-w-3xl w-full pr-20 text-black text-8xl">
                            The Making Process
                        </h1>
                    </div>

                    <p className="about-us-content-paragraphs font-satoshi pl-70 text-sm max-w-3xl w-full">
                        Show how an idea travels from a rough thought to
                        a completed creation. Explore concept development,
                        visual experimentation, production, editing, and
                        the details that give each project its identity.
                    </p>

                    <p className="about-us-content-quotes font-italianno pr-60 text-2xl max-w-3xl w-full">
                        “What you see is only a fragment of what it took
                        to bring it to life.”
                    </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-2">
                    <div className="overflow-hidden">
                        <h1 className="about-us-content-titles font-ravello max-w-3xl w-full pr-20 text-black text-8xl">
                            The People Behind It
                        </h1>
                    </div>

                    <p className="about-us-content-paragraphs font-satoshi max-w-3xl w-full pl-70 text-sm">
                        Introduce the actual members and collaborators
                        who bring the Artverse to life. Include their
                        roles, creative disciplines, individual
                        contributions, and selected work. Make it personal
                        rather than presenting a conventional corporate
                        team page.
                    </p>

                    <p className="about-us-content-quotes font-italianno max-w-3xl w-full pr-60 text-2xl">
                        “Every perspective adds another dimension
                        to the universe.”
                    </p>
                </div>

                {/* 4 */}
                <div className="flex flex-col gap-2 items-end">
                    <div className="overflow-hidden">
                        <h1 className="about-us-content-titles font-ravello max-w-3xl w-full pr-20 text-black text-8xl">
                            The Archive
                        </h1>
                    </div>

                    <p className="about-us-content-paragraphs font-satoshi max-w-3xl w-full pl-70 text-sm">
                        Create a collection of fragments from your journey:
                        early concepts, unused frames, sketches, visual
                        tests, behind-the-scenes photographs, and small
                        details that might otherwise remain unseen.
                    </p>

                    <p className="about-us-content-quotes font-italianno max-w-3xl w-full pr-60 text-2xl">
                        “Not every fragment becomes a finished work,
                        but every fragment leaves something behind.”
                    </p>
                </div>

                {/* 5 */}
                <div className="flex flex-col gap-2">
                    <div className="overflow-hidden">
                        <h1 className="about-us-content-titles font-ravello max-w-3xl w-full pr-20 text-black text-8xl">
                            An Evolving Practice
                        </h1>
                    </div>

                    <p className="about-us-content-paragraphs font-satoshi max-w-3xl w-full pl-70 text-sm">
                        Show how Infinity Artverse is developing through
                        new techniques, collaborations, and creative
                        experiments. Focus on what you are currently
                        exploring and making, rather than repeating your
                        long-term vision from the Origin page.
                    </p>

                    <p className="about-us-content-quotes font-italianno max-w-3xl w-full pr-60 text-2xl">
                        The work evolves, the methods change, and the
                        exploration continues.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutUsContentSection;