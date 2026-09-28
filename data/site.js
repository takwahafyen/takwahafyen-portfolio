export const introFeature = [
    {
        iconUrl: "/images/icon/intro-ft-icon1.png",
        title: "Dedication",
        description:
            "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
    },
    {
        iconUrl: "/images/icon/intro-ft-icon2.png",
        title: "Dedication",
        description:
            "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
    },
    {
        iconUrl: "/images/icon/intro-ft-icon3.png",
        title: "Dedication",
        description:
            "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
    },
    {
        iconUrl: "/images/icon/intro-ft-icon4.png",
        title: "Dedication",
        description:
            "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
    },
];

export const portfolioArea = [
  {
    imgUrl: "/images/portfolio/port-img1.jpg",
    imgLargeUrl: "/images/portfolio/port-img1-large.jpg",
    technologies: ["Python", "PowerApps", "SharePoint", "KNN", "Random Forest", "Gradio", "HuggingFace", "AI"],
    videoUrl: "https://www.youtube.com/embed/2GDLJ0Q30o0?si=09a4ClcYxZ3Wirss",
  },
  {
    imgUrl: "/images/portfolio/port-img2.jpg",
    imgLargeUrl: "/images/portfolio/port-img2-large.jpg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Python", "AI"],
    videoUrl: "https://www.youtube.com/embed/fLYxtWwyYaU?si=6luozuT2ARV4uzB1",
  },
  {
    imgUrl: "/images/portfolio/port-img3.jpg",
    imgLargeUrl: "/images/portfolio/port-img3-large.jpg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    videoUrl: "https://www.youtube.com/embed/rcdnh7NPj60?si=3ujPE39s3ISHxlgH",
  },
  {
    imgUrl: "/images/portfolio/port-img10.jpg",
    imgLargeUrl: "/images/portfolio/port-img1-large.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    videoUrl: "https://www.youtube.com/embed/5QiyXZiN0qU?si=jYDyjJrVZvhvknQW",
  },
];

// Key figures, labels in messages "facts.stats"
export const experience = [{ x: 3 }, { x: 15 }, { x: 6 }, { x: 3 }];

export const awardInfo = [
    {
        logoUrl: "/images/award/award-logo1.png",
        title: "Best Developer",
        year: 2022,
        association: "Developer Association",
        location: "New York, Usa",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
    },
    {
        logoUrl: "/images/award/award-logo2.png",
        title: "Developer of the Year",
        year: 2021,
        association: "Dev Internatioal",
        location: "London, England",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
    },
    {
        logoUrl: "/images/award/award-logo3.png",
        title: "Fastest Coder",
        year: 2019,
        association: "Amazing Programmer",
        location: "Dhaka, Bangladesh",
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
    },
];

// Text in messages "experience.items"; end "present" is translated
export const experience2 = [
    {
        icon: "flaticon-briefcase",
        company: "Originis Solutions",
        date: { start: "02/2025", end: "present" },
        projects: [
            {
                link: "https://losange.tn",
                date: { start: "11/2025", end: "present" },
                technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Centrifugo", "LiveKit", "GitLab CI/CD", "Docker"],
            },
            {
                date: { start: "02/2025", end: "07/2025" },
                technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Vitest", "Playwright"],
            },
        ],
    },
    {
        icon: "flaticon-briefcase",
        company: "Draexlmaier Group",
        date: { start: "02/2025", end: "06/2025" },
        technologies: ["Python", "KNN", "Random Forest", "Gradio", "HuggingFace"],
    },
    {
        icon: "flaticon-briefcase",
        company: "Tradrly",
        date: { start: "07/2024", end: "09/2024" },
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
];

// Text in messages "education.items"
export const education = [
    { icon: "flaticon-graduation-cap", date: "2025" },
    { icon: "flaticon-graduation-cap", date: "2022" },
    { icon: "flaticon-graduation-cap", date: "2020" },
];

// Category titles in messages "skills.categories"; tech names stay in English
export const skills = [
    {
        key: "frontend",
        icon: "fas fa-laptop-code",
        items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        key: "backend",
        icon: "fas fa-server",
        items: ["Node.js", "Express.js", "REST APIs", "WebSocket (Centrifugo)", "Payload CMS", "JWT Authentication"],
    },
    {
        key: "databases",
        icon: "fas fa-database",
        items: ["PostgreSQL", "MongoDB", "Stripe", "LiveKit", "Third-party API integration"],
    },
    {
        key: "practices",
        icon: "fas fa-code-branch",
        items: ["Git", "GitLab CI/CD", "Docker", "Vitest", "Playwright", "Code Reviews", "Agile/Scrum"],
    },
    {
        key: "ai",
        icon: "fas fa-robot",
        items: ["Claude Code", "Cursor AI", "LLM integration (OpenAI, Gemini)", "RAG pipelines"],
    },
];

// Text in messages "services.items"
export const service = [
    { iconUrl: "/images/icon/ser-icon1.png" },
    { iconUrl: "/images/icon/ser-icon2.png" },
    { iconUrl: "/images/icon/ser-icon3.png" },
    { iconUrl: "/images/icon/ser-icon4.png" },
];

export const pricing = [
    {
        time: "Hourly",
        price: 99,
        priceTime: "Hour",
        list: [
            {
                name: "One time contract",
                isCheck: true,
            },
            {
                name: "Flexible Contract",
                isCheck: true,
            },
            {
                name: "Source Files",
                isCheck: true,
            },
            {
                name: "Support",
                isCheck: false,
            },
            {
                name: "Updates",
                isCheck: false,
            },
        ],
    },
    {
        time: "Project Basis",
        price: 69,
        priceTime: "Hour",
        list: [
            {
                name: "One time contract",
                isCheck: true,
            },
            {
                name: "Flexible Contract",
                isCheck: true,
            },
            {
                name: "Source Files",
                isCheck: true,
            },
            {
                name: "Support",
                isCheck: true,
            },
            {
                name: "Updates",
                isCheck: false,
            },
        ],
    },
    {
        time: "Monthly",
        price: 39,
        priceTime: "Hour",
        list: [
            {
                name: "One time contract",
                isCheck: true,
            },
            {
                name: "Flexible Contract",
                isCheck: true,
            },
            {
                name: "Source Files",
                isCheck: true,
            },
            {
                name: "Support",
                isCheck: true,
            },
            {
                name: "Updates",
                isCheck: true,
            },
        ],
    },
];

export const testimonial = [
    {
        brief: "Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis iste natus error sit volup tatem gotiraz bole ami ke",
        profileUrl: "/images/testimonial/author-img.jpg",
        name: "Paul Harrison",
        profession: "QuboHub",
    },
    {
        brief: "Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis iste natus error sit volup tatem gotiraz bole ami ke",
        profileUrl: "/images/testimonial/author-img.jpg",
        name: "Paul Harrison",
        profession: "QuboHub",
    },
    {
        brief: "Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis iste natus error sit volup tatem gotiraz bole ami ke",
        profileUrl: "/images/testimonial/author-img.jpg",
        name: "Paul Harrison",
        profession: "QuboHub",
    },
];

export const branding = [
    {
        logoUrl: "/images/brand/brand-img1.png",
        hoverLogoUrl: "/images/brand/brand-hover-img1.png",
    },
    {
        logoUrl: "/images/brand/brand-img2.png",
        hoverLogoUrl: "/images/brand/brand-hover-img2.png",
    },
    {
        logoUrl: "/images/brand/brand-img3.png",
        hoverLogoUrl: "/images/brand/brand-hover-img3.png",
    },
    {
        logoUrl: "/images/brand/brand-img4.png",
        hoverLogoUrl: "/images/brand/brand-hover-img4.png",
    },
    {
        logoUrl: "/images/brand/brand-img5.png",
        hoverLogoUrl: "/images/brand/brand-hover-img5.png",
    },
    {
        logoUrl: "/images/brand/brand-img6.png",
        hoverLogoUrl: "/images/brand/brand-hover-img1.png",
    },
    {
        logoUrl: "/images/brand/brand-img7.png",
        hoverLogoUrl: "/images/brand/brand-hover-img2.png",
    },
    {
        logoUrl: "/images/brand/brand-img8.png",
        hoverLogoUrl: "/images/brand/brand-hover-img3.png",
    },
    {
        logoUrl: "/images/brand/brand-img9.png",
        hoverLogoUrl: "/images/brand/brand-hover-img4.png",
    },
    {
        logoUrl: "/images/brand/brand-img10.png",
        hoverLogoUrl: "/images/brand/brand-hover-img5.png",
    },
    
];

export const blog = [
    {
        imgUrl: "/images/blog/blog-img1.jpg",
        title: "",
        category: "",
    },
    {
        imgUrl: "/images/blog/blog-img2.jpg",
        title: "",
        category: "",
    },
    {
        imgUrl: "/images/blog/blog-img3.jpg",
        title: "",
        category: "",
    },
    {
        imgUrl: "/images/blog/blog-img4.jpg",
        title: "",
        category: "",
    },
    {
        imgUrl: "/images/blog/blog-img5.jpg",
        title: "",
        category: "",
    },
    {
        imgUrl: "/images/blog/blog-img6.jpg",
        title: "",
        category: "",
    },
];
