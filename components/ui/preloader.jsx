"use client";
import React, { useEffect, useState } from "react";

export default function Preloader() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        // Safe timeout so preloader never gets stuck on screen
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 150);

        const handleLoad = () => {
            setShowPreloader(false);
        };

        if (typeof window !== "undefined") {
            if (document.readyState === "complete") {
                setShowPreloader(false);
            } else {
                window.addEventListener("load", handleLoad);
            }
        }

        return () => {
            clearTimeout(timer);
            if (typeof window !== "undefined") {
                window.removeEventListener("load", handleLoad);
            }
        };
    }, []);

    if (!showPreloader) return null;

    return (
        <div id="preloader">
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object" id="object_one" />
                        <div className="object" id="object_two" />
                        <div className="object" id="object_three" />
                    </div>
                </div>
            </div>
        </div>
    );
}
