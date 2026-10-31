import Seo from "../components/Seo";
import ViewportGuard from "../otherHelpers/ViewportGuard";
import RootLayout from "./RootLayout";

export default function AppLayout() {
    return (
        <>
            <Seo />
            <ViewportGuard>
                <RootLayout />
            </ViewportGuard>
        </>
    );
}
