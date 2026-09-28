import Preloader from "@/components/ui/preloader";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, rtlLocales } from "@/i18n/routing";
import { cairo, jostMedium, openSans } from "../fonts";
import "../globals.css";
import Providers from "../providers";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            languages: Object.fromEntries(
                routing.locales.map((l) => [l, `/${l}`])
            ),
        },
    };
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);

    return (
        <html lang={locale} dir={rtlLocales.includes(locale) ? "rtl" : "ltr"}>
            <body
                className={`${jostMedium.className} ${openSans.variable} ${cairo.variable} body-dark-mode`}
            >
                <Preloader />
                <NextIntlClientProvider>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
