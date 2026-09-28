import localFont from "next/font/local";
import { Cairo, Open_Sans } from "next/font/google";

/**
 * Local fonts
 */
export const jostMedium = localFont({
    src: [
        {
            path: "./../public/fonts/jost-medium-font/jost-medium.ttf",
            weight: "500",
            style: "normal",
        },
    ],
    variable: "--font-jost-medium",
});

/**
 * Google fonts
 */
export const openSans = Open_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "600", "700"],
    display: "swap",
    variable: "--font-open-sans",
});

/**
 * Arabic font (Jost and Open Sans have no Arabic glyphs)
 */
export const cairo = Cairo({
    subsets: ["arabic", "latin"],
    weight: ["400", "600", "700"],
    display: "swap",
    variable: "--font-cairo",
});
