"use client";
import React from "react";
import Navigation from "./ui/navigation";
import LanguageSwitcher from "./ui/language-switcher";
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
        <header>
            <div
                className={`transparent-header header-area ${
                    isSticky ? "sticky-menu" : ""
                }`}
            >
                <div className="header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-5">
                                <div className="logo mt-40 mb-40 transition5">
                                    <LocaleLink className="header-logo" href="/">
                                        <Image
                                            height={46}
                                            width={201}
                                            src="/images/logo/logo.png"
                                            alt="Takwa Hafyen"
                                            className="h-100 w-auto"
                                            priority
                                        />
                                    </LocaleLink>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-7 pl-0 d-flex justify-content-end align-items-center">
                                <div className="main-menu d-none d-xl-block">
                                    <Navigation />
                                </div>

                                <LanguageSwitcher className="d-none d-md-flex pl-20" />

                                <div className="header-btn pl-20 d-none d-sm-block">
                                    <a
                                        href="https://wa.me/21629196616"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="whatsapp-nav-btn mr-2"
                                        title="WhatsApp Direct Chat"
                                        aria-label="Chat on WhatsApp"
                                    >
                                        <i className="fab fa-whatsapp" />
                                    </a>

                                    <a
                                        href="/Takwa-Hafyen-CV.pdf"
                                        download="Takwa_Hafyen_CV.pdf"
                                        className="white-text text-uppercase d-inline-block cv-nav-btn"
                                        aria-label={t("downloadCv")}
                                        title={t("downloadCv")}
                                    >
                                        <i className="fas fa-download mr-2" aria-hidden="true" />
                                        CV
                                    </a>
                                </div>

                                <div className="mobile-m-bar d-block d-xl-none ml-20">
                                    <Link
                                        href="#"
                                        onClick={sidebarHandler}
                                        className="mobile-menubar theme-color primary-hover"
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
                .whatsapp-nav-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(37, 211, 102, 0.15);
                    border: 1px solid rgba(37, 211, 102, 0.4);
                    color: #25d366;
                    font-size: 16px;
                    transition: all 0.25s ease;
                    text-decoration: none;
                    vertical-align: middle;
                }

                .whatsapp-nav-btn:hover {
                    background: #25d366;
                    color: #ffffff;
                    transform: scale(1.1);
                    box-shadow: 0 0 12px rgba(37, 211, 102, 0.5);
                }

                .cv-nav-btn {
                    vertical-align: middle;
                }
            `}</style>
        </header>
    );
}
