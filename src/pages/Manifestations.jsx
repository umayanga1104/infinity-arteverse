const Manifestations = ({artefacts}) => {
    return (
        <div className="manifestations relative z-40 w-full h-full flex flex-col items-start justify-center bg-transparent text-white">
            {/* <StarFieldCanvas/> */}
            <div className="manifestations-left-panel flex flex-col pl-40">
                <div className="title-container overflow-hidden">
                    <h1 className="manifestations-title text-7xl font-light font-ravello leading-snug mb-10">
                        Manifestations<br />of Infinity
                    </h1>
                </div>

                <ul className="manifestations-projects font-sm text-white font-satoshi">
                    {Object.keys(artefacts).map((name) => (
                        <li key={name}>
                            {name.toLowerCase().replace(/_/g, ' ')}
                        </li>
                    ))}
                </ul>
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
    );
}

export default Manifestations;