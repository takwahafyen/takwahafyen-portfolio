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
    title: "Lessons Learned Smart Application",
    description: [
      "Developed an intelligent platform to optimize learning experiences and Draxlmaier Knowledge",
      "Integrated advanced ML algorithms (KNN, Random Forest, Decision Trees) to predict errors causes and solutions in the Ushall process",
      "Deployed AI models through an interactive Gradio interface for real-time insights and recommendations.",
    ],
    imgUrl: "/images/portfolio/port-img1.jpg",
    imgLargeUrl: "/images/portfolio/port-img1-large.jpg",
    client: "Draxlmaier Group",
    duration: "5 months",
    KeyAchievements: [
      "Enhanced automation and knowledge management efficiency.",
      "Achieved 95% accuracy in personalized recommendation predictions.",
    ],
    technologies: [
      "Python",
      "PowerApps",
      "SharePoint",
      "KNN",
      "Random Forest",
      "Gradio",
      "HuggingFace",
      "AI",
    ],
    videoUrl: "https://www.youtube.com/embed/2GDLJ0Q30o0?si=09a4ClcYxZ3Wirss",
  },

  {
    title: "Full-Stack E-Commerce and Order Management System",
    description: [
      "Designed and developed a responsive front-end for seamless product browsing and purchasing.",
      "Implemented an intuitive admin dashboard for products and order management.",
      "Integrated AI regression models to predict customer demand by category and optimize inventory.",
    ],
    imgUrl: "/images/portfolio/port-img2.jpg",
    imgLargeUrl: "/images/portfolio/port-img2-large.jpg",
    client: "Tradrly",
    duration: "2 months",
    KeyAchievements: [
      "Achieved 91% accuracy in personalized product recommendations.",      "Delivered a smooth online shopping experience that improved order efficiency",

    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "AI",
    ],
    videoUrl: "https://www.youtube.com/embed/fLYxtWwyYaU?si=6luozuT2ARV4uzB1",
  },

  {
    title: "Clinic Management Web Platform",
    description: [
      "Built a dynamic and secure platform for managing patients, doctors, and staff.",
      "Implemented authentication and CRUD operations using Express.js and JWT.",
      "Integrated real-time appointment and patient record tracking.",
    ],
    imgUrl: "/images/portfolio/port-img3.jpg",
    imgLargeUrl: "/images/portfolio/port-img3-large.jpg",
    client: "Academic Project",
    duration: "2 months",
    KeyAchievements: [
      "Streamlined patient data management and reduced administrative workload by 35%.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      
    ],
    videoUrl: "https://www.youtube.com/embed/rcdnh7NPj60?si=3ujPE39s3ISHxlgH",
  },

  {
    title: "Housing Management Website",
    description: [
      "Developed a real-time dashboard for managing clients and property data.",
      "Built a secure and responsive interface for landlords and tenants.",
    ],
    imgUrl: "/images/portfolio/port-img10.jpg",
    imgLargeUrl: "/images/portfolio/port-img1-large.jpg",
    client: "Academic Project",
    duration: "2 months",
    KeyAchievements: [
      "Simplified property rental management and improved accessibility through an intuitive, user-friendly interface.",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    videoUrl:
      "https://www.youtube.com/embed/5QiyXZiN0qU?si=jYDyjJrVZvhvknQW",
  },
];


export const experience = [
  {
    title: (
      <>
        Professional <br /> Experiences
      </>
    ),
    x: 3,
  },
  {
    title: (
      <>
        Technologies <br /> Used
      </>
    ),
    x: 15,
  },
  {
    title: (
      <>
        Projects <br /> Completed
      </>
    ),
    x: 6,
  },
  {
    title: (
      <>
        Certifications <br /> Earned
      </>
    ),
    x: 3,
  },
];


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

export const experience2 = [
    {
        icon: "flaticon-briefcase",
        title: "Software Engineer",
        company: "Originis Solutions",
        date: {
            start: "02/2025",
            end: "Present",
        },
        description:
            "Both platforms below live in a shared Dockerized monorepo, with reusable packages for real-time features.",
        projects: [
            {
                name: "Losange-TN — Multi-Tenant Educational Platform",
                link: "https://losange.tn",
                date: "11/2025 – Present",
                points: [
                    "Owned full-stack features end-to-end — architecture, implementation, and deployment — for a multi-tenant platform, including a production RAG pipeline connecting course resources to an LLM-based content-generation service.",
                    "Built real-time integration layers (WebSocket via Centrifugo, LiveKit for video) connecting front-end clients to back-end services under live classroom load, with snapshot persistence in PostgreSQL.",
                    "Collaborated via Git/GitLab workflows and code reviews; covered features with automated tests (Vitest, Playwright) and shipped through GitLab CI/CD with Docker.",
                ],
                technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Centrifugo", "LiveKit", "GitLab CI/CD", "Docker"],
            },
            {
                name: "Study141 — 1-to-1 Tutoring & Booking Platform",
                date: "02/2025 – 07/2025",
                points: [
                    "Built and integrated a payments layer (Stripe) and REST APIs (PostgreSQL) for a booking platform, with role-based access control and a Vitest + Playwright test suite.",
                ],
                technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Vitest", "Playwright"],
            },
        ],
    },
    {
        icon: "flaticon-briefcase",
        title: "End-of-Studies Internship",
        company: "Draexlmaier Group",
        date: {
            start: "02/2025",
            end: "06/2025",
        },
        description:
            "Lessons Learned Smart Application — built AI models for error recognition and corrective-action prediction, integrated into a knowledge-management application used by production teams.",
        technologies: ["Python", "KNN", "Random Forest", "Gradio", "HuggingFace"],
    },
    {
        icon: "flaticon-briefcase",
        title: "Engineering Internship",
        company: "Tradrly",
        date: {
            start: "07/2024",
            end: "09/2024",
        },
        description:
            "Built a full-stack e-commerce application using the MERN stack, with dynamic product management, authentication, and order handling.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
];

export const education = [
    {
        icon: "flaticon-graduation-cap",
        title: "Engineering diploma in Networking and Computer Systems",
        location: "National Engineering School of Gabes",
        date: "2025",
        description:
            "Specialization: Network and Computer Systems",
    },
    {
        icon: "flaticon-graduation-cap",
        title: "Preparatory cycle for Engineering studies",
        location: "Preparatory Institute for Engineering Studies of Monastir",
        date: "2022",
        description:
            "Graduated with honors ",
    },
    {
        icon: "flaticon-graduation-cap",
        title: "Bachelor degree in experimental sciences",
        location: "Abou El Kacem Echebbi High School-Ksour Essef",
        date: "2020",
        description:
            "Graduated with honors (16.43/20)",
    },
];

export const skills = [
    {
        icon: "fas fa-laptop-code",
        title: "Frontend",
        items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        icon: "fas fa-server",
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "WebSocket (Centrifugo)", "Payload CMS", "JWT Authentication"],
    },
    {
        icon: "fas fa-database",
        title: "Databases & Integration",
        items: ["PostgreSQL", "MongoDB", "Stripe", "LiveKit", "Third-party API integration"],
    },
    {
        icon: "fas fa-code-branch",
        title: "Engineering Practices",
        items: ["Git", "GitLab CI/CD", "Docker", "Vitest", "Playwright", "Code Reviews", "Agile/Scrum"],
    },
    {
        icon: "fas fa-robot",
        title: "AI-Assisted Development",
        items: ["Claude Code", "Cursor AI", "LLM integration (OpenAI, Gemini)", "RAG pipelines"],
    },
];

export const service = [
    {
        iconUrl: "/images/icon/ser-icon1.png",
        title: "Full-Stack Development",
        description:
            "Building scalable web applications from frontend to backend",
    },
    {
        iconUrl: "/images/icon/ser-icon2.png",
        title: "AI & Machine Learning",
        description:
            "Creating AI-powered systems to enhance decision-making and automation.",
    },
    {
        iconUrl: "/images/icon/ser-icon3.png",
        title: "System Architecture",
        description:
            "Designing robust and maintainable software systems",
    },
    {
        iconUrl: "/images/icon/ser-icon4.png",
        title: "Security Analysis",
        description:
            "Implementing robust security systems to protect data and infrastructure",
    },
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
