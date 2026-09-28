"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import navigation from "@/data/navigation";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/features/toggle/toggleSlice";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./ui/language-switcher";

const social = [
    {
        name: "Facebook",
        icon: "fab fa-facebook-f",
        color: "facebook-bg",
        href: "#",
    },
    {
        name: "Twitter",
        icon: "fab fa-twitter",
        color: "twitter-bg",
        href: "#",
    },
    {
        name: "Linkedin",
        icon: "fab fa-linkedin-in",
        color: "linkedin-bg",
        href: "#",
    },
    {
        name: "Instagram",
        icon: "fab fa-instagram",
        color: "instagram-bg",
        href: "#",
    },
];

export default function SidebarNavigation() {
    const isSidebarActive = useSelector(
        (state) => state.toggle.isSidebarActive
    );

    const dispatch = useDispatch();
    const t = useTranslations("nav");

    return (
        <div className={`ui-sidebar ${isSidebarActive ? "active" : ""}`}>
            <Sidebar>
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="ui-sidebar-close"
                >
                    <i className="fa fa-times"></i>
                </button>
                <Menu>
                    {navigation?.map((item, i) => (
                        <MenuItem
                            key={i}
                            component={
                                <Link
                                    href="#"
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    activeClass="ui-sidebar-active"
                                />
                            }
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            {t(item.key)}
                        </MenuItem>
                    ))}
                </Menu>

                <LanguageSwitcher className="justify-content-center mt-30" />

                {/* social link start */}
                

                
            </Sidebar>
        </div>
    );
}
