import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/(home)/hero";
import Header1 from "@/components/header/header-1";
import About from "@/components/(home)/about";
import ServiceArea from "@/components/(home)/service-area";
import SkillArea from "@/components/(home)/skill-area";
import PortfolioArea from "@/components/(home)/portfolio-area";
import Experience from "@/components/(home)/experience";
import FunFact from "@/components/(home)/fun-fact";
import Education from "@/components/(home)/education";
import Contact from "@/components/(home)/contact";
import Footer from "@/components/footer/footer";

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
            <PortfolioArea />
            <Experience />
            <FunFact />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}
