"use client";
import React from "react";
import navigation from "@/data/navigation";
import { Link } from "react-scroll";
import { useTranslations } from "next-intl";

export default function Navigation() {
    const t = useTranslations("nav");

    return (
        <nav className="d-none d-xl-block nav-2026-wrapper">
            <ul className="nav-list d-flex align-items-center m-0 p-0">
                {navigation?.map((item, i) => (
                    <li key={i} className="nav-item">
                        <Link
                            href="#"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            activeClass="active-nav-link"
                            className="nav-link-item"
                        >
                            {t(item.key)}
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .nav-2026-wrapper {
                    overflow: visible;
                }
                .nav-list {
                    list-style: none;
                    gap: 18px;
                    flex-wrap: nowrap;
                    white-space: nowrap;
                }
                .nav-item {
                    display: inline-block;
                }
                :global(.nav-link-item) {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--nav-text-color, #cbd5e1);
                    padding: 6px 4px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-decoration: none;
                    position: relative;
                }
                :global(.nav-link-item:hover) {
                    color: var(--yellow-accent, #facc15) !important;
                }
                :global(.active-nav-link) {
                    color: var(--yellow-accent, #facc15) !important;
                    font-weight: 600;
                }
                :global(.active-nav-link::after) {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 4px;
                    right: 4px;
                    height: 2px;
                    background: var(--yellow-accent, #facc15);
                    border-radius: 2px;
                }
            `}</style>
        </nav>
    );
}
