"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function GitHubAnalytics() {
    const t = useTranslations("githubAnalytics");

    return (
        <section id="analytics" className="github-analytics-area position-relative over-hidden pt-140 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-12 text-center mb-60">
                        <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                            {t("label")}
                        </span>
                        <h2 className="text-white section-title mb-20">
                            {t("title")}
                        </h2>
                        <p className="lead-desc text-muted mx-auto" style={{ maxWidth: "700px" }}>
                            {t("description")}
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center g-4">
                    {/* Top Row: Overall Stats & Top Languages */}
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-30">
                        <div className="analytics-card h-100 text-center p-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=takwahafyen&show_icons=true&theme=tokyonight&hide_border=true&count_private=true"
                                alt={t("statsAlt")}
                                className="img-fluid rounded-3 w-100"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-30">
                        <div className="analytics-card h-100 text-center p-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=takwahafyen&layout=compact&theme=tokyonight&hide_border=true"
                                alt={t("langsAlt")}
                                className="img-fluid rounded-3 w-100"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Bottom Row: Contribution Streak */}
                    <div className="col-xl-12 col-lg-12 col-12">
                        <div className="analytics-card text-center p-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=takwahafyen&theme=tokyonight&hide_border=true"
                                alt={t("streakAlt")}
                                className="img-fluid rounded-3 w-100"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Call to Action */}
                <div className="row mt-40">
                    <div className="col-12 text-center">
                        <a
                            href="https://github.com/takwahafyen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-profile-btn d-inline-flex align-items-center"
                        >
                            <i className="fab fa-github mr-2" />
                            <span>{t("viewProfile")}</span>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .letter-spacing-1 {
                    letter-spacing: 1.5px;
                    font-size: 13px;
                }
                .section-title {
                    font-size: 36px;
                    font-weight: 700;
                }
                .analytics-card {
                    background: rgba(22, 27, 46, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    transition: all 0.3s ease;
                }
                .analytics-card:hover {
                    background: rgba(30, 38, 66, 0.85);
                    border-color: rgba(46, 134, 171, 0.4);
                    transform: translateY(-3px);
                }
                .github-profile-btn {
                    padding: 12px 28px;
                    background: #24292e;
                    color: #fff;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 30px;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                .github-profile-btn:hover {
                    background: #2e86ab;
                    color: #fff;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(46, 134, 171, 0.35);
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
