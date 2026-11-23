"use client";
import React from "react";
import HeroSociable from "./ui/hero-sociable";
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const rawTyped = t.raw("typed");
  const typedSequence = Array.isArray(rawTyped)
    ? rawTyped.flatMap((text) => [text, 1600])
    : ["Production-Grade Agentic AI", 1600];

  return (
    <div id="home" className="slider-area hero-2026-wrapper position-relative over-hidden">
      {/* Background ambient lighting effects */}
      <div className="hero-glow-1 position-absolute" />
      <div className="hero-glow-2 position-absolute" />
      <div className="hero-grid-pattern position-absolute" />

      <div className="container min-vh-100 d-flex align-items-center position-relative z-index11 pt-120 pb-80">
        <div className="row align-items-center w-100 mx-0">
          {/* Left Column: Recruiter-Oriented Headline & Actions */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-5 mb-lg-0">
            <div className="hero-content-box">
              {/* Status Badge */}
              <div
                className="status-pill d-inline-flex align-items-center mb-25"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <span className="pulse-dot mr-2"></span>
                <span className="status-text">{t("statusBadge")}</span>
              </div>

              {/* Name */}
              <h1
                className="hero-name white-text mb-15"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="hero-greeting d-block theme-color">
                  {t("hello")}
                </span>
                Takwa Hafyen
              </h1>

              {/* Professional Title & Dynamic Typing */}
              <div
                className="hero-subtitle mb-25"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <h2 className="title-lead text-white mb-10">
                  Software Engineer &amp; AI Architect
                </h2>
                <div className="specialty-pills d-flex flex-wrap gap-2 mb-20">
                  <span className="spec-badge">Full-Stack</span>
                  <span className="spec-badge spec-highlight">Agentic AI</span>
                  <span className="spec-badge">DevOps &amp; Security</span>
                  <span className="spec-badge">QA Automation</span>
                </div>

                <div className="typing-box d-flex align-items-center">
                  <span className="typing-prefix text-white-50 mr-2">
                    {t("passionate")}:
                  </span>
                  <TypeAnimation
                    className="typer-text theme-color font-weight-bold"
                    sequence={typedSequence}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                  />
                </div>
              </div>

              {/* Call to Actions */}
              <div
                className="hero-cta-group d-flex flex-wrap align-items-center gap-3 pt-10"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <ScrollLink
                  to="works"
                  smooth={true}
                  duration={700}
                  offset={-60}
                  className="btn btn-primary-2026 cursor-pointer"
                >
                  <i className="fas fa-layer-group mr-2" />
                  {t("explore")}
                </ScrollLink>

                <a
                  href="https://wa.me/21629196616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp-2026"
                >
                  <i className="fab fa-whatsapp mr-2" />
                  WhatsApp
                </a>

                <a
                  href="https://github.com/takwahafyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary-2026"
                >
                  <i className="fab fa-github mr-2" />
                  GitHub
                </a>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-60}
                  className="btn btn-outline-2026 cursor-pointer"
                >
                  {t("cta")}
                </ScrollLink>
              </div>
            </div>
          </div>

          {/* Right Column: 2026 Interactive Architecture & Telemetry HUD (Replaces Personal Photo!) */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div
              className="terminal-card"
              data-aos="fade-left"
              data-aos-duration="1400"
            >
              {/* Window Bar */}
              <div className="terminal-header d-flex align-items-center justify-content-between">
                <div className="terminal-dots d-flex align-items-center">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="terminal-title">
                  <i className="fas fa-terminal mr-2 theme-color" />
                  {t("terminalTitle")}
                </div>
                <div className="terminal-status-badge">
                  <span className="live-indicator"></span> LIVE
                </div>
              </div>

              {/* Command line */}
              <div className="terminal-body">
                <div className="cmd-line mb-3">
                  <span className="prompt-path">takwa@arch:~$</span>{" "}
                  <span className="prompt-cmd">./orchestrate-cluster.sh --env=production</span>
                </div>

                {/* Telemetry Modules */}
                <div className="telemetry-grid">
                  {/* Module 1: Voice AI Pipeline */}
                  <div className="telemetry-item">
                    <div className="telemetry-head d-flex justify-content-between align-items-center">
                      <span className="tel-title">
                        <i className="fas fa-microphone-alt mr-2 text-cyan" />
                        LiveKit SFU + Silero VAD
                      </span>
                      <span className="tel-pill tel-pill-green">&lt;350ms Barge-In</span>
                    </div>
                    <div className="tel-desc">
                      Real-time streaming STT (Deepgram) &bull; OpenAI TTS &bull; Sub-second conversational turnaround
                    </div>
                  </div>

                  {/* Module 2: CrewAI Multi-Agent Cluster */}
                  <div className="telemetry-item">
                    <div className="telemetry-head d-flex justify-content-between align-items-center">
                      <span className="tel-title">
                        <i className="fas fa-network-wired mr-2 text-warning" />
                        3-Tier CrewAI Cluster
                      </span>
                      <span className="tel-pill tel-pill-cyan">pgvector Hybrid RAG</span>
                    </div>
                    <div className="tel-desc">
                      Tutor Agent &bull; Anti-Hallucination Fact-Checker &bull; Adaptive Quiz Generator &bull; MCP Tools
                    </div>
                  </div>

                  {/* Module 3: Full-Stack & Microservices */}
                  <div className="telemetry-item">
                    <div className="telemetry-head d-flex justify-content-between align-items-center">
                      <span className="tel-title">
                        <i className="fas fa-cubes mr-2 text-purple" />
                        Microservices Architecture
                      </span>
                      <span className="tel-pill tel-pill-purple">Docker Compose</span>
                    </div>
                    <div className="tel-desc">
                      Next.js 16 &bull; Laravel 11 &bull; Elasticsearch 8 &bull; PostgreSQL &bull; Redis &bull; Non-Root UID 1001
                    </div>
                  </div>

                  {/* Module 4: DevOps & QA Rigor */}
                  <div className="telemetry-item">
                    <div className="telemetry-head d-flex justify-content-between align-items-center">
                      <span className="tel-title">
                        <i className="fas fa-shield-check mr-2 text-success" />
                        Security &amp; QA Pipeline
                      </span>
                      <span className="tel-pill tel-pill-green">100% Passing</span>
                    </div>
                    <div className="tel-desc">
                      CodeQL SAST Clean &bull; Trivy Container Scan &bull; Cypress E2E &bull; PHPStan Level 8 &bull; Ragas AI Eval
                    </div>
                  </div>
                </div>

                {/* Footer status summary */}
                <div className="terminal-footer mt-3 pt-3 d-flex flex-wrap justify-content-between align-items-center border-top border-secondary-subtle">
                  <span className="mono-stat text-white-50">
                    <i className="fas fa-bolt text-warning mr-1" /> MTTR: &lt;5s
                  </span>
                  <span className="mono-stat text-white-50">
                    <i className="fas fa-bullseye theme-color mr-1" /> Precision: 95%
                  </span>
                  <span className="mono-stat text-white-50">
                    <i className="fas fa-shield-alt text-cyan mr-1" /> OWASP Top 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Sociable Links */}
      <HeroSociable />

      {/* Modern 2026 Styling */}
      <style jsx>{`
        .hero-2026-wrapper {
          min-height: 100vh;
          background: #090c15;
          position: relative;
        }

        .hero-glow-1 {
          top: 15%;
          left: 5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(158, 240, 26, 0.12) 0%, rgba(158, 240, 26, 0) 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-glow-2 {
          bottom: 10%;
          right: 5%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 210, 255, 0.1) 0%, rgba(0, 210, 255, 0) 70%);
          filter: blur(70px);
          pointer-events: none;
        }

        .hero-grid-pattern {
          inset: 0;
          background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .status-pill {
          background: rgba(158, 240, 26, 0.1);
          border: 1px solid rgba(158, 240, 26, 0.3);
          border-radius: 30px;
          padding: 6px 18px;
          backdrop-filter: blur(8px);
        }

        .pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: #9ef01a;
          box-shadow: 0 0 10px #9ef01a;
          animation: pulseAnim 2s infinite;
        }

        @keyframes pulseAnim {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(158, 240, 26, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 8px rgba(158, 240, 26, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(158, 240, 26, 0);
          }
        }

        .status-text {
          font-size: 13px;
          font-weight: 600;
          color: #9ef01a;
          letter-spacing: 0.5px;
        }

        .hero-name {
          font-size: 54px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .hero-greeting {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 1px;
        }

        .title-lead {
          font-size: 26px;
          font-weight: 700;
          color: #f1f4f9;
        }

        .specialty-pills {
          gap: 8px;
        }

        .spec-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #cbd5e1;
          font-size: 13px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 6px;
        }

        .spec-highlight {
          background: rgba(158, 240, 26, 0.15);
          border-color: rgba(158, 240, 26, 0.4);
          color: #9ef01a;
          font-weight: 600;
        }

        .typing-box {
          font-size: 19px;
          min-height: 38px;
        }

        .typer-text {
          color: #9ef01a;
        }

        .hero-cta-group {
          gap: 14px;
        }

        .btn-primary-2026 {
          background: #9ef01a;
          color: #0c0e1a;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 13px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
          border: 1px solid #9ef01a;
          text-decoration: none;
        }

        .btn-primary-2026:hover {
          background: #b7f86a;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(158, 240, 26, 0.35);
          color: #0c0e1a;
        }

        .btn-whatsapp-2026 {
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 22px;
          border-radius: 8px;
          border: 1px solid rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-whatsapp-2026:hover {
          background: #25d366;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        .btn-secondary-2026 {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          font-weight: 600;
          font-size: 14px;
          padding: 13px 22px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-secondary-2026:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
          color: #fff;
        }

        .btn-outline-2026 {
          background: transparent;
          color: #cbd5e1;
          font-weight: 600;
          font-size: 14px;
          padding: 13px 20px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-outline-2026:hover {
          border-color: #9ef01a;
          color: #9ef01a;
          transform: translateY(-2px);
        }

        /* 2026 Terminal HUD Card */
        .terminal-card {
          background: rgba(17, 24, 39, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(158, 240, 26, 0.08);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .terminal-card:hover {
          border-color: rgba(158, 240, 26, 0.35);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(158, 240, 26, 0.15);
        }

        .terminal-header {
          background: rgba(26, 34, 53, 0.95);
          padding: 12px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .terminal-dots {
          gap: 7px;
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red {
          background: #ff5f56;
        }
        .dot-yellow {
          background: #ffbd2e;
        }
        .dot-green {
          background: #27c93f;
        }

        .terminal-title {
          font-family: monospace;
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
        }

        .terminal-status-badge {
          font-size: 11px;
          font-weight: 700;
          color: #27c93f;
          display: flex;
          align-items: center;
          gap: 5px;
          letter-spacing: 0.5px;
        }

        .live-indicator {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #27c93f;
          display: inline-block;
        }

        .terminal-body {
          padding: 22px 24px;
          font-family: "Fira Code", monospace, sans-serif;
        }

        .cmd-line {
          font-size: 14px;
        }

        .prompt-path {
          color: #9ef01a;
          font-weight: 600;
        }

        .prompt-cmd {
          color: #e2e8f0;
        }

        .telemetry-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .telemetry-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 12px 16px;
          transition: all 0.25s ease;
        }

        .telemetry-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(158, 240, 26, 0.2);
          transform: translateX(4px);
        }

        .tel-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #f8fafc;
        }

        .tel-desc {
          font-size: 12px;
          color: #94a3b8;
          margin-top: 4px;
          line-height: 1.4;
        }

        .tel-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 12px;
          letter-spacing: 0.3px;
        }

        .tel-pill-green {
          background: rgba(158, 240, 26, 0.15);
          color: #9ef01a;
          border: 1px solid rgba(158, 240, 26, 0.35);
        }

        .tel-pill-cyan {
          background: rgba(0, 210, 255, 0.15);
          color: #00d2ff;
          border: 1px solid rgba(0, 210, 255, 0.35);
        }

        .tel-pill-purple {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
          border: 1px solid rgba(168, 85, 247, 0.35);
        }

        .text-cyan {
          color: #00d2ff;
        }
        .text-purple {
          color: #c084fc;
        }

        .mono-stat {
          font-size: 12px;
          font-weight: 500;
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
          .hero-name {
            font-size: 40px;
          }
          .title-lead {
            font-size: 22px;
          }
          .typing-box {
            font-size: 16px;
          }
          .terminal-card {
            margin-top: 35px;
          }
        }

        @media (max-width: 576px) {
          .hero-name {
            font-size: 32px;
          }
          .title-lead {
            font-size: 19px;
          }
          .btn-primary-2026,
          .btn-whatsapp-2026,
          .btn-secondary-2026,
          .btn-outline-2026 {
            width: 100%;
            text-align: center;
          }
          .hero-cta-group {
            flex-direction: column;
            gap: 10px;
          }
          .terminal-body {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
