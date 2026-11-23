"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
    const t = useTranslations("contact.form");
    const [statusMessage, setStatusMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setIsSubmitting(true);
        emailjs
            .send(
                "service_cgt3f6o",
                "template_qnvqb1k",
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.msg,
                },
                "w9ZBf1nKfArcRxsNB"
            )
            .then(() => {
                setStatusMessage(t("success"));
                setIsSubmitting(false);
                reset();
            })
            .catch(() => {
                setStatusMessage(t("error"));
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-form-box p-4 rounded-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                        <div className="col-md-6 col-12 mb-3">
                            <input
                                className="form-control-custom w-100"
                                type="text"
                                placeholder={t("name")}
                                {...register("name", { required: t("nameRequired") })}
                            />
                            {errors.name && <span className="ui-error mt-1 d-block">{errors.name.message}</span>}
                        </div>

                        <div className="col-md-6 col-12 mb-3">
                            <input
                                className="form-control-custom w-100"
                                type="email"
                                placeholder={t("email")}
                                {...register("email", {
                                    required: t("emailRequired"),
                                    validate: () => {
                                        const email = watch("email");
                                        return email?.includes("@") || t("emailInvalid");
                                    },
                                })}
                            />
                            {errors.email && <span className="ui-error mt-1 d-block">{errors.email.message}</span>}
                        </div>

                        <div className="col-md-6 col-12 mb-3">
                            <input
                                className="form-control-custom w-100"
                                type="text"
                                placeholder={t("phone")}
                                {...register("phone", { required: t("phoneRequired") })}
                            />
                            {errors.phone && <span className="ui-error mt-1 d-block">{errors.phone.message}</span>}
                        </div>

                        <div className="col-md-6 col-12 mb-3">
                            <input
                                className="form-control-custom w-100"
                                type="text"
                                placeholder={t("subject")}
                                {...register("subject", { required: t("subjectRequired") })}
                            />
                            {errors.subject && <span className="ui-error mt-1 d-block">{errors.subject.message}</span>}
                        </div>

                        <div className="col-12 mb-3">
                            <textarea
                                rows={5}
                                className="form-control-custom w-100"
                                placeholder={t("message")}
                                {...register("msg", {
                                    required: t("messageRequired"),
                                    minLength: { value: 10, message: t("messageMinLength") },
                                })}
                            />
                            {errors.msg && <span className="ui-error mt-1 d-block">{errors.msg.message}</span>}
                        </div>

                        <div className="col-12">
                            <button
                                className="btn btn-submit-yellow"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span>
                                        <i className="fas fa-spinner fa-spin mr-2" /> Sending...
                                    </span>
                                ) : (
                                    <span>
                                        <i className="fas fa-paper-plane mr-2" /> {t("submit")}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </form>

                {statusMessage && (
                    <div
                        className="form-message mt-3 p-3 rounded-3"
                        style={{
                            background: statusMessage.includes("✅") ? "rgba(39, 201, 63, 0.15)" : "rgba(255, 95, 86, 0.15)",
                            color: statusMessage.includes("✅") ? "#27c93f" : "#ff5f56",
                            border: `1px solid ${statusMessage.includes("✅") ? "rgba(39, 201, 63, 0.3)" : "rgba(255, 95, 86, 0.3)"}`,
                            fontWeight: 600,
                        }}
                    >
                        {statusMessage}
                    </div>
                )}
            </div>

            <style jsx>{`
                .contact-form-box {
                    background: var(--bg-secondary, #0b1528);
                    border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.08));
                    backdrop-filter: blur(12px);
                }

                .form-control-custom {
                    background: rgba(5, 12, 26, 0.6);
                    border: 1px solid var(--navy-border, rgba(255, 255, 255, 0.12));
                    border-radius: 8px;
                    padding: 12px 16px;
                    color: var(--text-primary, #ffffff);
                    font-size: 14px;
                    outline: none;
                    transition: all 0.25s ease;
                }

                .form-control-custom:focus {
                    border-color: var(--yellow-accent, #facc15);
                    box-shadow: 0 0 10px var(--yellow-glow, rgba(250, 204, 21, 0.25));
                }

                .btn-submit-yellow {
                    background: var(--yellow-accent, #facc15);
                    color: #050c1a !important;
                    font-weight: 700;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    border-radius: 30px;
                    padding: 12px 32px;
                    border: none;
                    transition: all 0.25s ease;
                    cursor: pointer;
                }

                .btn-submit-yellow:hover {
                    background: #ffd600;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px var(--yellow-glow, rgba(250, 204, 21, 0.35));
                }

                .ui-error {
                    color: #ff5f56;
                    font-size: 12px;
                }
            `}</style>
        </div>
    );
}
