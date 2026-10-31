import { useEffect } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/logo/logo_1.png";
import originImageOne from "../assets/origin/img_1.webp";
import originImageTwo from "../assets/origin/img_2.webp";
import originImageThree from "../assets/origin/img_3.webp";
import { Artefacts } from "../data/artefacts";
import "./MobileSite.css";

const navigation = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
];

const featuredWork = [
    Artefacts.capturing_Affection,
    Artefacts.anantasakha,
    Artefacts.yannemi,
];

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/infinityartverse/", mark: "ig" },
    { label: "Facebook", href: "https://www.facebook.com/infinityartverse", mark: "f" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/infinity-artverse/", mark: "in" },
];

function MobileHeader({ currentPath }) {
    return (
        <header className="mobile-header">
            <div className="mobile-header__inner">
                <Link className="mobile-brand" to="/" aria-label="Infinity Artverse home">
                    <img className="mobile-brand__logo" src={LogoImg} alt="" />
                    <span className="mobile-brand__name">
                        <span>INFINITY</span>
                        <span>ARTVERSE</span>
                    </span>
                </Link>

                <nav className="mobile-navigation" aria-label="Main navigation">
                    {navigation.map(({ label, path }) => (
                        <Link
                            key={path}
                            aria-current={currentPath === path ? "page" : undefined}
                            className={`mobile-navigation__link${currentPath === path ? " is-active" : ""}`}
                            to={path}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

function MobileFooter() {
    return (
        <footer className="mobile-footer">
            <Link className="mobile-footer__wordmark" to="/" aria-label="Infinity Artverse home">
                Infinity <span>Artverse</span>
            </Link>
            <p className="mobile-footer__statement">
                Every manifestation begins with imagination.
                <br />
                Every journey begins with a single idea.
            </p>
            <div className="mobile-footer__bottom">
                <span>© 2026 Infinity Artverse</span>
                <div className="mobile-footer__socials" aria-label="Social media">
                    {socialLinks.map(({ label, href, mark }) => (
                        <a
                            key={label}
                            aria-label={label}
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <span aria-hidden="true">{mark}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

function SectionLabel({ children, light = false }) {
    return (
        <p className={`mobile-eyebrow${light ? " mobile-eyebrow--light" : ""}`}>
            <span aria-hidden="true" />
            {children}
        </p>
    );
}

function MobileHome() {
    return (
        <main className="mobile-page">
            <section className="mobile-home-hero">
                <div className="mobile-home-hero__copy">
                    <SectionLabel light>Independent creative collective · Sri Lanka</SectionLabel>
                    <h1>
                        A universe for
                        <br />
                        <em>the unseen.</em>
                    </h1>
                    <p>
                        Photography, film, branding and visual stories shaped by
                        curiosity—and the freedom to create without boundaries.
                    </p>
                    <a className="mobile-text-link" href="#selected-work">
                        Explore selected work
                        <ArrowDown aria-hidden="true" size={16} />
                    </a>
                </div>
                <div className="mobile-home-hero__art" aria-hidden="true">
                    <span className="mobile-home-hero__orbit mobile-home-hero__orbit--one" />
                    <span className="mobile-home-hero__orbit mobile-home-hero__orbit--two" />
                    <img src={LogoImg} alt="" />
                    <span className="mobile-home-hero__caption">Imagination, made tangible.</span>
                </div>
                <a className="mobile-scroll-cue" href="#our-world">
                    <span>Scroll to explore</span>
                    <ArrowDown aria-hidden="true" size={15} />
                </a>
            </section>

            <section className="mobile-section mobile-intro" id="our-world">
                <SectionLabel>Beyond a single medium</SectionLabel>
                <h2>
                    Creativity has
                    <br />
                    <em>no final form.</em>
                </h2>
                <p>
                    Infinity Artverse brings different creative disciplines
                    together in one evolving space. An idea might begin as a
                    feeling, become an image, grow into a story, and find a form
                    no one expected.
                </p>
                <Link className="mobile-text-link" to="/about">
                    Discover who we are
                    <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
            </section>

            <section className="mobile-section mobile-work" id="selected-work">
                <div className="mobile-section__heading">
                    <div>
                        <SectionLabel light>Fragments of the Artverse</SectionLabel>
                        <h2>Selected <em>work</em></h2>
                    </div>
                    <span className="mobile-section__index">01 — 03</span>
                </div>
                <div className="mobile-work-grid">
                    {featuredWork.map((project, index) => {
                        const cover = project.images[0];

                        return (
                            <article className="mobile-work-card" key={project.details.title}>
                                <div className="mobile-work-card__image">
                                    <img
                                        alt={cover.alt}
                                        loading="lazy"
                                        src={cover.image}
                                    />
                                    <span>0{index + 1}</span>
                                </div>
                                <p className="mobile-work-card__category">
                                    {project.details.category}
                                </p>
                                <h3>{project.details.title}</h3>
                                <p className="mobile-work-card__description">
                                    {project.details.shortDescription}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="mobile-section mobile-paths">
                <SectionLabel>The creative language</SectionLabel>
                <h2>Five paths.<br /><em>Endless ways to see.</em></h2>
                <div className="mobile-path-list">
                    {[
                        ["01", "Ice Blink", "The path of reflection"],
                        ["02", "Nostalgia", "The path of memory"],
                        ["03", "Feel", "The path of emotion"],
                        ["04", "Timeless", "The path of discovery"],
                        ["05", "Yearn", "The path of identity"],
                    ].map(([number, name, subtitle]) => (
                        <div className="mobile-path" key={name}>
                            <span>{number}</span>
                            <h3>{name}</h3>
                            <p>{subtitle}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CallToAction />
        </main>
    );
}

function MobileAbout() {
    return (
        <main className="mobile-page">
            <section className="mobile-about-hero">
                <SectionLabel>Who we are</SectionLabel>
                <h1>
                    Built from
                    <br />
                    <em>possibility.</em>
                </h1>
                <p>
                    We are a creative collective where photography,
                    cinematography, branding and storytelling meet.
                </p>
                <img
                    alt="A glimpse into the Infinity Artverse creative world"
                    fetchPriority="high"
                    src={originImageOne}
                />
            </section>

            <section className="mobile-section mobile-about-story">
                <SectionLabel>Our beginning</SectionLabel>
                <h2>An idea without <em>boundaries.</em></h2>
                <p>
                    Infinity Artverse began with a simple belief: creativity
                    should never be confined to a single medium, style or
                    perspective. What started as a passion for creating visual
                    experiences grew into a universe where photography,
                    cinematography, branding and storytelling coexist.
                </p>
                <figure>
                    <img
                        alt="Creative work from the Infinity Artverse portfolio"
                        loading="lazy"
                        src={originImageTwo}
                    />
                    <figcaption>One idea can take many forms.</figcaption>
                </figure>
            </section>

            <section className="mobile-section mobile-about-practice">
                <SectionLabel light>How we make</SectionLabel>
                <h2>Curiosity into <em>creation.</em></h2>
                <p>
                    Every project is a journey of discovery. We explore,
                    experiment and collaborate until an idea becomes an
                    experience that feels its own.
                </p>
                <div className="mobile-about-practice__image">
                    <img
                        alt="An expressive visual study from the studio"
                        loading="lazy"
                        src={originImageThree}
                    />
                </div>
                <ul>
                    <li>Photography &amp; moving image</li>
                    <li>Visual identity &amp; branding</li>
                    <li>Concepts &amp; creative direction</li>
                    <li>Stories made to be felt</li>
                </ul>
            </section>

            <CallToAction />
        </main>
    );
}

function MobileContact() {
    return (
        <main className="mobile-page mobile-contact">
            <section className="mobile-contact-hero">
                <SectionLabel>Every good thing starts somewhere</SectionLabel>
                <h1>
                    Let’s make
                    <br />
                    <em>something matter.</em>
                </h1>
                <p>
                    Have a story, a spark or a collaboration in mind? We’d love
                    to hear what you’re imagining.
                </p>
                <a className="mobile-contact-email" href="mailto:hello@infinityartverse.com">
                    hello@infinityartverse.com
                    <ArrowUpRight aria-hidden="true" size={20} />
                </a>
            </section>

            <section className="mobile-contact-details" aria-label="Contact details">
                <div>
                    <SectionLabel>Find us</SectionLabel>
                    <p>Sri Lanka</p>
                    <a href="tel:+94710184698">+94 71 018 4698</a>
                </div>
                <div>
                    <SectionLabel>Follow the journey</SectionLabel>
                    <div className="mobile-contact-socials">
                        {socialLinks.map(({ label, href }) => (
                            <a href={href} key={label} rel="noopener noreferrer" target="_blank">
                                {label}
                                <ArrowUpRight aria-hidden="true" size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function CallToAction() {
    return (
        <section className="mobile-cta">
            <SectionLabel light>A new idea starts here</SectionLabel>
            <h2>Let’s create<br /><em>what comes next.</em></h2>
            <Link className="mobile-text-link" to="/contact">
                Get in touch
                <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
        </section>
    );
}

export default function MobileSite() {
    const { pathname } = useLocation();
    const currentPath = pathname.replace(/\/+$/, "") || "/";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPath]);

    const page = currentPath === "/about"
        ? <MobileAbout />
        : currentPath === "/contact"
            ? <MobileContact />
            : currentPath === "/"
                ? <MobileHome />
                : (
                    <main className="mobile-page mobile-not-found">
                        <SectionLabel>Infinity Artverse</SectionLabel>
                        <h1>This path<br /><em>is still unfolding.</em></h1>
                        <Link className="mobile-text-link" to="/">
                            Return home
                            <ArrowUpRight aria-hidden="true" size={16} />
                        </Link>
                    </main>
                );

    return (
        <div className="mobile-site">
            <MobileHeader currentPath={currentPath} />
            {page}
            <MobileFooter />
        </div>
    );
}