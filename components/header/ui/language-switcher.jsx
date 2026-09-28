"use client";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels = { en: "English", fr: "Français", ar: "العربية" };

// variant "select": compact dropdown for the header
// variant "pills": EN / FR / AR links for the mobile sidebar
export default function LanguageSwitcher({ variant = "pills", className = "" }) {
    const t = useTranslations("header");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    if (variant === "select") {
        return (
            <div className={`language-select ${className}`}>
                <style jsx>{`
                    .language-select i {
                        position: absolute;
                        top: 50%;
                        inset-inline-start: 10px;
                        transform: translateY(-50%);
                        color: var(--main-color);
                        pointer-events: none;
                    }

                    .language-select select {
                        appearance: none;
                        background: transparent;
                        color: #fff;
                        font-size: 14px;
                        font-weight: 600;
                        text-transform: uppercase;
                        border: 1px solid rgba(255, 255, 255, 0.3);
                        border-radius: 6px;
                        padding: 8px 12px;
                        padding-inline-start: 32px;
                        cursor: pointer;
                    }

                    .language-select select:hover,
                    .language-select select:focus {
                        border-color: var(--main-color);
                        outline: none;
                    }

                    .language-select option {
                        background: var(--primary-color);
                        color: #fff;
                        text-transform: none;
                    }
                `}</style>
                <div className="position-relative">
                    <i className="fas fa-globe" aria-hidden="true" />
                    <select
                        value={locale}
                        aria-label={t("language")}
                        onChange={(e) =>
                            router.replace(pathname, { locale: e.target.value })
                        }
                    >
                        {routing.locales.map((l) => (
                            <option key={l} value={l} lang={l} title={labels[l]}>
                                {l.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }

    return (
        <nav
            className={`language-switcher d-flex align-items-center ${className}`}
            aria-label={t("language")}
        >
            <style jsx>{`
                /* shown on the green mobile sidebar */
                .language-switcher :global(a) {
                    color: #fff;
                    font-size: 14px;
                    font-weight: 600;
                    text-transform: uppercase;
                    padding: 6px 12px;
                    margin: 0 4px;
                    border-radius: 6px;
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    transition: all 0.3s ease;
                }

                .language-switcher :global(a:hover) {
                    background: rgba(0, 0, 0, 0.15);
                }

                .language-switcher :global(a.active) {
                    background: var(--primary-color);
                    border-color: var(--primary-color);
                }
            `}</style>
            {routing.locales.map((l) => (
                <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    className={l === locale ? "active" : ""}
                    aria-current={l === locale ? "true" : undefined}
                    hrefLang={l}
                >
                    {l}
                </Link>
            ))}
        </nav>
    );
}
