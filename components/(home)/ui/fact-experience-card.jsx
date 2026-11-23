"use client";
import React from "react";
import CountUp from "react-countup";

export default function FactExperienceCard({ value, suffix = "+", titleHtml }) {
    return (
        <div className="single-fact d-flex align-items-center border-radius10 mb-30 p-3">
            <div className="mr-20 d-flex align-items-center">
                <span className="font-weight-bold d-inline-flex align-items-center counter-number">
                    <CountUp end={value} enableScrollSpy={true} duration={2} />
                    <span className="counter-suffix">{suffix}</span>
                </span>
            </div>
            <h4
                className="mb-0 stat-title"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
            />

            <style jsx>{`
                .single-fact {
                    background: var(--bg-secondary, #112240);
                    border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    min-height: 95px;
                }
                .single-fact:hover {
                    border-color: var(--yellow-accent, #facc15);
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), 0 0 15px var(--yellow-glow, rgba(250, 204, 21, 0.2));
                }
                .counter-number {
                    font-size: 38px;
                    line-height: 1;
                    font-family: var(--font-jost-medium);
                    color: var(--yellow-accent, #facc15);
                }
                .counter-suffix {
                    font-size: 26px;
                    color: var(--yellow-accent, #facc15);
                    margin-left: 2px;
                }
                .stat-title {
                    font-size: 14px;
                    line-height: 1.35;
                    font-weight: 600;
                    color: var(--text-secondary, #cbd5e1);
                }
            `}</style>
        </div>
    );
}
