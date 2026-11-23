"use client";

import React, { useState } from "react";
import { portfolioArea } from "@/data/site";
import PortfolioLine from "./ui/portfolio-line";
import PortfolioMarquee from "./ui/portfolio-marquee";
import PortfolioLineModal from "./ui/portfolio-line-modal";
import { useTranslations } from "next-intl";

export default function PortfolioArea() {
  const t = useTranslations("projects");
  const items = t.raw("items");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { key: "all", label: t("filterAll") || "All Architectures" },
    { key: "ai", label: t("filterAi") || "Agentic AI & Voice" },
    { key: "ml", label: t("filterMl") || "Industry 4.0 & ML" },
    { key: "fullstack", label: t("filterFullstack") || "Full-Stack & Cloud" },
  ];

  // Most valuable flagship projects first by default
  const filteredProjects = activeCategory === "all"
    ? portfolioArea
    : portfolioArea.filter((item) => item.categoryKey === activeCategory);

  return (
    <section id="works" className="portfolio-area over-hidden pb-140 pt-60">
      <PortfolioMarquee />

      <div className="portfolio-wrapper position-relative mt-50">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-40">
              <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                {t("label")}
              </span>
              <h2 className="text-white section-title mb-25">{t("title")}</h2>

              {/* Interactive Category Filter Pills */}
              <div className="category-filter-wrap d-flex flex-wrap justify-content-center gap-2 mt-20">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setActiveCategory(cat.key)}
                      className={`filter-pill-btn ${isActive ? "active" : ""}`}
                      type="button"
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Render Filtered Projects */}
          <div className="row g-4 portfolio-grid">
            {filteredProjects?.map((item) => {
              // Find matching text item by ID
              const originalIndex = portfolioArea.findIndex((p) => p.id === item.id);
              const itemText = items && items[originalIndex] ? items[originalIndex] : {};
              return (
                <div
                  key={item.id}
                  className="col-xl-6 col-lg-6 col-md-12 col-12 mb-35 d-flex align-items-stretch"
                >
                  <PortfolioLine
                    data={{
                      ...item,
                      ...itemText,
                      KeyAchievements: itemText.achievements,
                    }}
                  />
                </div>
              );
            })}
          </div>

          <PortfolioLineModal />
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
          color: var(--text-primary, #ffffff);
        }

        .category-filter-wrap {
          gap: 10px;
          padding: 8px;
        }

        .filter-pill-btn {
          background: var(--bg-secondary, #0b1528);
          color: var(--text-secondary, #cbd5e1);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.12));
          padding: 10px 22px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
        }

        .filter-pill-btn:hover {
          color: var(--yellow-accent, #facc15);
          border-color: var(--yellow-accent, #facc15);
          transform: translateY(-2px);
        }

        .filter-pill-btn.active {
          background: var(--yellow-accent, #facc15);
          color: #050c1a !important;
          border-color: var(--yellow-accent, #facc15);
          box-shadow: 0 4px 16px var(--yellow-glow, rgba(250, 204, 21, 0.35));
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 26px;
          }
          .filter-pill-btn {
            font-size: 12.5px;
            padding: 8px 16px;
          }
        }
      `}</style>
    </section>
  );
}
