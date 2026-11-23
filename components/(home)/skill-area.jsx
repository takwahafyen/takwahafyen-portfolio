"use client";
import { skills } from "@/data/site";
import { useTranslations } from "next-intl";

export default function SkillArea() {
    const t = useTranslations("skills");

    return (
        <section id="skills" className="skill-area over-hidden position-relative pt-140 pb-120">
            <div className="container position-relative z-index11">
                <div className="row">
                    <div className="col-12">
                        <div className="title text-center mb-60">
                            <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                                {t("label")}
                            </span>
                            <h2 className="text-white section-title">{t("title")}</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {skills?.map((item, i) => (
                        <div
                            key={i}
                            className={`${
                                i < 2 ? "col-xl-6 col-lg-6" : "col-xl-4 col-lg-4"
                            } col-md-6 col-12 mb-30`}
                            data-aos="fade-up"
                            data-aos-duration={1000 + i * 150}
                        >
                            <div className="skill-card-2026 h-100">
                                <div className="d-flex align-items-center mb-20">
                                    <div
                                        className="skill-card-icon-box mr-15"
                                        style={{ borderColor: `${item.accent}44`, background: `${item.accent}18` }}
                                    >
                                        <i
                                            className={`${item.icon} skill-card-icon`}
                                            style={{ color: item.accent || "#9ef01a" }}
                                        />
                                    </div>
                                    <h3 className="skill-card-title mb-0">
                                        {t(`categories.${item.key}`)}
                                    </h3>
                                </div>
                                <div className="tech-badge-container">
                                    {item.items.map((tech, j) => (
                                        <span key={j} className="tech-badge-2026">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
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

                .skill-card-2026 {
                    background: var(--bg-secondary, #112240);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
                    border-radius: 14px;
                    padding: 30px 26px;
                    transition: all 0.3s ease;
                }

                .skill-card-2026:hover {
                    transform: translateY(-5px);
                    border-color: var(--yellow-accent, #facc15);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), 0 0 20px var(--yellow-glow, rgba(250, 204, 21, 0.15));
                }

                .skill-card-icon-box {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid;
                }

                .skill-card-icon {
                    font-size: 20px;
                }

                .skill-card-title {
                    font-size: 18.5px;
                    font-weight: 700;
                    color: var(--text-primary, #ffffff);
                    letter-spacing: -0.2px;
                }

                .tech-badge-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 10px;
                }

                .tech-badge-2026 {
                    display: inline-block;
                    color: var(--text-secondary, #e2e8f0);
                    padding: 6px 13px;
                    border-radius: 20px;
                    font-size: 12.5px;
                    font-weight: 500;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: rgba(255, 255, 255, 0.04);
                    transition: all 0.25s ease;
                }

                .tech-badge-2026:hover {
                    transform: translateY(-2px);
                    background: rgba(250, 204, 21, 0.15);
                    border-color: rgba(250, 204, 21, 0.4);
                    color: var(--yellow-accent, #facc15);
                }

                @media (max-width: 768px) {
                    .section-title {
                        font-size: 26px;
                    }
                    .skill-card-2026 {
                        padding: 22px 18px;
                    }
                }
            `}</style>
        </section>
    );
}
