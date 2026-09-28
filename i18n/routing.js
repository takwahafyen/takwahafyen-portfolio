import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "fr", "ar"],
    defaultLocale: "en",
});

// Arabic is written right-to-left
export const rtlLocales = ["ar"];
