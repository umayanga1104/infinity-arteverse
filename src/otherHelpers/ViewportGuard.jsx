
import { useEffect, useState } from "react";

const MIN_WIDTH = 1024;
const MIN_HEIGHT = 600;

export default function ViewportGuard({ children }) {
    const [isCompatible, setIsCompatible] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
        "(orientation: landscape)"
        );

        const checkViewport = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        setIsCompatible(
            width >= MIN_WIDTH &&
            height >= MIN_HEIGHT &&
            mediaQuery.matches
        );
        };

        checkViewport();

        window.addEventListener("resize", checkViewport);
        mediaQuery.addEventListener("change", checkViewport);

        return () => {
        window.removeEventListener("resize", checkViewport);
        mediaQuery.removeEventListener("change", checkViewport);
        };
    }, []);

    if (!isCompatible) {
        return <UnsupportedViewport />;
    }

    return children;
}

function UnsupportedViewport() {
    return (
        <main className="fixed lg:hidden inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#010207] px-6 py-12 text-white">
            <div className="max-w-lg text-center">
                <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/50">
                    Infinity Artverse
                </p>

                <h1 className="mb-6 font-ravello text-3xl sm:text-5xl">
                    A wider world awaits.
                </h1>

                <p className="mb-8 text-base leading-7 text-white/65">
                    This portfolio is designed for a desktop
                    experience. For the full journey through our
                    visual stories and interactive works, please
                    visit us on a wider screen in landscape
                    orientation.
                </p>

                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Best experienced on desktop
                </p>
            </div>
        </main>
    );
}