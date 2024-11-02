import { getRelativeLocaleUrl } from "astro:i18n"
export const NAVIGATION = {
    de: [
        {
            title: "Startseite",
            href: getRelativeLocaleUrl("de", ""),
            published: true,
        },
        {
            title: "News",
            href: getRelativeLocaleUrl("de", "news"),
            published: true,
        },
        {
            title: "Downloads",
            href: getRelativeLocaleUrl("de", "downloads"),
            published: true,
        },
        {
            title: "Kontakt",
            href: getRelativeLocaleUrl("de", "kontakt"),
            published: true,
        }
    ],
    en: [
        {
            title: "Home",
            href: getRelativeLocaleUrl("en", ""),
            published: true,
        },
        {
            title: "News",
            href: getRelativeLocaleUrl("en", "news"),
            published: true,
        },
        {
            title: "Downloads",
            href: getRelativeLocaleUrl("en", "downloads"),
            published: true,
        },
        {
            title: "Contact",
            href: getRelativeLocaleUrl("en", "contact"),
            published: true,
        }
    ],
}