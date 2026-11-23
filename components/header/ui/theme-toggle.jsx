"use client";
import React, { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
        if (savedTheme === "light") {
            document.body.classList.remove("body-dark-mode");
            document.body.classList.add("body-light-mode");
        } else {
            document.body.classList.remove("body-light-mode");
            document.body.classList.add("body-dark-mode");
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        if (nextTheme === "light") {
            document.body.classList.remove("body-dark-mode");
            document.body.classList.add("body-light-mode");
        } else {
            document.body.classList.remove("body-light-mode");
            document.body.classList.add("body-dark-mode");
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`theme-toggle-btn ${className}`}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {theme === "dark" ? (
                <span className="theme-icon yellow-text" role="img" aria-label="Sun">
                    <i className="fas fa-sun" />
                </span>
            ) : (
                <span className="theme-icon navy-text" role="img" aria-label="Moon">
                    <i className="fas fa-moon" />
                </span>
            )}

            <style jsx>{`
                .theme-toggle-btn {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    border: 1px solid var(--navy-border, rgba(250, 204, 21, 0.3));
                    background: var(--bg-secondary, rgba(11, 21, 40, 0.8));
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.25s ease;
                    font-size: 16px;
                }
                .theme-toggle-btn:hover {
                    transform: scale(1.08);
                    border-color: var(--yellow-accent, #facc15);
                    box-shadow: 0 0 12px var(--yellow-glow, rgba(250, 204, 21, 0.3));
                }
                .yellow-text {
                    color: #facc15;
                }
                .navy-text {
                    color: #050c1a;
                }
            `}</style>
        </button>
    );
}
