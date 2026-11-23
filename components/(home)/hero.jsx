"use client";
import React from "react";
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
      {/* Background ambient lighting effects (Bleu Marine & Jaune) */}
      <div className="hero-glow-1 position-absolute" />
      <div className="hero-glow-2 position-absolute" />
      <div className="hero-grid-pattern position-absolute" />

      <div className="container min-vh-100 d-flex align-items-center position-relative z-index11 hero-content-container">
        <div className="row align-items-center w-100 mx-0 g-4">
          {/* Left Column: Recruiter-Oriented Headline & Actions */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-12 mb-4 mb-lg-0">
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
                className="hero-name mb-15"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="hero-greeting d-block">
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
                <h2 className="title-lead mb-10">
                  Software Engineer &amp; AI Architect
                </h2>
                <div className="specialty-pills d-flex flex-wrap gap-2 mb-20">
                  <span className="spec-badge">Full-Stack</span>
                  <span className="spec-badge spec-highlight">Agentic AI</span>
                  <span className="spec-badge">DevOps &amp; Security</span>
                  <span className="spec-badge">QA Automation</span>
                </div>

                <div className="typing-box d-flex align-items-center">
                  <span className="typing-prefix mr-2">
                    {t("passionate")}:
                  </span>
                  <TypeAnimation
                    className="typer-text font-weight-bold"
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
                  offset={-70}
                  className="btn btn-primary-yellow cursor-pointer"
                >
                  <i className="fas fa-layer-group mr-2" />
                  {t("explore")}
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={700}
                  offset={-70}
                  className="btn btn-outline-navy cursor-pointer"
                >
                  <i className="fas fa-paper-plane mr-2" />
                  {t("cta")}
                </ScrollLink>
              </div>

              {/* Social Connect Strip directly under CTA (eliminates right-floating overlap!) */}
              <div className="hero-social-strip d-flex align-items-center gap-2 mt-30 pt-10">
                <span className="social-strip-label mr-2">Connect:</span>
                <a
                  href="https://linkedin.com/in/takwa-hafyen-472264282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  href="https://github.com/takwahafyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://wa.me/21629196616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-icon hero-social-wa"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp" />
                </a>
                <a
                  href="mailto:takwa.hafyen@gmail.com"
                  className="hero-social-icon"
                  title="Email"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 2026 Interactive Architecture & Telemetry HUD */}
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
                  <i className="fas fa-terminal mr-2 yellow-text" />
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
                        <i className="fas fa-microphone-alt mr-2 yellow-text" />
                        LiveKit SFU + Silero VAD
                      </span>
                      <span className="tel-pill tel-pill-yellow">&lt;350ms Barge-In</span>
                    </div>
                    <div className="tel-desc">
                      Real-time streaming STT (Deepgram) &bull; OpenAI TTS &bull; Sub-second conversational turnaround
                    </div>
                  </div>

                  {/* Module 2: CrewAI Multi-Agent Cluster */}
                  <div className="telemetry-item">
                    <div className="telemetry-head d-flex justify-content-between align-items-center">
                      <span className="tel-title">
                        <i className="fas fa-network-wired mr-2 text-cyan" />
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
                        <i className="fas fa-shield-alt mr-2 yellow-text" />
                        Security &amp; QA Pipeline
                      </span>
                      <span className="tel-pill tel-pill-yellow">100% Passing</span>
                    </div>
                    <div className="tel-desc">
                      CodeQL SAST Clean &bull; Trivy Container Scan &bull; Cypress E2E &bull; PHPStan Level 8 &bull; Ragas AI Eval
                    </div>
                  </div>
                </div>

                {/* Footer status summary */}
                <div className="terminal-footer mt-3 pt-3 d-flex flex-wrap justify-content-between align-items-center">
                  <span className="mono-stat">
                    <i className="fas fa-bolt yellow-text mr-1" /> MTTR: &lt;5s
                  </span>
                  <span className="mono-stat">
                    <i className="fas fa-bullseye yellow-text mr-1" /> Precision: 95%
                  </span>
                  <span className="mono-stat">
                    <i className="fas fa-shield-alt text-cyan mr-1" /> OWASP Top 10
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-2026-wrapper {
          min-height: 100vh;
          background: var(--bg-primary, #0a192f);
          position: relative;
        }

        .hero-content-container {
          padding-top: 135px;
          padding-bottom: 70px;
        }

        .hero-glow-1 {
          top: 15%;
          left: 5%;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--yellow-glow, rgba(250, 204, 21, 0.12)) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
        }

        .hero-glow-2 {
          bottom: 10%;
          right: 5%;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14, 116, 144, 0.15) 0%, transparent 70%);
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
          background: rgba(250, 204, 21, 0.1);
          border: 1px solid rgba(250, 204, 21, 0.35);
          border-radius: 30px;
          padding: 6px 18px;
          backdrop-filter: blur(8px);
        }

        .pulse-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background-color: var(--yellow-accent, #facc15);
          box-shadow: 0 0 10px var(--yellow-accent, #facc15);
          animation: pulseAnim 2s infinite;
        }

        @keyframes pulseAnim {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.7);
          }
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 8px rgba(250, 204, 21, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(250, 204, 21, 0);
          }
        }

        .status-text {
          font-size: 13px;
          font-weight: 600;
          color: var(--yellow-accent, #facc15);
          letter-spacing: 0.5px;
        }

        .hero-greeting {
          font-size: 20px;
          color: var(--yellow-accent, #facc15);
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .hero-name {
          font-size: 52px;
          font-weight: 800;
          color: var(--text-primary, #ffffff);
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .title-lead {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary, #ffffff);
        }

        .specialty-pills {
          margin-top: 12px;
        }

        .spec-badge {
          background: var(--bg-secondary, rgba(17, 34, 64, 0.8));
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.12));
          color: var(--text-secondary, #cbd5e1);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .spec-highlight {
          border-color: var(--yellow-accent, #facc15);
          color: var(--yellow-accent, #facc15);
          background: rgba(250, 204, 21, 0.08);
        }

        .typing-box {
          font-size: 18px;
          min-height: 32px;
        }

        .typing-prefix {
          color: var(--text-secondary, #94a3b8);
        }

        :global(.typer-text) {
          color: var(--yellow-accent, #facc15) !important;
        }

        .btn-primary-yellow {
          background: var(--yellow-accent, #facc15);
          color: #0a192f !important;
          border: 1px solid var(--yellow-accent, #facc15);
          padding: 12px 26px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .btn-primary-yellow:hover {
          background: #ffd600;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px var(--yellow-glow, rgba(250, 204, 21, 0.35));
        }

        .btn-outline-navy {
          background: transparent;
          color: var(--text-primary, #ffffff) !important;
          border: 1px solid var(--yellow-accent, #facc15);
          padding: 12px 24px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .btn-outline-navy:hover {
          background: var(--yellow-accent, #facc15);
          color: #0a192f !important;
          transform: translateY(-2px);
        }

        .social-strip-label {
          font-size: 13px;
          color: var(--text-muted, #94a3b8);
          font-weight: 500;
        }

        .hero-social-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-secondary, rgba(17, 34, 64, 0.8));
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.12));
          color: var(--text-secondary, #cbd5e1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .hero-social-icon:hover {
          color: var(--yellow-accent, #facc15);
          border-color: var(--yellow-accent, #facc15);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--yellow-glow, rgba(250, 204, 21, 0.3));
        }

        .hero-social-wa:hover {
          color: #25d366 !important;
          border-color: #25d366 !important;
        }

        /* Terminal styling in Bleu Marine & Jaune */
        .terminal-card {
          background: var(--bg-secondary, #0d1b2a);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.1));
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          transition: all 0.3s ease;
        }

        .terminal-card:hover {
          border-color: var(--yellow-accent, #facc15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 25px var(--yellow-glow, rgba(250, 204, 21, 0.15));
        }

        .terminal-header {
          background: rgba(10, 25, 47, 0.95);
          padding: 12px 18px;
          border-bottom: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
        }

        .terminal-dots {
          gap: 6px;
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .terminal-title {
          font-family: monospace;
          font-size: 13px;
          color: var(--text-secondary, #cbd5e1);
        }

        .terminal-status-badge {
          font-family: monospace;
          font-size: 11px;
          font-weight: 700;
          color: var(--yellow-accent, #facc15);
          background: rgba(250, 204, 21, 0.12);
          border: 1px solid rgba(250, 204, 21, 0.3);
          border-radius: 12px;
          padding: 3px 10px;
        }

        .live-indicator {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--yellow-accent, #facc15);
          margin-right: 4px;
          animation: pulseAnim 1.5s infinite;
        }

        .terminal-body {
          padding: 20px 22px;
          font-family: monospace;
        }

        .cmd-line {
          font-size: 13px;
        }

        .prompt-path {
          color: var(--yellow-accent, #facc15);
          font-weight: 700;
        }

        .prompt-cmd {
          color: var(--text-primary, #ffffff);
        }

        .telemetry-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .telemetry-item {
          background: rgba(10, 25, 47, 0.6);
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.06));
          border-radius: 10px;
          padding: 12px 14px;
          transition: all 0.25s ease;
        }

        .telemetry-item:hover {
          background: rgba(17, 34, 64, 0.85);
          border-color: rgba(250, 204, 21, 0.3);
        }

        .tel-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary, #ffffff);
        }

        .tel-pill {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 12px;
        }

        .tel-pill-yellow {
          background: rgba(250, 204, 21, 0.15);
          color: var(--yellow-accent, #facc15);
          border: 1px solid rgba(250, 204, 21, 0.4);
        }

        .tel-pill-cyan {
          background: rgba(56, 189, 248, 0.15);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.35);
        }

        .tel-pill-purple {
          background: rgba(167, 139, 250, 0.15);
          color: #a78bfa;
          border: 1px solid rgba(167, 139, 250, 0.35);
        }

        .tel-desc {
          font-size: 11.5px;
          color: var(--text-muted, #94a3b8);
          margin-top: 5px;
          line-height: 1.4;
        }

        .terminal-footer {
          border-top: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
        }

        .mono-stat {
          font-size: 12px;
          color: var(--text-secondary, #94a3b8);
          font-weight: 500;
        }

        .yellow-text {
          color: var(--yellow-accent, #facc15);
        }

        .text-cyan {
          color: #38bdf8;
        }

        .text-purple {
          color: #a78bfa;
        }

        @media (max-width: 991px) {
          .hero-content-container {
            padding-top: 110px;
          }
          .hero-name {
            font-size: 38px;
          }
          .title-lead {
            font-size: 20px;
          }
        }

        @media (max-width: 576px) {
          .hero-name {
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}
