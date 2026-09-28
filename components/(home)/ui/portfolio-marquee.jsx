import { useTranslations } from "next-intl";

export default function PortfolioMarquee() {
    const t = useTranslations("projects");

    return (
        <div className="marquee-w mb-125">
            <div className="marquee">
                
            </div>
            <div className="marquee marquee2 pb-1">
                <span>{t("marquee")}</span>
                <span>{t("marquee")}</span>
            </div>
        </div>
    );
}
