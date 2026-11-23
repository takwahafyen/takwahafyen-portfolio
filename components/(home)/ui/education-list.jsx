"use client";
import React from "react";

export default function EducationList({ data }) {
    return (
        <li className="mb-32 d-flex align-items-start rotate-hover">
            <div id="education" className="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3">
                <span className="theme-color d-inline-block">
                    <span
                        className={`d-block rotate flat-family ${data?.icon || "flaticon-graduation-cap"}`}
                    />
                </span>
            </div>
            <div className="experience-service-text d-inline-block">
                <h3 className="mb-2 text-white">{data?.title}</h3>
                <h4 className="location-name text-muted">
                    {data?.location}
                </h4>
                {data?.date && (
                    <span className="meta-text-color openS-font-family d-block mt-1">
                        {data.date}
                    </span>
                )}
                {data?.description && (
                    <p className="mb-0 mt-15 text-muted">{data.description}</p>
                )}
            </div>
        </li>
    );
}
