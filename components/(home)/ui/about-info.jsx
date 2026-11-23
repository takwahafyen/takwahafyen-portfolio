"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function AboutInfo() {
  const t = useTranslations("about");
  const pillars = t.raw("pillars") || [];

  return (
    <div className="about-info-2026">
      {/* Title & Headline */}
      <div className="about-heading text-center mb-50">
        <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
          {t("label")}
        </span>
        <h2 className="mb-25 about-main-title">
          {t("title")}
        </h2>
        <p className="lead-text mx-auto">
          {t("text")}
        </p>
      </div>

      {/* 6 Core Engineering Pillars matching the README */}
      <div className="row pillars-grid g-4 mt-20">
        {pillars.map((pillar, i) => (
          <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-12 mb-30">
            <div className="pillar-card h-100">
              <div className="pillar-icon-box mb-20">
                <i className={`${pillar.icon} pillar-icon`} />
              </div>
              <h3 className="pillar-title mb-12">
                {pillar.title}
              </h3>
              <p className="pillar-desc mb-0">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .letter-spacing-1 {
          letter-spacing: 1.5px;
          font-size: 13px;
        }

        .about-main-title {
          font-size: 36px;
          font-weight: 700;
          line-height: 1.25;
          max-width: 850px;
          margin-inline: auto;
          color: var(--text-primary, #ffffff);
        }

        .lead-text {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary, #cbd5e1);
          max-width: 820px;
        }

        .pillar-card {
          background: var(--bg-secondary, #0b1528);
          backdrop-filter: blur(12px);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
          border-radius: 14px;
          padding: 30px 26px;
          transition: all 0.35s ease;
          position: relative;
        }

        .pillar-card:hover {
          transform: translateY(-6px);
          border-color: var(--yellow-accent, #facc15);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.35), 0 0 20px var(--yellow-glow, rgba(250, 204, 21, 0.2));
        }

        .pillar-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(250, 204, 21, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(250, 204, 21, 0.3);
          transition: all 0.3s ease;
        }

        :global(.pillar-icon) {
          font-size: 24px;
          color: var(--yellow-accent, #facc15);
          transition: all 0.3s ease;
        }

        .pillar-card:hover .pillar-icon-box {
          background: var(--yellow-accent, #facc15);
          transform: scale(1.08);
        }

        .pillar-card:hover :global(.pillar-icon) {
          color: #050c1a;
        }

        .pillar-title {
          font-size: 19px;
          font-weight: 700;
          color: var(--text-primary, #ffffff);
          letter-spacing: -0.3px;
        }

        .pillar-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: var(--text-muted, #94a3b8);
        }

        @media (max-width: 768px) {
          .about-main-title {
            font-size: 26px;
          }
          .pillar-card {
            padding: 22px 18px;
          }
        }
      `}</style>
    </div>
  );
}
