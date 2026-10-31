import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const siteUrl = "https://infinity-artverse.com";
const imageUrl = `${siteUrl}/logo_1.webp`;

const pageMetadata = {
    "/": {
        title: "Infinity Artverse | Creative Collective & Visual Storytelling",
        description: "Explore Infinity Artverse, a creative collective bringing photography, cinematography, branding, and visual storytelling together.",
        canonicalPath: "/",
    },
    "/about": {
        title: "About Infinity Artverse | Our Creative Process",
        description: "Discover the ideas, creative process, and people behind Infinity Artverse, a collective exploring photography, cinematography, branding, and visual storytelling.",
        canonicalPath: "/about",
    },
    "/contact": {
        title: "Contact Infinity Artverse | Get in Touch",
        description: "Contact Infinity Artverse in Sri Lanka about creative collaborations, photography, cinematography, branding, and visual storytelling.",
        canonicalPath: "/contact",
    },
};

const Seo = () => {
    const { pathname } = useLocation();
    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const page = pageMetadata[normalizedPath];
    const title = page?.title ?? "Page Not Found | Infinity Artverse";
    const description = page?.description ?? "The page you are looking for could not be found.";
    const canonicalUrl = page ? new URL(page.canonicalPath, siteUrl).href : null;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={page ? "index, follow" : "noindex, nofollow"} />
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Infinity Artverse" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:alt" content="Infinity Artverse logo" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
};

export default Seo;
