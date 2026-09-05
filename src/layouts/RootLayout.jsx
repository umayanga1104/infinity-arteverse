import { Outlet, useNavigation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
    // const navigation = useNavigation();

    return (
        <div className="global-animation container relative min-h-screen w-full bg-black overflow-hidden">
            {/* <Sidebar/> */}

            {/* Page outlet */}
            <div className="relative w-full h-full bg-black">
                <main className="relative z-10 w-full min-h-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default RootLayout;