"use client";
import React from "react";
import CountUp from "react-countup";

export default function FactExperienceCard({ value, suffix = "+", titleHtml }) {
    return (
        <div className="single-fact d-flex align-items-center border-radius10 mb-30 p-3">
            <div className="mr-20 d-flex align-items-center">
                <span className="theme-color font-weight-bold d-inline-flex align-items-center counter-number">
                    <CountUp end={value} enableScrollSpy={true} duration={2} />
                    <span className="counter-suffix">{suffix}</span>
                </span>
            </div>
            <h4
                className="text-white mb-0 stat-title"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
            />

            <style jsx>{`
                .single-fact {
                    background: rgba(22, 27, 46, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 12px;
                    transition: all 0.3s ease;
                    min-height: 95px;
                }
                .single-fact:hover {
                    background: rgba(30, 38, 66, 0.85);
                    border-color: rgba(46, 134, 171, 0.4);
                    transform: translateY(-3px);
                }
                .counter-number {
                    font-size: 38px;
                    line-height: 1;
                    font-family: var(--font-jost-medium);
                }
                .counter-suffix {
                    font-size: 26px;
                    color: var(--main-color, #2e86ab);
                    margin-left: 2px;
                }
                .stat-title {
                    font-size: 14px;
                    line-height: 1.35;
                    font-weight: 500;
                    color: #d1d5db;
                }
            `}</style>
        </div>
    );
}
