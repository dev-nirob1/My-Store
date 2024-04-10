import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-80px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;