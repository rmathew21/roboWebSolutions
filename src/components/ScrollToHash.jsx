import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "@/lib/utils";

export default function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.querySelector(hash);
            if (el) scrollToElement(el)
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return null;
}