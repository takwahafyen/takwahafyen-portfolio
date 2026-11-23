"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPortfolioInfo } from "@/redux/features/portfolio/poftfolioSlice";
import { useTranslations } from "next-intl";

export default function PortfolioLine({ data }) {
  const dispatch = useDispatch();
  const t = useTranslations("projects");

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const openPortfolioModal = () => {
    dispatch(addPortfolioInfo(data));
    setTimeout(() => {
      const modalElement = document.getElementById("portfolio-area-modal");
      if (modalElement && window.bootstrap) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 100);
  };

  const techList = Array.isArray(data.technologies)
    ? data.technologies
    : typeof data.technologies === "string"
    ? data.technologies.split(",")
    : [];

  const getCategoryIcon = (key) => {
    switch (key) {
      case "ai":
        return "fas fa-brain text-cyan";
      case "ml":
        return "fas fa-microchip text-warning";
      default:
        return "fas fa-layer-group theme-color";
    }
  };

  return (
    <div className="portfolio-card-2026 d-flex flex-column justify-content-between w-100">
      <div>
        {/* Header: Category Badge & Performance Metric */}
        <div className="card-top-bar d-flex flex-wrap justify-content-between align-items-center mb-15 gap-2">
          <span className="category-pill d-inline-flex align-items-center">
            <i className={`${getCategoryIcon(data.categoryKey)} mr-2`} />
            {data.category}
          </span>
          {data.metrics && (
            <span className="metric-chip">
              <i className="fas fa-bolt text-warning mr-1" />
              {data.metrics}
            </span>
          )}
        </div>

        {/* Project Title & Client Badge */}
        <div className="title-block mb-12">
          <h3 className="project-title-2026 mb-1">
            {data.title}
          </h3>
          {data.client && (
            <span className="client-subtitle">
              <i className="fas fa-building mr-1" />
              {data.client}
            </span>
          )}
        </div>

        {/* Tagline / Pitch */}
        {data.tagline && (
          <p className="project-tagline mb-15">
            {data.tagline}
          </p>
        )}

        {/* Key Technical Highlights */}
        {data.description && Array.isArray(data.description) && (
          <ul className="project-highlights mb-20">
            {data.description.slice(0, 2).map((item, idx) => (
              <li key={idx}>
                <i className="fas fa-chevron-right highlight-icon mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Pills */}
        <div className="tech-container mb-25">
          {techList.slice(0, 8).map((tech, i) => (
            <span key={i} className="tech-badge">
              {tech.trim()}
            </span>
          ))}
          {techList.length > 8 && (
            <span className="tech-badge-more">
              +{techList.length - 8} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Action Links */}
      <div className="card-actions pt-20 border-top border-secondary-subtle d-flex flex-wrap align-items-center justify-content-between gap-2">
        <div className="d-flex flex-wrap gap-2">
          {data.githubUrl && (
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn-github"
              title="GitHub Repository"
            >
              <i className="fab fa-github mr-1" />
              {t("github") || "GitHub"}
            </a>
          )}
          {data.liveUrl && data.liveUrl !== data.githubUrl && (
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn-live"
              title="Live Deployment"
            >
              <i className="fas fa-external-link-alt mr-1" />
              {t("liveDemo") || "Live Demo"}
            </a>
          )}
          {data.videoUrl && (
            <a
              href={data.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-btn-video"
              title="Watch Walkthrough"
            >
              <i className="fas fa-play mr-1" />
              {t("video") || "Video"}
            </a>
          )}
        </div>

        <button
          onClick={openPortfolioModal}
          className="action-btn action-btn-details ml-auto"
          aria-label="View Full Architecture Details"
        >
          <span>Architecture Details</span>
          <i className="fas fa-arrow-right ml-2" />
        </button>
      </div>

      <style jsx>{`
        .portfolio-card-2026 {
          background: var(--bg-secondary, #112240);
          backdrop-filter: blur(14px);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.09));
          border-radius: 16px;
          padding: 30px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .portfolio-card-2026:hover {
          transform: translateY(-6px);
          border-color: var(--yellow-accent, #facc15);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 0 0 25px var(--yellow-glow, rgba(250, 204, 21, 0.15));
        }

        .category-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 600;
          color: #e2e8f0;
          letter-spacing: 0.3px;
        }

        .text-cyan {
          color: #00d2ff;
        }

        .metric-chip {
          background: rgba(250, 204, 21, 0.12);
          border: 1px solid rgba(250, 204, 21, 0.3);
          border-radius: 6px;
          padding: 3px 10px;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--yellow-accent, #facc15);
          letter-spacing: 0.2px;
        }

        .project-title-2026 {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary, #ffffff);
          letter-spacing: -0.3px;
        }

        .client-subtitle {
          font-size: 13px;
          font-weight: 600;
          color: var(--yellow-accent, #facc15);
        }

        .project-tagline {
          font-size: 14.5px;
          color: var(--text-secondary, #cbd5e1);
          line-height: 1.5;
        }

        .project-highlights {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .project-highlights li {
          display: flex;
          align-items: baseline;
          font-size: 13.5px;
          color: var(--text-muted, #94a3b8);
          line-height: 1.55;
          margin-bottom: 8px;
        }

        .highlight-icon {
          font-size: 10px;
          color: var(--yellow-accent, #facc15);
          flex-shrink: 0;
        }

        .tech-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-badge {
          display: inline-block;
          color: #cbd5e1;
          padding: 4px 11px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .tech-badge:hover {
          background: rgba(250, 204, 21, 0.15);
          color: var(--yellow-accent, #facc15);
          border-color: rgba(250, 204, 21, 0.4);
        }

        .tech-badge-more {
          display: inline-block;
          color: #94a3b8;
          padding: 4px 8px;
          font-size: 11px;
          font-weight: 600;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 8px;
          transition: all 0.25s ease;
          text-decoration: none;
          cursor: pointer;
        }

        .action-btn-github {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.16);
        }

        .action-btn-github:hover {
          background: #ffffff;
          color: #0c0e1a;
          border-color: #ffffff;
        }

        .action-btn-live {
          background: rgba(0, 210, 255, 0.15);
          color: #00d2ff;
          border: 1px solid rgba(0, 210, 255, 0.35);
        }

        .action-btn-live:hover {
          background: #00d2ff;
          color: #0c0e1a;
        }

        .action-btn-video {
          background: rgba(255, 75, 75, 0.12);
          color: #ff6b6b;
          border: 1px solid rgba(255, 75, 75, 0.3);
        }

        .action-btn-video:hover {
          background: #ff6b6b;
          color: #0c0e1a;
        }

        .action-btn-details {
          background: var(--yellow-accent, #facc15);
          color: #0a192f;
          border: 1px solid var(--yellow-accent, #facc15);
          font-weight: 700;
        }

        .action-btn-details:hover {
          background: #ffd600;
          color: #0a192f;
          transform: translateX(3px);
          box-shadow: 0 4px 15px var(--yellow-glow, rgba(250, 204, 21, 0.4));
        }

        @media (max-width: 576px) {
          .portfolio-card-2026 {
            padding: 22px 18px;
          }
          .project-title-2026 {
            font-size: 19px;
          }
          .card-actions {
            flex-direction: column;
            align-items: stretch !important;
          }
          .action-btn {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
