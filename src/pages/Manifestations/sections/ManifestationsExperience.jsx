const ManifestationsExperience = ({ artefacts, onProjectClick, onBack, activeProject }) => {
    return (
        <div className="manifestations relative z-40 w-full h-full flex flex-col items-start justify-center bg-white text-white">
            {/* project list */}
            <div className="manifestations-left-panel absolute mt-10 lg:mt-0 ml-5 top-0 left:5 md:left-10 lg:left-10 flex flex-col">
                <div className="title-container overflow-hidden">
                    <h1 className="manifestations-title text-black text-5xl md:text-6xl lg:text-8xl font-light font-cormorant leading-snug mb-10">
                        Manifestations
                    </h1>
                </div>

                <ul className="manifestations-projects max-w-35 leading-relaxed w-full text-black text-xs md:text-xs lg:text-sm font-arima">
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
            <div className="manifestation-info-panel absolute mt-5 md:mt-15 lg:mt-15 lg:mt-0 ml-0 md:ml-5 lg:ml-5 top-0 left-5 md:left-10 lg:left-10 flex flex-col">
                <div className="title-container overflow-hidden">
                    <h1 className="manifestations-title text-black text-5xl md:text-6xl lg:text-8xl font-light font-cormorant leading-snug mb-10">
                        {activeProject?.details.title}
                    </h1>
                </div>

                <div className="md:max-w-md lg:max-w-xl space-y-5 leading-relaxed w-full text-black text-xs md:text-xs lg:text-sm font-arima pr-10 md:pr-0 lg:pr-0">
                    <div className="project-description">
                        {activeProject?.details.shortDescription}
                    </div>
                    <div className="type-and-collab-stat flex flex-col">
                        <p className="project-type flex flex-row">
                            Type: <span className="md:text-xs lg:text-sm font-arima ml-4">{activeProject?.details.type.join(", ")}</span>
                        </p>
                        <p className={`collaborations ${activeProject?.details.collaboration.isCollaboration ? "flex" : "hidden"}`}>
                            Collaborations: <span className="md:text-xs lg:text-sm font-arima">{activeProject?.details.collaboration.partner.join(" | ")}</span>
                        </p>
                    </div>
                    <ul className={`credits grid gap-x-4 ${
                        activeProject?.details.credits.length > 5 
                        ? 'grid-cols-2' 
                        : 'grid-cols-1'
                    }`}>
                        {activeProject?.details.credits.map((credit, index) => (
                            <li key={index} className="credit-item flex flex-row">
                                <span className="credit-role font-bold">{credit.role}</span>: 
                                <span className="credit-name md:text-xs lg:text-sm font-arima ml-1">{credit.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <button 
                        className="md:text-xs lg:text-sm font-arima cursor-pointer text-black font-bold mt-10" 
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
                            artefact.refs.cards[i] = el
                        }}
                    >
                        <img
                            src={img.image}
                            alt={img.alt}
                            className="lg:w-60 md:w-50 w-50 object-cover shadow-lg rounded-sm select-none"
                            draggable={false}
                        />
                    </div>
                ))
            ))}
        </div>
    );
}

export default ManifestationsExperience;