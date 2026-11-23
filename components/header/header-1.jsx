"use client";
import React from "react";
import Navigation from "./ui/navigation";
import LanguageSwitcher from "./ui/language-switcher";
import ThemeToggle from "./ui/theme-toggle";
import { Link as LocaleLink } from "@/i18n/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useSticky from "@/hooks/useSticky";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";

export default function Header1() {
    const isSticky = useSticky(2);
    const t = useTranslations("header");
    const dispatch = useDispatch();

    const sidebarHandler = (e) => {
        e.preventDefault();
        dispatch(toggleSidebar());
    };

    return (
        <header className="header-fixed-container">
            <div
                className={`header-area transition5 ${
                    isSticky ? "sticky-menu header-scrolled" : "header-default"
                }`}
            >
                <div className="header-inner">
                    <div className="container-fluid px-lg-5 px-3">
                        <div className="row align-items-center justify-content-between">
                            {/* Brand Logo: Takwa (Yellow) Hafyen (White/Navy) */}
                            <div className="col-auto">
                                <div className="logo-box">
                                    <LocaleLink className="header-brand-link d-flex align-items-center text-decoration-none" href="/">
                                        <span className="logo-takwa">Takwa</span>
                                        <span className="logo-hafyen">Hafyen</span>
                                        <span className="logo-dot">.</span>
                                    </LocaleLink>
                                </div>
                            </div>

                            {/* Center Navigation */}
                            <div className="col d-none d-xl-flex justify-content-center">
                                <Navigation />
                            </div>

                            {/* Right Actions: Language Switcher, Theme Toggle, CV Button */}
                            <div className="col-auto d-flex align-items-center header-right-actions">
                                <div className="lang-switcher-container d-none d-md-flex align-items-center">
                                    <LanguageSwitcher />
                                </div>

                                <div className="theme-toggle-container d-flex align-items-center">
                                    <ThemeToggle />
                                </div>

                                <a
                                    href="/Takwa-Hafyen-CV.pdf"
                                    download="Takwa_Hafyen_CV.pdf"
                                    className="cv-pill-btn d-none d-sm-inline-flex align-items-center"
                                    aria-label={t("downloadCv")}
                                    title={t("downloadCv")}
                                >
                                    <i className="fas fa-download mr-2" aria-hidden="true" />
                                    <span>CV</span>
                                </a>

                                {/* Mobile Hamburger */}
                                <div className="mobile-m-bar d-block d-xl-none">
                                    <Link
                                        href="#"
                                        onClick={sidebarHandler}
                                        className="mobile-menubar"
                                        aria-label="Toggle Mobile Menu"
                                    >
                                        <i className="far fa-bars" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .header-fixed-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 999;
                }

                .header-area {
                    background: var(--header-bg, rgba(5, 12, 26, 0.94));
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border-bottom: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
                    transition: all 0.3s ease;
                }

                .header-default {
                    padding: 14px 0;
                }

                .header-scrolled {
                    padding: 10px 0;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
                    border-bottom-color: var(--yellow-accent, #facc15);
                }

                .logo-box {
                    display: flex;
                    align-items: center;
                }

                .header-brand-link {
                    display: inline-flex;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                }

                .logo-takwa {
                    font-size: 24px;
                    font-weight: 800;
                    color: var(--yellow-accent, #facc15);
                    letter-spacing: -0.5px;
                    margin-right: 5px;
                    transition: color 0.3s ease;
                }

                .logo-hafyen {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--text-primary, #ffffff);
                    letter-spacing: -0.5px;
                    transition: color 0.3s ease;
                }

                .logo-dot {
                    font-size: 26px;
                    font-weight: 900;
                    color: var(--yellow-accent, #facc15);
                    line-height: 1;
                    margin-left: 1px;
                }

                .header-right-actions {
                    gap: 18px; /* Clean breathing room between items */
                }

                .lang-switcher-container {
                    margin-right: 4px;
                }

                .theme-toggle-container {
                    margin-right: 4px;
                }

                .cv-pill-btn {
                    padding: 8px 18px;
                    background: var(--yellow-accent, #facc15);
                    color: #050c1a !important;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    border-radius: 20px;
                    text-decoration: none;
                    transition: all 0.25s ease;
                    border: 1px solid var(--yellow-accent, #facc15);
                }

                .cv-pill-btn:hover {
                    background: #ffd600;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 14px var(--yellow-glow, rgba(250, 204, 21, 0.4));
                }

                .mobile-menubar {
                    color: var(--yellow-accent, #facc15);
                    font-size: 22px;
                    padding: 6px;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                @media (min-width: 1200px) {
                    .mobile-m-bar {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}
