"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
    const t = useTranslations("contact.form");
    const [status, setStatus] = useState(null);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
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
                setStatus("success");
                reset();
            })
            .catch(() => {
                setStatus("error");
            });
    };

    return (
        <div className="contact-wrapper">
            <div className="contact-form mt-45">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="contact-info pt-20">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12">
                                <input
                                    className="name w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="text"
                                    placeholder={t("name")}
                                    {...register("name", { required: t("nameRequired") })}
                                />
                                {errors.name && <span className="ui-error">{errors.name.message}</span>}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12">
                                <input
                                    className="email w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="email"
                                    placeholder={t("email")}
                                    {...register("email", {
                                        required: t("emailRequired"),
                                        validate: () => {
                                            const email = watch("email");
                                            return email.includes("@") || t("emailInvalid");
                                        },
                                    })}
                                />
                                {errors.email && <span className="ui-error">{errors.email.message}</span>}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pr6 mb-12">
                                <input
                                    className="phone w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="text"
                                    placeholder={t("phone")}
                                    {...register("phone", { required: t("phoneRequired") })}
                                />
                                {errors.phone && <span className="ui-error">{errors.phone.message}</span>}
                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 pl6 pr-12 mb-12">
                                <input
                                    className="subject w-100 theme-border form-color pl-20 pt-15 pb-15 pr-10 border-radius5"
                                    type="text"
                                    placeholder={t("subject")}
                                    {...register("subject", { required: t("subjectRequired") })}
                                />
                                {errors.subject && <span className="ui-error">{errors.subject.message}</span>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mb-12">
                                <textarea
                                    className="message w-100 theme-border form-color pl-20 pt-15 pr-10 border-radius5"
                                    placeholder={t("message")}
                                    {...register("msg", {
                                        required: t("messageRequired"),
                                        minLength: { value: 10, message: t("messageMinLength") },
                                    })}
                                />
                                {errors.msg && <span className="ui-error">{errors.msg.message}</span>}
                            </div>
                        </div>

                        <button
                            className="btn theme-bg text-white text-uppercase"
                            type="submit"
                        >
                            {t("submit")}
                        </button>
                    </div>
                </form>

                {status && (
                    <p className="form-message mt-20" style={{ color: status === "success" ? "green" : "red" }}>
                        {t(status)}
                    </p>
                )}
            </div>
        </div>
    );
}
