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
        <h2 className="text-white mb-25 about-main-title">
          {t("title")}
        </h2>
        <p className="lead-text text-light-muted mx-auto">
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
              <h3 className="pillar-title text-white mb-12">
                {pillar.title}
              </h3>
              <p className="pillar-desc mb-0">
                {pillar.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Philosophy Quote Bar */}
      <div className="philosophy-bar mt-40 p-4 rounded-3 text-center">
        <i className="fas fa-quote-left text-muted mr-3 mb-2" />
        <span className="philosophy-text font-italic text-white">
          &ldquo;{t("quote")}&rdquo;
        </span>
        <i className="fas fa-quote-right text-muted ml-3 mt-2" />
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
        }

        .lead-text {
          font-size: 17px;
          line-height: 1.7;
          color: #cbd5e1;
          max-width: 820px;
        }

        .pillar-card {
          background: rgba(22, 27, 46, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 30px 26px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .pillar-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 14px;
          padding: 1px;
          background: linear-gradient(135deg, rgba(158, 240, 26, 0.25), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .pillar-card:hover {
          transform: translateY(-6px);
          background: rgba(26, 33, 56, 0.85);
          border-color: rgba(158, 240, 26, 0.35);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(158, 240, 26, 0.1);
        }

        .pillar-card:hover::before {
          opacity: 1;
        }

        .pillar-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(158, 240, 26, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(158, 240, 26, 0.25);
          transition: all 0.3s ease;
        }

        .pillar-card:hover .pillar-icon-box {
          background: #9ef01a;
          transform: scale(1.05);
        }

        .pillar-icon {
          font-size: 22px;
          color: #9ef01a;
          transition: color 0.3s ease;
        }

        .pillar-card:hover .pillar-icon {
          color: #0c0e1a;
        }

        .pillar-title {
          font-size: 19px;
          font-weight: 600;
          letter-spacing: -0.2px;
        }

        .pillar-desc {
          font-size: 14.5px;
          color: #94a3b8;
          line-height: 1.6;
        }

        .philosophy-bar {
          background: rgba(158, 240, 26, 0.05);
          border: 1px dashed rgba(158, 240, 26, 0.3);
          border-radius: 12px;
        }

        .philosophy-text {
          font-size: 17px;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .about-main-title {
            font-size: 26px;
          }
          .lead-text {
            font-size: 15px;
          }
          .pillar-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </div>
  );
}
