// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Jenelle's Photos 2025";
export const SITE_TITLE = "Jenelle's Photos 2025";
export const SITE_DESCRIPTION = "Jenelle best of the best 2025";
export const LOGO = "/favicon.svg"

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "Jenelle's Photos 2025 - All Tags";
export const Tags_DESCRIPTION =
  "Jenelle's Photos 2025 - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in Jenelle's Photos 2025`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category in Jenelle's Photos 2025`,
    description: `Browse all articles under the ${category} category in Jenelle's Photos 2025`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  // { href: "/category/One/1/", title: "Birds" },
  // { href: "/category/Two/1/", title: "Two" },
  // { href: "/category/Three/1/", title: "Three" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  // { href: "/posts/why-astro/", title: "Astro" },
  // { href: "/posts/tailwind-typography/", title: "Tailwind" },
  { href: "/tags/", title: "Explore Tags" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://bsky.app/profile/johndecosta.bsky.social",
    icon: "tabler:brand-bluesky",
    label: "BlueSky",
  },
  {
    href: "https://mastodon.social/@johndecosta",
    icon: "tabler:brand-mastodon",
    label: "Mastodon",
  },
  {
    href: "https://github.com/thefoxboxman",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
