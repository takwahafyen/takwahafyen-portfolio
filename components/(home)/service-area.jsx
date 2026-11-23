"use client";
import React from "react";
import ServiceAreaCard from "./ui/service-area-card";
import { service } from "@/data/site";
import { useTranslations } from "next-intl";

export default function ServiceArea() {
    const t = useTranslations("services");
    const items = t.raw("items");

    return (
        <section
            id="service"
            className="service-area section-bg over-hidden pt-140 pb-120"
        >
            <div className="service-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 text-center mb-60">
                            <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                                {t("label")}
                            </span>
                            <h2 className="text-white section-title">
                                {t("title")}
                            </h2>
                        </div>
                    </div>
                    <div className="row service-wrappers">
                        {service?.map((item, i) => (
                            <ServiceAreaCard
                                key={i}
                                data={{ ...item, ...(items ? items[i] : {}) }}
                                index={i}
                            />
                        ))}
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
