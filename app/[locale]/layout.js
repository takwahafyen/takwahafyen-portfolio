import Preloader from "@/components/ui/preloader";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { jostMedium, openSans } from "../fonts";
import "../globals.css";
import Providers from "../providers";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });

    return {
        metadataBase: new URL("https://takwahafyen-portfolio-smim.vercel.app"),
        title: t("title"),
        description: t("description"),
        alternates: {
            languages: Object.fromEntries(
                routing.locales.map((l) => [l, `/${l}`])
            ),
        },
        openGraph: {
            title: t("title"),
            description: t("description"),
            url: "https://takwahafyen-portfolio-smim.vercel.app",
            siteName: "Takwa Hafyen Portfolio",
            locale: locale,
            type: "website",
        },
    };
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale} dir="ltr">
            <body
                className={`${jostMedium.className} ${openSans.variable} body-dark-mode`}
            >
                <Preloader />
                <NextIntlClientProvider messages={messages}>
                    <Providers>{children}</Providers>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
