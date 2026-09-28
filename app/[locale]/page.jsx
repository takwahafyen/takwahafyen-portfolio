import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/(home)/hero";
import Header1 from "@/components/header/header-1";
import About from "@/components/(home)/about";
import PortfolioArea from "@/components/(home)/portfolio-area";
import FunFact from "@/components/(home)/fun-fact";
import Experience from "@/components/(home)/experience";
import Education from "@/components/(home)/education";
import SkillArea from "@/components/(home)/skill-area";
import ServiceArea from "@/components/(home)/service-area";
import BlogArea from "@/components/(home)/blog-area";
import Footer from "@/components/footer/footer";
import Contact from "@/components/(home)/contact";

export default async function Home({ params }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Header1 />
            <Hero />
            <About />
            <ServiceArea />
            <SkillArea />
            <Experience />
            <FunFact />
            <PortfolioArea />
            <Education />
            <Contact />
            <BlogArea />
            <Footer />
        </>
    );
}
