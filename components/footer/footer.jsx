"use client";
import React from "react";

const email = "takwa.hafyen@gmail.com";

const social = [
  {
    icon: "fab fa-linkedin-in",
    path: "https://www.linkedin.com/in/takwa-hafyen-472264282",
    aria: "LinkedIn",
  },
  {
    icon: "fab fa-github",
    path: "https://github.com/takwahafyen",
    aria: "GitHub",
  },
  {
    icon: "fab fa-whatsapp",
    path: "https://wa.me/21629196616",
    aria: "WhatsApp (+216 29 19 66 16)",
  },
  {
    icon: "fas fa-envelope",
    path: "mailto:takwa.hafyen@gmail.com",
    aria: "Email",
  },
];

function openMailFallback(to) {
  const mailto = `mailto:${to}`;
  window.location.href = mailto;

  setTimeout(() => {
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}`;
    window.open(gmailCompose, "_blank", "noopener,noreferrer");
  }, 500);
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Logo and Copyright */}
        <div className="footer-left">
          <div className="logo-brand-box">
            <span className="logo-takwa">Takwa</span>
            <span className="logo-hafyen">Hafyen</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Takwa Hafyen • Software Engineer &amp; AI Architect
          </p>
        </div>

        {/* Social Icons */}
        <div className="footer-right">
          <ul className="social-list">
            {social.map((item, i) => (
              <li key={i} className="social-item">
                {item.icon === "fas fa-envelope" ? (
                  <button
                    onClick={() => openMailFallback(email)}
                    className="social-btn"
                    aria-label={item.aria}
                    title={`Send email to ${email}`}
                  >
                    <i className={item.icon}></i>
                  </button>
                ) : (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={item.aria}
                    title={item.aria}
                  >
                    <i className={item.icon}></i>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Architected with <span className="heart">⚡</span> by{" "}
          <span className="author">Takwa Hafyen</span> • Production-Grade Agentic AI &amp; Full-Stack Systems
        </p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-primary, #050c1a);
          color: var(--text-secondary, #94a3b8);
          padding: 60px 0 25px 0;
          border-top: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          flex-wrap: wrap;
        }

        .footer-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .logo-brand-box {
          display: flex;
          align-items: center;
        }

        .logo-takwa {
          font-size: 24px;
          font-weight: 800;
          color: var(--yellow-accent, #facc15);
          letter-spacing: -0.5px;
          margin-right: 5px;
        }

        .logo-hafyen {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary, #ffffff);
          letter-spacing: -0.5px;
        }

        .logo-dot {
          font-size: 26px;
          font-weight: 900;
          color: var(--yellow-accent, #facc15);
          line-height: 1;
        }

        .footer-text {
          font-size: 14px;
          color: var(--text-muted, #94a3b8);
          margin-bottom: 0;
        }

        .social-list {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.12));
          background: var(--bg-secondary, #0b1528);
          color: var(--text-secondary, #cbd5e1);
          font-size: 18px;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .social-btn:hover,
        .social-btn:focus {
          background: var(--yellow-accent, #facc15);
          color: #050c1a;
          border-color: var(--yellow-accent, #facc15);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px var(--yellow-glow, rgba(250, 204, 21, 0.35));
        }

        .footer-bottom {
          text-align: center;
          margin-top: 35px;
          color: var(--text-muted, #94a3b8);
          font-size: 13.5px;
        }

        .heart {
          color: var(--yellow-accent, #facc15);
        }

        .author {
          font-weight: 700;
          color: var(--yellow-accent, #facc15);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .footer-text {
            text-align: center;
          }

          .footer-right {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
