"use client";
import React from "react";
import EducationList from "./ui/education-list";
import { education } from "@/data/site";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("education");
  const items = t.raw("items");

  return (
    <section id="education" className="education-area over-hidden pt-140 pb-120">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Education Timeline */}
          <div className="col-xl-7 col-lg-7 col-md-12 col-12 mb-40 mb-lg-0">
            <div className="title mb-35">
              <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                {t("label")}
              </span>
              <h2 className="text-white section-title">{t("title")}</h2>
            </div>

            <div className="education-wrapper pt-10">
              <ul className="education-content list-unstyled p-0 m-0">
                {education?.map((item, i) => (
                  <EducationList key={i} data={{ ...item, ...(items ? items[i] : {}) }} />
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: 2026 Engineering Credentials & Academic Pillars HUD (Replaces Personal Photo!) */}
          <div className="col-xl-5 col-lg-5 col-md-12 col-12">
            <div
              className="credentials-card"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="card-badge mb-20 d-inline-flex align-items-center">
                <i className="fas fa-award mr-2 theme-color" />
                <span>{t("credentials")}</span>
              </div>

              <h3 className="cred-title text-white mb-15">
                Engineering Foundations &amp; Rigor
              </h3>

              <p className="cred-text text-muted mb-25">
                Rigorous Tunisian preparatory engineering cycle (IPEIM) followed by 3 years of specialized national engineering training (ENIG) in distributed systems, operating systems, and computer architecture.
              </p>

              <div className="competencies-list d-flex flex-column gap-3">
                <div className="comp-item d-flex align-items-center">
                  <div className="comp-icon mr-12">
                    <i className="fas fa-network-wired text-cyan" />
                  </div>
                  <div>
                    <h5 className="comp-name text-white mb-0">Distributed Systems &amp; Networks</h5>
                    <span className="comp-sub text-muted">High availability, low-latency microservices</span>
                  </div>
                </div>

                <div className="comp-item d-flex align-items-center">
                  <div className="comp-icon mr-12">
                    <i className="fas fa-shield-alt text-success" />
                  </div>
                  <div>
                    <h5 className="comp-name text-white mb-0">System Security &amp; Cryptography</h5>
                    <span className="comp-sub text-muted">OWASP hardening, SAST, non-root isolation</span>
                  </div>
                </div>

                <div className="comp-item d-flex align-items-center">
                  <div className="comp-icon mr-12">
                    <i className="fas fa-square-root-alt text-warning" />
                  </div>
                  <div>
                    <h5 className="comp-name text-white mb-0">Applied Mathematics &amp; Algorithms</h5>
                    <span className="comp-sub text-muted">Linear algebra, optimization &amp; ML algorithms</span>
                  </div>
                </div>
              </div>

              <div className="cred-footer mt-30 pt-20 border-top border-secondary-subtle d-flex justify-content-between align-items-center">
                <span className="footer-stat">
                  <i className="fas fa-medal theme-color mr-1" /> Honors (16.43/20)
                </span>
                <span className="footer-stat">
                  <i className="fas fa-university text-cyan mr-1" /> ENIG &bull; IPEIM
                </span>
              </div>
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

        .credentials-card {
          background: var(--bg-secondary, #112240);
          backdrop-filter: blur(14px);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.1));
          border-radius: 16px;
          padding: 35px 30px;
          transition: all 0.3s ease;
        }

        .credentials-card:hover {
          border-color: var(--yellow-accent, #facc15);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3), 0 0 25px var(--yellow-glow, rgba(250, 204, 21, 0.2));
        }

        .card-badge {
          background: rgba(250, 204, 21, 0.12);
          border: 1px solid rgba(250, 204, 21, 0.35);
          border-radius: 20px;
          padding: 5px 14px;
          font-size: 12.5px;
          font-weight: 700;
          color: var(--yellow-accent, #facc15);
        }

        .cred-title {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.2px;
          color: var(--text-primary, #ffffff);
        }

        .cred-text {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--text-secondary, #cbd5e1);
        }

        .comp-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.06));
          border-radius: 10px;
          padding: 12px 16px;
          transition: all 0.25s ease;
        }

        .comp-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--yellow-accent, #facc15);
          transform: translateX(4px);
        }

        .comp-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }

        .text-cyan {
          color: #00d2ff;
        }

        .comp-name {
          font-size: 14.5px;
          font-weight: 600;
        }

        .comp-sub {
          font-size: 12px;
          color: #94a3b8 !important;
        }

        .footer-stat {
          font-size: 13px;
          font-weight: 600;
          color: #e2e8f0;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 26px;
          }
          .credentials-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
