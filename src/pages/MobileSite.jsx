import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/logo/logo_1.png";
import originImageOne from "../assets/origin/img_1.webp";
import originImageTwo from "../assets/origin/img_2.webp";
import originImageThree from "../assets/origin/img_3.webp";
import iceBlinkImage from "../assets/idyllic/ice_blink.webp";
import nostalgiaImage from "../assets/idyllic/nostalgia.webp";
import feelImage from "../assets/idyllic/feel.webp";
import timelessImage from "../assets/idyllic/timeless.webp";
import yearnImage from "../assets/idyllic/yarn.webp";
import FlowFieldCanvas from "../canvases/FlowFieldCanvas";
import { Artefacts } from "../data/artefacts";

const siteClass = "min-h-screen overflow-x-clip bg-[#010207] font-satoshi text-white";
const pageClass = "min-h-[60vh] [&_p]:leading-[1.8]";
const sectionClass = "px-6 py-[88px] min-[560px]:px-[max(40px,calc((100%-680px)/2))]";
const headingClass = "m-0 font-ravello font-normal";
const textLinkClass = "mt-[27px] inline-flex min-h-11 items-center gap-3 text-xs tracking-[0.12em] text-[#f0e9dd] transition-[gap,color] duration-[180ms] hover:gap-[18px] hover:text-white motion-reduce:transition-none";

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

const idyllicPaths = [
    {
        name: "Ice Blink",
        path: "The path of reflection",
        description: "Photography preserves fleeting moments as reflections that continue to illuminate the journey.",
        image: iceBlinkImage,
    },
    {
        name: "Nostalgia",
        path: "The path of memory",
        description: "Videography turns meaningful memories into stories that can be experienced again.",
        image: nostalgiaImage,
    },
    {
        name: "Feel",
        path: "The path of emotion",
        description: "Creative expression transforms thoughts and feelings into visual experiences.",
        image: feelImage,
    },
    {
        name: "Timeless",
        path: "The path of discovery",
        description: "Experimentation uncovers fresh perspectives and creates work that outlasts trends.",
        image: timelessImage,
    },
    {
        name: "Yearn",
        path: "The path of identity",
        description: "Branding gives aspirations a distinct identity and a lasting creative presence.",
        image: yearnImage,
    },
];

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.8V21h3.7Z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.2 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10.5H3.5V10Zm5.5 0h3.3v1.4h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.2v5.7h-3.4v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.1H9V10Z" />
        </svg>
    );
}

const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/infinityartverse/", Icon: InstagramIcon },
    { label: "Facebook", href: "https://www.facebook.com/infinityartverse", Icon: FacebookIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/infinity-artverse/", Icon: LinkedInIcon },
];

function MobileHeader({ currentPath, isVisible }) {
    return (
        <header className={`fixed inset-x-0 top-0 z-20 border-b border-white/15 bg-[#010207]/[0.88] backdrop-blur-[18px] transition-transform duration-300 ease-out motion-reduce:transition-none ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="mx-auto flex min-h-[68px] w-[min(calc(100%-36px),620px)] items-center justify-between gap-4 min-[560px]:min-h-[76px] min-[560px]:w-[min(calc(100%-64px),760px)]">
                <Link className="inline-flex shrink-0 items-center gap-2" to="/" aria-label="Infinity Artverse home">
                    <img className="size-[30px] object-contain" src={LogoImg} alt="" />
                </Link>

                <nav className="flex font-satoshi items-center gap-[clamp(10px,4vw,23px)]" aria-label="Main navigation">
                    {navigation.map(({ label, path }) => (
                        <Link
                            key={path}
                            aria-current={currentPath === path ? "page" : undefined}
                            className={`py-2.5 text-xs font-satoshi transition-colors duration-[180ms] hover:text-white motion-reduce:transition-none ${currentPath === path ? "text-white after:mt-[5px] after:block after:h-px after:bg-[#d3c8b3] after:content-['']" : "text-white/60"}`}
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
        <footer className="border-t border-white/15 bg-[#010207] px-6 pt-[39px] pb-6 min-[560px]:px-[max(40px,calc((100%-680px)/2))]">
            <Link className={`${headingClass} flex flex-col text-4xl leading-[0.9]`} to="/" aria-label="Infinity Artverse home">
                Infinity <span className="text-[#c5b79e]">Artverse</span>
            </Link>
            <p className="mt-[17px] mb-[29px] text-xs leading-[1.8] text-white/60">
                Every manifestation begins with imagination.
                <br />
                Every journey begins with a single idea.
            </p>
            <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-[15px] text-xs text-white/45">
                <span>© 2026 Infinity Artverse</span>
                <div className="flex items-center gap-[15px]" aria-label="Social media">
                    {socialLinks.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            className="inline-flex size-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5b79e] motion-reduce:transition-none"
                            aria-label={label}
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Icon aria-hidden="true" className="size-[18px]" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

function SectionLabel({ children, light = false }) {
    return (
        <p className={`mb-5 font-italianno flex items-center gap-[9px] text-xs  ${light ? "text-white/60" : "text-[#76766f]"}`}>
            {/* <span className="h-px w-[18px] bg-[#a68f6e]" aria-hidden="true" /> */}
            {children}
        </p>
    );
}

function MobileHome() {
    return (
        <main className={pageClass}>
            <section className="relative isolate flex min-h-[min(760px,calc(100svh-68px))] flex-col justify-center overflow-hidden bg-[radial-gradient(ellipse_at_74%_48%,rgb(91_96_107_/_18%),transparent_48%)] px-6 pt-[78px] pb-20 min-[560px]:px-[max(40px,calc((100%-680px)/2))]">
                <FlowFieldCanvas fitToContainer />
                <div className="relative z-10 mx-auto w-full max-w-[480px]">
                    <h1 className={`${headingClass} max-w-[580px] text-5xl leading-[0.98] min-[560px]:text-6xl min-[760px]:text-7xl`}>
                        Infinity
                        Artverse
                    </h1>
                    <p className="mt-[22px] max-w-[390px] text-sm leading-[1.8] text-white/[0.68]">
                        Photography, film, branding and visual stories shaped by
                        curiosity and the freedom to create without boundaries.
                    </p>
                    <a className={textLinkClass} href="#selected-work">
                        Explore selected work
                        <ArrowDown aria-hidden="true" size={16} />
                    </a>
                </div>
                <a className="absolute right-6 bottom-[23px] font-satoshi inline-flex items-center gap-2 text-xs text-white/50" href="#our-world">
                    <span>Scroll to explore</span>
                    <ArrowDown className="animate-mobile-cue-bob motion-reduce:animate-none" aria-hidden="true" size={15} />
                </a>
            </section>

            <section className={`${sectionClass} bg-[#f0efe9] text-[#010207]`} id="our-world">
                <SectionLabel>Beyond a single medium</SectionLabel>
                <h2 className={`${headingClass} text-4xl min-[560px]:text-5xl`}>
                    Creativity has
                    <br />
                    <em className="font-normal text-[#8d795f]">no final form.</em>
                </h2>
                <p className="mt-[22px] font-satoshi max-w-[520px] text-sm text-[#565650]">
                    Infinity Artverse brings different creative disciplines
                    together in one evolving space. An idea might begin as a
                    feeling, become an image, grow into a story, and find a form
                    no one expected.
                </p>
                <Link className={`${textLinkClass} border-[#010207]/[0.35] text-[#010207] hover:text-[#010207]`} to="/about">
                    Discover who we are
                    <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
            </section>

            <section className={`${sectionClass} bg-[#15161a]`} id="selected-work">
                <div className="mb-[30px] flex items-end justify-between gap-3">
                    <div>
                        <SectionLabel light>Fragments of the Artverse</SectionLabel>
                        <h2 className={`${headingClass} text-4xl leading-[1.02] min-[560px]:text-5xl`}>Selected <em className="font-normal text-[#c5b79e]">work</em></h2>
                    </div>
                </div>
                <div className="grid gap-[30px] min-[560px]:grid-cols-2 min-[560px]:gap-x-[22px] min-[560px]:gap-y-8">
                    {featuredWork.map((project, index) => {
                        const cover = project.images[0];

                        return (
                            <article className={index === 2 ? "min-[560px]:col-span-full" : ""} key={project.details.title}>
                                <div className={`relative aspect-[1.28] overflow-hidden bg-[#292a2d] ${index === 2 ? "min-[560px]:aspect-[2/1]" : ""}`}>
                                    <img className="block size-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.2,0.65,0.25,1)] hover:scale-[1.035] motion-reduce:transition-none" alt={cover.alt} loading="lazy" src={cover.image} />
                                    <span className="absolute right-3 bottom-2.5 text-xs tracking-[0.15em] text-white [text-shadow:0_1px_8px_rgb(0_0_0_/_55%)]">0{index + 1}</span>
                                </div>
                                <p className="mt-[17px] font-satoshi mb-1.5 text-xs text-[#c5b79e]">
                                    {project.details.category}
                                </p>
                                <h3 className={`${headingClass} text-3xl`}>{project.details.title}</h3>
                                <p className="mt-2 font-satoshi text-sm text-white/[0.62]">
                                    {project.details.shortDescription}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className={`${sectionClass} bg-[#f0efe9] text-[#010207]`}>
                <SectionLabel>The creative language</SectionLabel>
                <h2 className={`${headingClass} text-4xl leading-[1.02] min-[560px]:text-5xl`}>Five paths.<br /><em className="font-normal text-[#8d795f]">Endless ways to see.</em></h2>
                <p className="mt-5 max-w-[520px] text-base text-[#565650]">
                    Idyllics are the five creative paths of Infinity Artverse.
                    Each offers its own point of view, guiding how ideas are
                    explored, expressed, and brought to life.
                </p>
                <div className="mt-8 grid gap-7 min-[560px]:grid-cols-2 min-[560px]:gap-x-5 min-[560px]:gap-y-9">
                    {idyllicPaths.map(({ name, path, description, image }) => (
                        <article key={name}>
                            <div className="relative flex aspect-[1.30] items-center justify-center overflow-hidden p-8">
                                {/* <span className="absolute top-3 left-4 text-xs tracking-[0.12em] text-[#8d795f]">
                                    0{index + 1}
                                </span> */}
                                <img
                                    className="size-full object-contain"
                                    src={image}
                                    alt={`${name} Idyllic artwork`}
                                    loading="lazy"
                                />
                            </div>
                            <h3 className={`${headingClass} mt-5 text-3xl`}>{name}</h3>
                            <p className="mt-1 font-italianno text-lg text-[#8d795f]">{path}</p>
                            <p className="mt-2 text-base text-[#565650]">{description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <CallToAction />
        </main>
    );
}

function MobileAbout() {
    return (
        <main className={pageClass}>
            <section className="bg-[radial-gradient(ellipse_at_85%_0%,rgb(91_96_107_/_18%),transparent_52%)] px-6 pt-[75px] min-[560px]:px-[max(40px,calc((100%-680px)/2))]">
                <SectionLabel>Who we are</SectionLabel>
                <h1 className={`${headingClass} max-w-[580px] text-5xl leading-[0.98] min-[560px]:text-6xl min-[760px]:text-7xl`}>
                    Built from
                    <br />
                    <em className="font-normal text-[#c5b79e]">possibility.</em>
                </h1>
                <p className="mt-[22px] mb-8 max-w-[390px] text-sm text-white/[0.68]">
                    We are a creative collective where photography,
                    cinematography, branding and storytelling meet.
                </p>
                <img
                    className="block max-h-[420px] w-full aspect-[1.18] object-cover object-[center_42%]"
                    alt="A glimpse into the Infinity Artverse creative world"
                    fetchPriority="high"
                    src={originImageOne}
                />
            </section>

            <section className={`${sectionClass} bg-[#f0efe9] text-[#010207]`}>
                <SectionLabel>Our beginning</SectionLabel>
                <h2 className={`${headingClass} max-w-[470px] text-4xl leading-[1.02] min-[560px]:text-5xl`}>An idea without <em className="font-normal text-[#8d795f]">boundaries.</em></h2>
                <p className="mt-[22px] max-w-[520px] text-sm text-[#565650]">
                    Infinity Artverse began with a simple belief: creativity
                    should never be confined to a single medium, style or
                    perspective. What started as a passion for creating visual
                    experiences grew into a universe where photography,
                    cinematography, branding and storytelling coexist.
                </p>
                <figure className="mt-[34px]">
                    <img
                        className="block max-h-[390px] w-full aspect-[1.2] object-cover"
                        alt="Creative work from the Infinity Artverse portfolio"
                        loading="lazy"
                        src={originImageTwo}
                    />
                    <figcaption className="mt-[9px] text-right font-italianno text-lg text-[#76766f]">One idea can take many forms.</figcaption>
                </figure>
            </section>

            <section className={`${sectionClass} bg-[#15161a]`}>
                <SectionLabel light>How we make</SectionLabel>
                <h2 className={`${headingClass} max-w-[470px] text-4xl leading-[1.02] min-[560px]:text-5xl`}>Curiosity into <em className="font-normal text-[#c5b79e]">creation.</em></h2>
                <p className="mt-[22px] max-w-[520px] text-sm text-white/65">
                    Every project is a journey of discovery. We explore,
                    experiment and collaborate until an idea becomes an
                    experience that feels its own.
                </p>
                <div className="mt-7 h-[245px] overflow-hidden">
                    <img className="block size-full object-cover object-[center_40%]" alt="An expressive visual study from the studio" loading="lazy" src={originImageThree} />
                </div>
                <ul className="mt-6 grid list-none gap-[13px] p-0 text-sm text-white/[0.82] [&_li]:before:mr-[10px] [&_li]:before:text-[#c5b79e] [&_li]:before:content-['—']">
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
        <main className={`${pageClass} bg-[#f0efe9] text-[#010207]`}>
            <section className="px-6 pt-[82px] pb-[72px] min-[560px]:px-[max(40px,calc((100%-680px)/2))]">
                <SectionLabel>Every good thing starts somewhere</SectionLabel>
                <h1 className={`${headingClass} max-w-[650px] text-5xl leading-[0.98] min-[560px]:text-6xl min-[760px]:text-7xl`}>
                    Let’s make
                    <br />
                    <em className="font-normal text-[#8d795f]">something matter.</em>
                </h1>
                <p className="mt-[22px] max-w-[420px] text-sm text-[#565650]">
                    Have a story, a spark or a collaboration in mind? We’d love
                    to hear what you’re imagining.
                </p>
                <a className="mt-8 inline-flex max-w-full items-center gap-[9px] border-b border-[#010207]/[0.38] pb-[9px] text-sm min-[560px]:text-base [overflow-wrap:anywhere]" href="mailto:hello@infinityartverse.com">
                    hello@infinityartverse.com
                    <ArrowUpRight className="shrink-0" aria-hidden="true" size={20} />
                </a>
            </section>

            <section className="grid gap-9 px-6 pt-9 pb-[68px] min-[560px]:grid-cols-[0.8fr_1.2fr] min-[560px]:gap-8 min-[560px]:px-[max(40px,calc((100%-680px)/2))]" aria-label="Contact details">
                <div>
                    <SectionLabel>Find us</SectionLabel>
                    <p className="mb-[7px] block text-sm text-[#55554f]">Sri Lanka</p>
                    <a className="mb-[7px] block text-sm text-[#55554f]" href="tel:+94710184698">+94 71 018 4698</a>
                </div>
                <div>
                    <SectionLabel>Follow the journey</SectionLabel>
                    <div className="grid gap-[3px]">
                        {socialLinks.map(({ label, href }) => (
                            <a className="flex min-h-[42px] items-center gap-2.5 border-b border-[#010207]/[0.12] text-sm" href={href} key={label} rel="noopener noreferrer" target="_blank">
                                {label}
                                <ArrowUpRight className="ml-auto text-[#8d795f]" aria-hidden="true" size={14} />
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
        <section className="bg-[radial-gradient(ellipse_at_90%_95%,rgb(91_96_107_/_18%),transparent_49%)] bg-[#08090d] px-6 pt-[76px] pb-[84px] min-[560px]:px-[max(40px,calc((100%-680px)/2))]">
            <SectionLabel light>A new idea starts here</SectionLabel>
            <h2 className={`${headingClass} text-4xl leading-[1.02] min-[560px]:text-5xl`}>Let’s create<br /><em className="font-normal text-[#c5b79e]">what comes next.</em></h2>
            <Link className={textLinkClass} to="/contact">
                Get in touch
                <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
        </section>
    );
}

export default function MobileSite() {
    const { pathname } = useLocation();
    const currentPath = pathname.replace(/\/+$/, "") || "/";
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPath]);

    useEffect(() => {
        let previousScrollY = window.scrollY;
        let direction = 0;
        let directionDistance = 0;

        const handleScroll = () => {
            const currentScrollY = Math.max(0, window.scrollY);
            const delta = currentScrollY - previousScrollY;
            previousScrollY = currentScrollY;

            if (currentScrollY <= 80) {
                direction = 0;
                directionDistance = 0;
                setIsHeaderVisible(true);
                return;
            }

            if (delta === 0) return;

            const nextDirection = Math.sign(delta);
            if (nextDirection !== direction) {
                direction = nextDirection;
                directionDistance = 0;
            }

            directionDistance += Math.abs(delta);
            if (directionDistance >= 10) {
                setIsHeaderVisible(direction < 0);
                directionDistance = 0;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const page = currentPath === "/about"
        ? <MobileAbout />
        : currentPath === "/contact"
            ? <MobileContact />
            : currentPath === "/"
                ? <MobileHome />
                : (
                    <main className={`${pageClass} flex min-h-[65vh] flex-col justify-center px-6 py-[72px] min-[560px]:px-[max(40px,calc((100%-680px)/2))]`}>
                        <SectionLabel>Infinity Artverse</SectionLabel>
                        <h1 className={`${headingClass} text-4xl leading-[0.98] min-[560px]:text-5xl min-[760px]:text-6xl`}>This path<br /><em className="font-normal text-[#c5b79e]">is still unfolding.</em></h1>
                        <Link className={textLinkClass} to="/">
                            Return home
                            <ArrowUpRight aria-hidden="true" size={16} />
                        </Link>
                    </main>
                );

    return (
        <div className={siteClass}>
            <MobileHeader currentPath={currentPath} isVisible={isHeaderVisible} />
            <div className="h-[68px] min-[560px]:h-[76px]" aria-hidden="true" />
            {page}
            <MobileFooter />
        </div>
    );
}