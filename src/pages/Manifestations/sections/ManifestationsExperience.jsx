const ManifestationsExperience = ({ artefacts, onProjectClick, onBack, activeProject }) => {
    return (
        <div className="manifestations relative z-40 w-full h-full flex flex-col items-start justify-center bg-white text-white">
            {/* project list */}
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
                            artefact.refs.cards[i] = el
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
    );
}

export default ManifestationsExperience;