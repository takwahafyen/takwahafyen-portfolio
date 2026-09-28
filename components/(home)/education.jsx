import Image from "next/image";
import EducationList from "./ui/education-list";
import { education } from "@/data/site";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("education");
  const items = t.raw("items");

  return (
    <div className="education-area over-hidden">
      <div className="container">
        <div className="row position-relative">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="position-relative">
              <div className="title">
                <span className="theme-color text-uppercase d-block mb-1">
                  {t("label")}
                </span>
                <h2 className="mb-25">{t("title")}</h2>
              </div>
            </div>

            <div className="education-wrapper mr-20 pt-25 mb-50">
              <ul className="education-content">
                {education?.slice(0, 3).map((item, i) => (
                  <EducationList key={i} data={{ ...item, ...items[i] }} />
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ l’image ne s’affichera que sur les écrans ≥ lg */}
          <div className="col-xl-5 offset-xl-1 col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
            <div
              className="education-img position-relative text-center"
              data-aos="fade-left"
              data-aos-duration={2000}
            >
              <Image
                height={648}
                width={500}
                className="border-radius10 h-auto w-auto"
                src="/images/education/education-img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
