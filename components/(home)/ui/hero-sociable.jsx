"use client";
import React from "react";
import { useTranslations } from "next-intl";

const email = "takwa.hafyen@gmail.com";

const socialLink = [
  {
    icon: "fab fa-whatsapp",
    link: "https://wa.me/21629196616",
    aria: "WhatsApp",
    color: "#25d366",
  },
  {
    icon: "fab fa-linkedin-in",
    link: "https://linkedin.com/in/takwa-hafyen-472264282",
    aria: "LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: "fab fa-github",
    link: "https://github.com/takwahafyen",
    aria: "GitHub",
    color: "#ffffff",
  },
  {
    icon: "fas fa-envelope",
    link: `mailto:${email}`,
    aria: "Email",
    color: "#d14836",
  },
];

export default function HeroSociable() {
  const t = useTranslations();

  return (
    <div className="social-container d-none d-xl-block">
      <ul className="social-list">
        {socialLink.map((item, i) => (
          <li key={i} className="social-item">
            <a
              className="social-button"
              href={item.link}
              target={item.link.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.aria}
              title={item.aria}
            >
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .social-container {
          position: absolute;
          inset-inline-end: 24px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 11;
        }

        .social-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: rgba(22, 27, 46, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          color: #cbd5e1;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .social-button:hover {
          background-color: #9ef01a;
          border-color: #9ef01a;
          color: #0c0e1a;
          transform: scale(1.1);
          box-shadow: 0 0 16px rgba(158, 240, 26, 0.4);
        }
      `}</style>
    </div>
  );
}
