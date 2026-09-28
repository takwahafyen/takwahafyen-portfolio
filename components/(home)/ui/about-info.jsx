import { useTranslations } from "next-intl";

export default function AboutInfo() {
  const t = useTranslations("about");

  return (
    <div className="about-content position-relative mb-50">
      <div className="position-relative">
        <div className="title">
          <span className="theme-color text-uppercase d-block mb-1 mt--5">
            {t("label")}
          </span>
          <h2 className="mb-30">{t("title")}</h2>
        </div>
      </div>

      <p>
        {t("text")}
      </p>

      
    
    
    </div>
  );
}
