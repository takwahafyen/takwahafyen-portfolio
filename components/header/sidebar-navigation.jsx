"use client";
import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import navigation from "@/data/navigation";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/language-switcher";

const social = [
    {
        name: "WhatsApp",
        icon: "fab fa-whatsapp",
        color: "#25d366",
        href: "https://wa.me/21629196616",
    },
    {
        name: "LinkedIn",
        icon: "fab fa-linkedin-in",
        color: "#0a66c2",
        href: "https://linkedin.com/in/takwa-hafyen-472264282",
    },
    {
        name: "GitHub",
        icon: "fab fa-github",
        color: "#ffffff",
        href: "https://github.com/takwahafyen",
    },
    {
        name: "Email",
        icon: "fas fa-envelope",
        color: "#d14836",
        href: "mailto:takwa.hafyen@gmail.com",
    },
];

export default function SidebarNavigation() {
    const isSidebarActive = useSelector(
        (state) => state.toggle.isSidebarActive
    );

    const dispatch = useDispatch();
    const t = useTranslations("nav");

    return (
        <div className={`ui-sidebar ${isSidebarActive ? "active" : ""}`}>
            <Sidebar>
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-secondary-subtle">
                    <span className="text-white font-weight-bold" style={{ fontSize: "16px" }}>
                        Takwa Hafyen
                    </span>
                    <button
                        onClick={() => dispatch(toggleSidebar())}
                        className="ui-sidebar-close"
                        aria-label="Close Navigation Menu"
                    >
                        <i className="fa fa-times"></i>
                    </button>
                </div>

                <Menu>
                    {navigation?.map((item, i) => (
                        <MenuItem
                            key={i}
                            component={
                                <Link
                                    href="#"
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="ui-sidebar-active"
                                />
                            }
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            {t(item.key)}
                        </MenuItem>
                    ))}
                </Menu>

                <LanguageSwitcher className="justify-content-center mt-30" />

                <div className="sidebar-social mt-4 text-center">
                    <div className="d-flex justify-content-center gap-3">
                        {social.map((s, idx) => (
                            <a
                                key={idx}
                                href={s.href}
                                target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="sidebar-social-link text-white p-2"
                                aria-label={s.name}
                                style={{ color: s.color }}
                            >
                                <i className={s.icon} style={{ fontSize: "20px" }}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
