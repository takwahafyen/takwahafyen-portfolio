"use client";
import React from "react";
import Navigation from "./ui/navigation";
import LanguageSwitcher from "./ui/language-switcher";
import Link from "next/link";
import { Link as LocaleLink } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import useSticky from "@/hooks/useSticky";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";

export default function Header1() {
    const isSticky = useSticky(2);
    const t = useTranslations("header");

    const dispatch = useDispatch();

    // sidebar handler
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
                                <div className="logo mt-50 mb-50 transition5">
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
                                <div className="main-menu">
                                    {/* navigation start */}
                                    <Navigation />
                                    {/* navigation end */}
                                </div>

                                <LanguageSwitcher
                                    variant="select"
                                    className="d-none d-md-block pl-20"
                                />

                                <div className="header-btn pl-20">
                                    <a
                                        href="/Takwa-Hafyen-CV.pdf"
                                        download="Takwa_Hafyen_CV.pdf"
                                        className="white-text text-uppercase d-inline-block"
                                        aria-label={t("downloadCv")}
                                        title={t("downloadCv")}
                                    >
                                        <i className="fas fa-download mr-2" aria-hidden="true" />
                                        CV
                                    </a>
                                </div>


                                <div className="mobile-m-bar d-block d-xl-none ml-30">
                                    <Link
                                        href="#"
                                        onClick={sidebarHandler}
                                        className="mobile-menubar theme-color primary-hover"
                                    >
                                        <i className="far fa-bars" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
