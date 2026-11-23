"use client";
import React from "react";
import Navigation from "./ui/navigation";
import LanguageSwitcher from "./ui/language-switcher";
import ThemeToggle from "./ui/theme-toggle";
import { Link as LocaleLink } from "@/i18n/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useSticky from "@/hooks/useSticky";
import Image from "next/image";
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
                            {/* Logo */}
                            <div className="col-auto">
                                <div className="logo-box">
                                    <LocaleLink className="header-logo d-flex align-items-center" href="/">
                                        <Image
                                            height={38}
                                            width={160}
                                            src="/images/logo/logo.png"
                                            alt="Takwa Hafyen"
                                            className="brand-logo-img"
                                            priority
                                        />
                                    </LocaleLink>
                                </div>
                            </div>

                            {/* Center Navigation */}
                            <div className="col d-none d-xl-flex justify-content-center">
                                <Navigation />
                            </div>

                            {/* Right Actions: Language Switcher, Theme Toggle, CV Button */}
                            <div className="col-auto d-flex align-items-center gap-3">
                                <LanguageSwitcher className="d-none d-md-flex" />

                                <ThemeToggle />

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
                                <div className="mobile-m-bar d-block d-xl-none ml-2">
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
                    background: var(--header-bg, rgba(10, 25, 47, 0.88));
                    backdrop-filter: blur(14px);
                    -webkit-backdrop-filter: blur(14px);
                    border-bottom: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
                    transition: all 0.3s ease;
                }

                .header-default {
                    padding: 14px 0;
                }

                .header-scrolled {
                    padding: 10px 0;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
                    border-bottom-color: var(--yellow-accent, #facc15);
                }

                .logo-box {
                    display: flex;
                    align-items: center;
                }

                .brand-logo-img {
                    height: 36px;
                    width: auto;
                    object-fit: contain;
                }

                .cv-pill-btn {
                    padding: 8px 18px;
                    background: var(--yellow-accent, #facc15);
                    color: #0a192f !important;
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
                }
            `}</style>
        </header>
    );
}
