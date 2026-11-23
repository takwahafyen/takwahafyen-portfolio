"use client";

import { portfolioArea } from "@/data/site";
import PortfolioLine from "./ui/portfolio-line";
import PortfolioMarquee from "./ui/portfolio-marquee";
import PortfolioLineModal from "./ui/portfolio-line-modal";
import { useTranslations } from "next-intl";

export default function PortfolioArea() {
  const t = useTranslations("projects");
  const items = t.raw("items");

  return (
    <section id="works" className="portfolio-area over-hidden pb-140 pt-60">
      <PortfolioMarquee />

      <div className="portfolio-wrapper position-relative mt-50">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-60">
              <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                {t("label")}
              </span>
              <h2 className="text-white section-title">{t("title")}</h2>
            </div>
          </div>

          {/* Render all 6 flagship projects */}
          <div className="row g-4 portfolio-grid">
            {portfolioArea?.map((item, i) => {
              const itemText = items && items[i] ? items[i] : {};
              return (
                <div
                  key={item.id || i}
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
