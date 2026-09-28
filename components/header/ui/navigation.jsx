import navigation from "@/data/navigation";
import { Link } from "react-scroll";
import { useTranslations } from "next-intl";

export default function Navigation() {
    const t = useTranslations("nav");

    return (
        <nav className="d-none d-xl-block">
            <ul className="d-block">
                {/* navigation start */}
                {navigation?.map((item, i) => (
                    <li key={i}>
                        <Link
                            href="#"
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            activeClass="ui-nav-active"
                        >
                            {t(item.key)}
                        </Link>
                    </li>
                ))}
                {/* navigation end */}
            </ul>
        </nav>
    );
}
