"use client";
import React from "react";
import FactExperienceCard from "./ui/fact-experience-card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const statConfigs = [
    { value: 3, suffix: "+" },
    { value: 20, suffix: "+" },
    { value: 6, suffix: "+" },
    { value: 100, suffix: "%" },
];

export default function FunFact() {
    const t = useTranslations("facts");
    const stats = t.raw("stats") || [];

    return (
        <section
            id="facts"
            className="fun-fact-area fun-fact-bg position-relative over-hidden pt-140 pb-110"
            data-aos="fade-up"
            data-aos-duration={1600}
        >
            <div className="container">
                {/* Marquee ticker */}
                <div className="marquee-w mb-100">
                    <div className="marquee marquee2 pb-1">
                        <span className="pl-4">{t("marquee")}</span>
                        <span className="pl-4">{t("marquee")}</span>
                    </div>
                </div>

                <div className="row align-items-center">
                    {/* Left text column */}
                    <div className="col-xl-5 col-lg-6 col-md-12 col-12 mb-50 mb-lg-0">
                        <div className="fun-fact-content">
                            <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                                {t("label")}
                            </span>
                            <h2 className="mb-25 text-white section-title">
                                {t("title")}
                            </h2>
                            <p className="lead-desc text-muted mb-0">
                                {t("text")}
                            </p>
                        </div>
                    </div>

                    {/* Right stats cards grid */}
                    <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-12">
                        <div className="row">
                            {statConfigs.map((cfg, i) => (
                                <div
                                    key={i}
                                    className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                                >
                                    <FactExperienceCard
                                        value={cfg.value}
                                        suffix={cfg.suffix}
                                        titleHtml={stats[i] || ""}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Background shapes */}
            <div className="fact-style1 position-absolute d-none d-md-inline-block">
                <Image
                    height={410}
                    width={310}
                    src="/images/shape/fact-icon1.png"
                    alt="shape 1"
                />
            </div>
            <div className="fact-style2 position-absolute d-none d-md-inline-block">
                <Image
                    height={410}
                    width={357}
                    src="/images/shape/fact-icon2.png"
                    alt="shape 2"
                    className="h-100 w-auto"
                />
            </div>

            <style jsx>{`
                .letter-spacing-1 {
                    letter-spacing: 1.5px;
                    font-size: 13px;
                }
                .section-title {
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 1.25;
                }
                .lead-desc {
                    font-size: 16px;
                    line-height: 1.7;
                    color: #9ca3af;
                }
                @media (max-width: 768px) {
                    .section-title {
                        font-size: 26px;
                    }
                }
            `}</style>
        </section>
    );
}
