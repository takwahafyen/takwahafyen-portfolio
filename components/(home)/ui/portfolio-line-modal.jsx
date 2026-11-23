"use client";

import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearPortfolioInfo } from "@/redux/features/portfolio/poftfolioSlice";
import { useTranslations } from "next-intl";

export default function PortfolioLineModal() {
  const t = useTranslations("projects");
  const portfolioInfo = useSelector((state) =>
    state.portfolio ? state.portfolio.portfolioInfo : null
  );

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (portfolioInfo) {
      setShow(true);
    }
  }, [portfolioInfo]);

  const handleClose = () => setShow(false);

  if (!portfolioInfo) return null;

  const {
    title,
    client,
    duration,
    category,
    tagline,
    description,
    KeyAchievements,
    technologies,
    videoUrl,
    githubUrl,
    liveUrl,
    apiUrl,
    metrics,
  } = portfolioInfo;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      onExited={() => dispatch(clearPortfolioInfo())}
      size="lg"
      aria-labelledby="portfolio-modal-title"
      centered
    >
      <div className="portfolio-modal-2026">
        {/* Modal Top Bar */}
        <div className="d-flex justify-content-between align-items-center mb-20 pb-15 border-bottom border-secondary-subtle">
          <div className="d-flex align-items-center gap-2">
            {category && (
              <span className="modal-category-badge">
                {category}
              </span>
            )}
            {metrics && (
              <span className="modal-metric-badge">
                <i className="fas fa-bolt text-warning mr-1" />
                {metrics}
              </span>
            )}
          </div>
          <button
            onClick={handleClose}
            className="modal-close-btn"
            aria-label={t("close")}
          >
            ✕
          </button>
        </div>

        <Modal.Body className="p-0">
          {/* Video Walkthrough if present */}
          {videoUrl && (
            <div className="modal-video-wrapper mb-25">
              <iframe
                src={videoUrl}
                width="100%"
                height="380"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={title || "Architecture Video"}
                className="modal-iframe"
              />
            </div>
          )}

          {/* Project Title & Tagline */}
          <h2 id="portfolio-modal-title" className="modal-title mb-8">
            {title}
          </h2>
          {tagline && (
            <p className="modal-tagline mb-20">
              {tagline}
            </p>
          )}

          {/* External Production Links */}
          <div className="modal-links-group d-flex flex-wrap gap-2 mb-25">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn modal-link-github"
              >
                <i className="fab fa-github mr-2" />
                {t("github")}
              </a>
            )}
            {liveUrl && liveUrl !== githubUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn modal-link-live"
              >
                <i className="fas fa-external-link-alt mr-2" />
                {t("liveDemo")}
              </a>
            )}
            {apiUrl && (
              <a
                href={apiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-link-btn modal-link-api"
              >
                <i className="fas fa-server mr-2" />
                Live API
              </a>
            )}
          </div>

          {/* Meta Info: Client & Duration */}
          <div className="modal-meta-grid mb-25">
            <div className="meta-box">
              <span className="meta-label">{t("client")}:</span>
              <span className="meta-val">{client || "—"}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">{t("duration")}:</span>
              <span className="meta-val">{duration || "—"}</span>
            </div>
          </div>

          {/* System Highlights / Description */}
          {description?.length > 0 && (
            <div className="modal-section mb-25">
              <h4 className="section-heading mb-12">
                <i className="fas fa-code-branch mr-2 theme-color" />
                {t("description")}
              </h4>
              <ul className="modal-bullet-list">
                {description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Technical Metrics */}
          {KeyAchievements?.length > 0 && (
            <div className="modal-section mb-25">
              <h4 className="section-heading mb-12">
                <i className="fas fa-check-circle mr-2 text-success" />
                {t("keyAchievements")}
              </h4>
              <ul className="modal-bullet-list">
                {KeyAchievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies & Tooling */}
          {technologies?.length > 0 && (
            <div className="modal-section">
              <h4 className="section-heading mb-12">
                <i className="fas fa-layer-group mr-2 text-cyan" />
                {t("tools")}
              </h4>
              <div className="modal-tech-pills d-flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span key={i} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Modal.Body>
      </div>

      <style jsx>{`
        .portfolio-modal-2026 {
          background: #050c1a;
          color: #fff;
          border-radius: 16px;
          padding: 30px;
          border: 1px solid rgba(250, 204, 21, 0.3);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(250, 204, 21, 0.15);
        }

        .modal-category-badge {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #e2e8f0;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
        }

        .modal-metric-badge {
          background: rgba(250, 204, 21, 0.12);
          border: 1px solid rgba(250, 204, 21, 0.3);
          color: #facc15;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 6px;
        }

        .modal-close-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .modal-close-btn:hover {
          background: #facc15;
          color: #050c1a;
          border-color: #facc15;
          transform: rotate(90deg);
        }

        .modal-iframe {
          border-radius: 12px;
          border: 1px solid rgba(250, 204, 21, 0.3);
        }

        .modal-title {
          color: #ffffff;
          font-weight: 700;
          font-size: 26px;
          letter-spacing: -0.3px;
        }

        .modal-tagline {
          color: #facc15;
          font-size: 15.5px;
          font-weight: 600;
        }

        .modal-links-group {
          gap: 10px;
        }

        .modal-link-btn {
          display: inline-flex;
          align-items: center;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .modal-link-github {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .modal-link-github:hover {
          background: #ffffff;
          color: #050c1a;
        }

        .modal-link-live {
          background: rgba(0, 210, 255, 0.15);
          color: #00d2ff;
          border: 1px solid rgba(0, 210, 255, 0.35);
        }

        .modal-link-live:hover {
          background: #00d2ff;
          color: #050c1a;
        }

        .modal-link-api {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.35);
        }

        .modal-link-api:hover {
          background: #c084fc;
          color: #050c1a;
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 14px 18px;
        }

        .meta-label {
          color: #94a3b8;
          font-size: 13px;
          display: block;
        }

        .meta-val {
          color: #f1f5f9;
          font-weight: 600;
          font-size: 14px;
        }

        .section-heading {
          font-size: 16px;
          font-weight: 700;
          color: #f1f5f9;
          letter-spacing: -0.2px;
        }

        .text-cyan {
          color: #00d2ff;
        }

        .modal-bullet-list {
          padding-inline-start: 18px;
          margin: 0;
        }

        .modal-bullet-list li {
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .modal-tech-pills {
          gap: 8px;
        }

        .modal-tech-tag {
          background: rgba(250, 204, 21, 0.12);
          color: #facc15;
          border: 1px solid rgba(250, 204, 21, 0.3);
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 600;
        }

        @media (max-width: 576px) {
          .portfolio-modal-2026 {
            padding: 20px 16px;
          }
          .modal-title {
            font-size: 20px;
          }
          .modal-iframe {
            height: 240px;
          }
        }
      `}</style>
    </Modal>
  );
}
