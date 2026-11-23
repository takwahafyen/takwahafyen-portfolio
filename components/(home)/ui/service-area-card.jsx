import React from "react";

export default function ServiceAreaCard({ data, index }) {
    const icons = [
        "fas fa-robot",
        "fas fa-layer-group",
        "fas fa-shield-virus",
        "fas fa-vial-circle-check",
    ];

    return (
        <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-30"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration={1000 + index * 150}
        >
            <div className="service-card-2026 h-100">
                <div className="d-flex align-items-start">
                    <div className="service-icon-box mr-25 flex-shrink-0">
                        <i className={icons[index % icons.length]} />
                    </div>
                    <div className="service-info">
                        <h3 className="service-title text-white mb-12">
                            {data.title}
                        </h3>
                        <p className="service-desc mb-0">
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .service-card-2026 {
                    background: rgba(22, 27, 46, 0.7);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 14px;
                    padding: 35px 30px;
                    transition: all 0.3s ease;
                }

                .service-card-2026:hover {
                    transform: translateY(-5px);
                    background: rgba(28, 35, 58, 0.85);
                    border-color: rgba(158, 240, 26, 0.35);
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35), 0 0 20px rgba(158, 240, 26, 0.1);
                }

                .service-icon-box {
                    width: 58px;
                    height: 58px;
                    border-radius: 12px;
                    background: rgba(158, 240, 26, 0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    color: #9ef01a;
                    border: 1px solid rgba(158, 240, 26, 0.25);
                    transition: all 0.3s ease;
                }

                .service-card-2026:hover .service-icon-box {
                    background: #9ef01a;
                    color: #0c0e1a;
                    transform: scale(1.08);
                }

                .service-title {
                    font-size: 20px;
                    font-weight: 700;
                    letter-spacing: -0.2px;
                }

                .service-desc {
                    font-size: 15px;
                    color: #94a3b8;
                    line-height: 1.6;
                }

                @media (max-width: 576px) {
                    .service-card-2026 {
                        padding: 24px 20px;
                    }
                    .service-icon-box {
                        width: 48px;
                        height: 48px;
                        font-size: 20px;
                        margin-right: 15px !important;
                    }
                    .service-title {
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    );
}
