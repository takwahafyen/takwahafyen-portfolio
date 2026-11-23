import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    let messages;
    switch (locale) {
        case "fr":
            messages = (await import("../messages/fr.json")).default;
            break;
        case "es":
            messages = (await import("../messages/es.json")).default;
            break;
        case "en":
        default:
            messages = (await import("../messages/en.json")).default;
            break;
    }

    return {
        locale,
        messages,
    };
});
