import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Nav from './Nav';
import Footer from './Footer';
import ScrollToHash from "./ScrollToHash";
import { ScrollToTop } from "./ScrollToTop";


export default function Layout() {
    return (
        <>
            <ScrollToTop />
            <ScrollToHash />
            <Nav />
            <Outlet />
            <Footer />
            <Analytics />
        </>
    );
}