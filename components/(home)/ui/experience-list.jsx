"use client";

export default function ExperienceList({ data }) {
    const { start, end } = data.date || {};

    return (
        <li className="mb-50 d-flex align-items-start rotate-hover">
            <style jsx>{`
                .experience-project {
                    margin-top: 25px;
                    padding-left: 20px;
                    border-left: 2px solid rgba(255, 255, 255, 0.1);
                }

                .experience-project h5 {
                    font-size: 18px;
                    font-weight: 600;
                    color: #fff;
                    margin-bottom: 5px;
                }

                .experience-project h5 a {
                    color: inherit;
                }

                .experience-project h5 a:hover {
                    color: var(--main-color);
                }

                .experience-points {
                    padding-left: 18px;
                    margin: 10px 0 0;
                }

                .experience-points li {
                    list-style: disc;
                    margin-bottom: 6px;
                    color: var(--text-color);
                    font-family: var(--font-open-sans);
                    font-size: 16px;
                    line-height: 1.6;
                }

                .tech-badge {
                    display: inline-block;
                    color: #fff;
                    padding: 6px 14px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 500;
                    margin: 5px 5px 0 0;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: rgba(255, 255, 255, 0.05);
                }
            `}</style>

            <div className="experience-ser-icon d-inline-block text-center mt-10 mr-30 transition3">
                <span className="theme-color d-inline-block">
                    <span
                        className={`d-block rotate flat-family ${data.icon}`}
                    />
                </span>
            </div>
            <div className="experience-service-text d-inline-block">
                <h3 className="mb-2">{data.title}</h3>
                <h4>
                    {data.company}{" "}
                    <span className="meta-text-color openS-font-family">
                        ( {start} - {end} )
                    </span>
                </h4>
                {data.description && (
                    <p className="mb-0 mt-15">{data.description}</p>
                )}

                {data.projects?.map((project, i) => (
                    <div key={i} className="experience-project">
                        <h5>
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.name}{" "}
                                    <i className="fas fa-external-link-alt" />
                                </a>
                            ) : (
                                project.name
                            )}
                        </h5>
                        <span className="meta-text-color openS-font-family">
                            {project.date}
                        </span>
                        <ul className="experience-points">
                            {project.points.map((point, j) => (
                                <li key={j}>{point}</li>
                            ))}
                        </ul>
                        <div>
                            {project.technologies.map((tech, j) => (
                                <span key={j} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {data.technologies && (
                    <div className="mt-10">
                        {data.technologies.map((tech, j) => (
                            <span key={j} className="tech-badge">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </li>
    );
}
