"use client";
import { skills } from "@/data/site";
import { useTranslations } from "next-intl";

export default function SkillArea() {
    const t = useTranslations("skills");

    return (
        <div id="skills" className="skill-area over-hidden position-relative pt-130 pb-110">
            <style jsx>{`
                .skill-card {
                    height: 100%;
                    padding: 35px 30px 30px;
                    border-radius: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    transition: all 0.3s ease;
                }

                .skill-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .skill-card-icon {
                    font-size: 26px;
                    margin-bottom: 15px;
                }

                .skill-card-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                    margin-bottom: 15px;
                }

                .tech-badge {
                    display: inline-block;
                    color: #fff;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    margin-top: 5px;
                    margin-inline-end: 5px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.05);
                    transition: all 0.3s ease;
                }

                .tech-badge:hover {
                    transform: scale(1.05);
                    background: rgba(255, 255, 255, 0.1);
                }
            `}</style>

            <div className="container position-relative z-index11">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center mb-60">
                            <span className="theme-color text-uppercase d-block mb-6">
                                {t("label")}
                            </span>
                            <h2 className="text-white">{t("title")}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {/* skill card start */}
                    {skills?.map((item, i) => (
                        <div
                            key={i}
                            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-30"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration={1000 + i * 150}
                        >
                            <div className="skill-card primary-bg shadow-hover">
                                <i className={`${item.icon} skill-card-icon theme-color`} />
                                <h3 className="skill-card-title">{t(`categories.${item.key}`)}</h3>
                                <div>
                                    {item.items.map((tech, j) => (
                                        <span key={j} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* skill card end */}
                </div>
            </div>
            <div className="skill-text-style position-absolute d-none d-md-inline-block">
                <span className="d-inline-block section-text-color">
                    {t("background")}
                </span>
            </div>
        </div>
    );
}
