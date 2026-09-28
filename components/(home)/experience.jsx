import { experience2 } from "@/data/site";
import ExperienceList from "./ui/experience-list";

export default function Experience() {
    return (
        <div id="experience" className="experience-area over-hidden pt-130 pb-110">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12 col-12">
                        <div className="position-relative">
                            <div className="title text-center mb-50">
                                <span className="theme-color text-uppercase d-block mb-6">
                                    Work Experience
                                </span>
                                <h2 className="text-white">My Experience</h2>
                            </div>
                        </div>
                        <div
                            className="experience-wrapper"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-duration={1400}
                        >
                            <ul className="experience-content">
                                {/* experience list start */}
                                {experience2?.map((item, i) => (
                                    <ExperienceList key={i} data={item} />
                                ))}
                                {/* experience list end */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
