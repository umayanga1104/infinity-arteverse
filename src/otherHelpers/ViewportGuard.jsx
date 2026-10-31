
import { useEffect, useState } from "react";
import MobileSite from "../pages/MobileSite";

const MIN_WIDTH = 1024;
const MIN_HEIGHT = 600;

function supportsDesktopExperience() {
    return (
        window.innerWidth >= MIN_WIDTH &&
        window.innerHeight >= MIN_HEIGHT &&
        window.matchMedia("(orientation: landscape)").matches
    );
}

export default function ViewportGuard({ children }) {
    const [isDesktop, setIsDesktop] = useState(supportsDesktopExperience);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(orientation: landscape)"
        );

        const updateExperience = () => setIsDesktop(supportsDesktopExperience());

        window.addEventListener("resize", updateExperience);
        mediaQuery.addEventListener("change", updateExperience);

        return () => {
            window.removeEventListener("resize", updateExperience);
            mediaQuery.removeEventListener("change", updateExperience);
        };
    }, []);

    if (!isDesktop) {
        return <MobileSite />;
    }

    return children;
}