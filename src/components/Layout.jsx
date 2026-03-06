import { Outlet } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import ScrollToHash from "./ScrollToHash";
import { Scroll } from "lucide-react";

export default function Layout() {
    return (
        <>
            <ScrollToHash />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}