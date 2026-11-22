export const stats = [
  { title: "5 Years", label: "Professional Experience" },
  { title: "WordPress Expertise", label: "Custom Themes & Gutenberg Blocks" },
  { title: "Modern Frontend", label: "React, TypeScript & Angular" },
  { title: "Design to Code", label: "Figma, Responsive UI & UX" },
] as const;

export const projects = [
  {
    href: "https://moaa.xo.je/",
    image: "/images/portfolio/moaa.png",
    alt: "MOAA museum website screenshot",
    tag: "Custom WordPress Block Theme",
    title: "Museum of Ancient Arts",
    desc: "A fully customized website for a fictional museum, built with WordPress Full Site Editing and custom collection management.",
    builtWith: ["WordPress", "PHP", "JavaScript", "HTML", "CSS"] as const,
    secondaryLink: { href: "https://github.com/jkas1/museum-of-ancient-arts", label: "GitHub" },
  },
  {
    href: "https://travelbook-b5hc.onrender.com/",
    image: "/images/portfolio/travelbook.png",
    alt: "Travelbook website screenshot",
    tag: "Travel Discovery Website",
    title: "Travelbook",
    desc: "An interactive travel discovery experience where users can explore 30 countries, filter destinations, save favorites, and browse detailed country guides with photography, live weather, and interactive maps.",
    builtWith: ["React", "TypeScript", "JavaScript", "Vite", "React Router", "Mapbox GL","styled-components"] as const,
    secondaryLink: { href: "https://github.com/jkas1/travelbook", label: "GitHub" },
  },
  {
    href: "https://pot-it.onrender.com/",
    image: "/images/portfolio/pot-it.png",
    alt: "Pot It plant shop screenshot",
    tag: "Full-Stack E-Commerce Website",
    title: "Pot It",
    desc: "A full-stack storefront for a fictional plant shop, featuring a browsable product catalog, category filtering, product details, cart management, and a simulated checkout experience.",
    builtWith: ["Angular", "TypeScript", "Node.js", "Express", "MySQL"] as const,
    secondaryLink: { href: "https://github.com/jkas1/pot-it", label: "GitHub" },
  },
  {
    href: "",
    image: "/images/portfolio/cross-browser.png",
    alt: "Cross-Browser Visual Tester screenshot",
    tag: "Developer Tool",
    title: "Cross-Browser Visual Tester",
    desc: "A browser testing tool that captures and compares full-page screenshots across Chrome, Firefox, and Safari. It supports saved visual baselines, configurable pixel-difference thresholds, automated accessibility checks, and downloadable HTML reports.",
    builtWith: ["Vue", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Playwright", "Vitest", "pixelmatch", "axe-core"] as const,
    secondaryLink: { href: "https://github.com/jkas1/cross-browser-visual-tester/", label: "GitHub" },
  },
] as const;

export const moaaGutenbergBlocks = [
  {
    name: "Visual Accordion Block",
    desc: "Interactive image accordion with customizable panels and support for dynamically linking content.",
    github: "https://github.com/jkas1/visual-accordion-block",
    live: "https://moaa.xo.je/#featured-art",
  },
  {
    name: "Item Browser Block",
    desc: "Filterable content browser with index and grid layouts, supporting custom post types and taxonomies.",
    github: "https://github.com/jkas1/item-browser-block",
    live: "https://moaa.xo.je/#the-collection",
  },
] as const;

export const experienceItems = [
  {
    n: "1",
    title: "Design & Prototyping",
    body: "Translated client requirements and brand guidelines into responsive website layouts and interactive prototypes using Figma and Sketch, with a focus on usability, accessibility, and SEO.",
  },
  {
    n: "2",
    title: "Custom WordPress Development",
    body: "Built custom WordPress themes from design prototypes using PHP, JavaScript, HTML, and SCSS, including classic and block-based themes with reusable templates and functionality.",
  },
  {
    n: "3",
    title: "Gutenberg Block Development",
    body: "Developed custom Gutenberg blocks using PHP and React, extending the WordPress editor with reusable components such as accordion and tabbed content blocks.",
  },
  {
    n: "4",
    title: "Third-Party Integrations",
    body: "Integrated external services into WordPress websites, including VinoShipper for live shipping rates and Mapbox for custom store locators.",
  },
  {
    n: "5",
    title: "Performance & Accessibility",
    body: "Audited websites using Google Lighthouse and PageSpeed Insights, identifying and implementing improvements to performance, accessibility, and SEO across desktop and mobile devices.",
  },
  {
    n: "6",
    title: "Website Support & Maintenance",
    body: "Troubleshot and resolved client website issues involving WordPress functionality, plugins, integrations, and site errors. Managed the team's HubSpot support queue to help maintain timely issue resolution.",
  },
] as const;

export const toolkitGroups = [
  { id: "A", title: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python","HTML", "CSS", "SCSS"] },
  {
    id: "B",
    title: "Frontend Development",
    items: ["React", "Angular", "Vue", "Next.js", "Tailwind CSS", "UIkit", "Bootstrap", "styled-components"],
  },
  {
    id: "C",
    title: "Backend & Databases",
    items: ["Node.js", "Express", "MySQL", "Microsoft SQL Server"],
  },
  {
    id: "D",
    title: "WordPress",
    items: ["WordPress", "Gutenberg", "WooCommerce", "Elementor"],
  },
  {
    id: "E",
    title: "Testing & Development Tools",
    items: ["Playwright", "Vitest", "Git", "GitHub", "npm"],
  },
  {
    id: "F",
    title: "Design & Collaboration",
    items: ["Figma", "Sketch", "HubSpot", "Basecamp"],
  },
] as const;