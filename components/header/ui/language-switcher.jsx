"use client";
import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const languages = [
    { code: "en", label: "EN", full: "English", flag: "🇬🇧" },
    { code: "fr", label: "FR", full: "Français", flag: "🇫🇷" },
    { code: "es", label: "ES", full: "Español", flag: "🇪🇸" },
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
                    background: rgba(255, 255, 255, 0.06);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 20px;
                    padding: 3px;
                    gap: 3px;
                }

                .lang-btn {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 16px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .lang-btn:hover {
                    color: #fff;
                }

                .lang-btn.active {
                    background: #9ef01a;
                    color: #0c0e1a;
                    box-shadow: 0 0 10px rgba(158, 240, 26, 0.35);
                }
            `}</style>
        </div>
    );
}
