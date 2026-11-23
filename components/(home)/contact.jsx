"use client";
import React, { useEffect } from "react";
import ContactForm from "./ui/contact-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("contact");
    const contact = [
        {
            icon: "fab fa-whatsapp",
            title: "WhatsApp",
            text: "+216 29 19 66 16",
            link: "https://wa.me/21629196616",
            highlight: true,
            actionText: "Chat on WhatsApp",
        },
        {
            icon: "fas fa-envelope",
            title: t("email"),
            text: "takwa.hafyen@gmail.com",
            link: "mailto:takwa.hafyen@gmail.com",
            highlight: false,
            actionText: "Send Email",
        },
        {
            icon: "fab fa-linkedin-in",
            title: "LinkedIn",
            text: "linkedin.com/in/takwa-hafyen-472264282",
            link: "https://linkedin.com/in/takwa-hafyen-472264282",
            highlight: false,
            actionText: "Connect",
        },
        {
            icon: "fab fa-github",
            title: "GitHub",
            text: "github.com/takwahafyen",
            link: "https://github.com/takwahafyen",
            highlight: false,
            actionText: "Follow",
        },
        {
            icon: "fas fa-map-marker-alt",
            title: t("location"),
            text: t("locationValue"),
            link: null,
            highlight: false,
            actionText: null,
        },
    ];

    const position = [35.4235037, 10.9920057];

    const customIcon = new Icon({
        iconUrl: `data:image/svg+xml;utf8,
        <svg fill="%239ef01a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
        iconSize: [44, 44],
    });

    useEffect(() => {
        return () => {
            const mapContainer = document.querySelector(".leaflet-container");
            if (mapContainer) {
                mapContainer._leaflet_id = null;
            }
        };
    }, []);

    return (
        <section id="contact" className="contact-area over-hidden mb-120 mt-140">
            <div id="hero-btn" className="contact-wrapper position-relative">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-12 text-center mb-60">
                            <span className="theme-color text-uppercase font-weight-bold d-block mb-2 letter-spacing-1">
                                {t("label")}
                            </span>
                            <h2 className="text-white section-title">{t("title")}</h2>
                        </div>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        {/* Contact Information & Channels */}
                        <div className="col-xl-5 col-lg-5 col-md-12 col-12 mb-30 mb-lg-0">
                            <div className="contact-info-card h-100 d-flex flex-column justify-content-between">
                                <ul className="contact-info-list list-unstyled p-0 m-0 d-flex flex-column gap-3">
                                    {contact.map((item, i) => (
                                        <li
                                            key={i}
                                            className={`contact-item-box ${
                                                item.highlight ? "whatsapp-highlight" : ""
                                            }`}
                                        >
                                            <div
                                                className={`contact-icon-box mr-20 flex-shrink-0 ${
                                                    item.highlight ? "whatsapp-icon-bg" : ""
                                                }`}
                                            >
                                                <i className={item.icon} />
                                            </div>
                                            <div className="contact-text-box flex-grow-1">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="contact-label text-muted d-block">
                                                        {item.title}
                                                    </span>
                                                    {item.highlight && (
                                                        <span className="whatsapp-badge">
                                                            Quick Connect
                                                        </span>
                                                    )}
                                                </div>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        target={item.link.startsWith("mailto") ? "_self" : "_blank"}
                                                        rel="noopener noreferrer"
                                                        className={`contact-value-link ${
                                                            item.highlight ? "whatsapp-link" : ""
                                                        }`}
                                                    >
                                                        {item.text}
                                                        <i className="fas fa-arrow-up-right-from-square ml-1" style={{ fontSize: "11px" }} />
                                                    </a>
                                                ) : (
                                                    <span className="contact-value text-white">
                                                        {item.text}
                                                    </span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="recruiter-badge mt-30 p-3 rounded-3">
                                    <div className="d-flex align-items-center">
                                        <span className="recruiter-dot mr-2"></span>
                                        <span className="text-white font-weight-bold" style={{ fontSize: "13.5px" }}>
                                            Recruiter Quick Note
                                        </span>
                                    </div>
                                    <p className="recruiter-note-text mb-0 mt-2 text-light-muted" style={{ fontSize: "12.5px" }}>
                                        Available on WhatsApp at <strong>+216 29 19 66 16</strong> for quick chats, technical screening, and consulting inquiries.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Contact Form */}
                        <div className="col-xl-7 col-lg-7 col-md-12 col-12">
                            <ContactForm />
                        </div>
                    </div>

                    {/* Interactive Location Map */}
                    <div className="row mt-50">
                        <div
                            className="col-12"
                            data-aos="fade-up"
                            data-aos-duration={1500}
                        >
                            <div
                                className="map-wrapper over-hidden rounded-4"
                                style={{ height: "350px", border: "1px solid rgba(255, 255, 255, 0.1)" }}
                            >
                                <MapContainer
                                    center={position}
                                    zoom={14}
                                    scrollWheelZoom={false}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position} icon={customIcon}>
                                        <Popup>
                                            {t.rich("mapPopup", { br: () => <br /> })}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
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

                .contact-info-card {
                    background: rgba(22, 27, 46, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    padding: 30px 26px;
                }

                .contact-item-box {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 12px;
                    padding: 14px 18px;
                    transition: all 0.25s ease;
                }

                .contact-item-box:hover {
                    background: rgba(255, 255, 255, 0.06);
                    border-color: rgba(158, 240, 26, 0.3);
                    transform: translateX(4px);
                }

                .whatsapp-highlight {
                    background: rgba(37, 211, 102, 0.06) !important;
                    border: 1px solid rgba(37, 211, 102, 0.25) !important;
                }

                .whatsapp-highlight:hover {
                    background: rgba(37, 211, 102, 0.12) !important;
                    border-color: #25d366 !important;
                    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.2);
                }

                .contact-icon-box {
                    width: 44px;
                    height: 44px;
                    border-radius: 10px;
                    background: rgba(158, 240, 26, 0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9ef01a;
                    font-size: 18px;
                    border: 1px solid rgba(158, 240, 26, 0.25);
                }

                .whatsapp-icon-bg {
                    background: rgba(37, 211, 102, 0.15) !important;
                    border-color: rgba(37, 211, 102, 0.4) !important;
                    color: #25d366 !important;
                    font-size: 22px !important;
                }

                .whatsapp-badge {
                    background: #25d366;
                    color: #0c0e1a;
                    font-size: 10.5px;
                    font-weight: 700;
                    padding: 2px 8px;
                    border-radius: 10px;
                    letter-spacing: 0.3px;
                }

                .contact-label {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .contact-value {
                    font-size: 14px;
                    font-weight: 600;
                }

                .contact-value-link {
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                    text-decoration: none;
                    transition: color 0.2s ease;
                    word-break: break-all;
                }

                .contact-value-link:hover {
                    color: #9ef01a;
                }

                .whatsapp-link {
                    color: #25d366 !important;
                    font-weight: 700;
                }

                .whatsapp-link:hover {
                    color: #48e682 !important;
                }

                .recruiter-badge {
                    background: rgba(158, 240, 26, 0.08);
                    border: 1px dashed rgba(158, 240, 26, 0.3);
                }

                .recruiter-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #9ef01a;
                    display: inline-block;
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
