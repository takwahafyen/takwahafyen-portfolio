"use client";
import React from "react";
import { experience2 } from "@/data/site";
import ExperienceList from "./ui/experience-list";
import { useTranslations } from "next-intl";

export default function Experience() {
    const t = useTranslations("experience");
    const items = t.raw("items") || [];
    const presentLabel = t("present");

    return (
        <section id="experience" className="experience-area over-hidden pt-140 pb-110">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
                        <div className="position-relative">
                            <div className="title text-center mb-60">
                                <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                                    {t("label")}
                                </span>
                                <h2 className="text-white section-title">
                                    {t("title")}
                                </h2>
                            </div>
                        </div>
                        <div
                            className="experience-wrapper"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration={1400}
                        >
                            <ul className="experience-content list-unstyled p-0 m-0">
                                {experience2?.map((item, i) => {
                                    const translated = items[i] || {};
                                    const merged = {
                                        ...item,
                                        title: translated.title || item.company,
                                        description: translated.description || item.description,
                                        date: {
                                            start: item.date?.start,
                                            end: item.date?.end === "present" ? presentLabel : item.date?.end,
                                        },
                                        projects: item.projects?.map((proj, pIdx) => ({
                                            ...proj,
                                            name: translated.projects?.[pIdx]?.name || proj.name,
                                            points: translated.projects?.[pIdx]?.points || proj.points || [],
                                            date: proj.date?.end === "present"
                                                ? `${proj.date.start} - ${presentLabel}`
                                                : proj.date ? `${proj.date.start} - ${proj.date.end}` : "",
                                        })),
                                    };
                                    return <ExperienceList key={i} data={merged} />;
                                })}
                            </ul>
                        </div>
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
                @media (max-width: 768px) {
                    .section-title {
                        font-size: 26px;
                    }
                }
            `}</style>
        </section>
    );
}
