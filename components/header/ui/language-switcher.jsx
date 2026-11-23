"use client";
import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
    { code: "en", label: "EN", full: "English" },
    { code: "fr", label: "FR", full: "Français" },
    { code: "es", label: "ES", full: "Español" },
];

export default function LanguageSwitcher({ className = "" }) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className={`language-switcher-2026 d-inline-flex align-items-center ${className}`}>
            <div className="lang-pill-group d-flex align-items-center">
                {languages.map((lang) => {
                    const isActive = locale === lang.code;
                    return (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleChange(lang.code)}
                            className={`lang-btn ${isActive ? "active" : ""}`}
                            title={lang.full}
                            aria-label={`Switch to ${lang.full}`}
                        >
                            <span className="lang-code">{lang.label}</span>
                        </button>
                    );
                })}
            </div>

            <style jsx>{`
                .lang-pill-group {
                    background: var(--bg-secondary, rgba(17, 34, 64, 0.8));
                    border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.12));
                    border-radius: 20px;
                    padding: 3px;
                    gap: 3px;
                }

                .lang-btn {
                    background: transparent;
                    border: none;
                    color: var(--text-secondary, #94a3b8);
                    font-size: 12px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .lang-btn:hover {
                    color: var(--yellow-accent, #facc15);
                }

                .lang-btn.active {
                    background: var(--yellow-accent, #facc15);
                    color: #0a192f;
                    font-weight: 700;
                    box-shadow: 0 0 10px rgba(250, 204, 21, 0.4);
                }
            `}</style>
        </div>
    );
}
