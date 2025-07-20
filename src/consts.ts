// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Avnish Singh - Cybersecurity Specialist";
export const SITE_TITLE = "Avnish Singh 🔒";
export const SITE_DESCRIPTION = "Cybersecurity Student & Ethical Hacker | Penetration Testing | Network Security | Digital Forensics";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Avnish Singh";
export const USER_SITE = "https://avnishsingh.tech"
export const USER_AVATAR = "/avnishsingh.png";

// Server and transition settings
export const SERVER_URL = "avnishsingh.tech";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page

  {
    id: "credentials",
    text: "Credentials",
    href: "/credentials",
    svg: "friend",
    target: "_self",
  }, // Education and certificates & Skills
  {
    id: "project",
    text: "Projects",
    href: "/project",
    svg: "project",
    target: "_self",
    
  },
  {
    id: "blog",
    text: "Blog",
    href: "/blog",
    svg: "blog",
    target: "_self",
  },
  {
    id: "resume",
    text: "Resume",
    href: "/resume.pdf", // Contact email
    target: "_blank", // Open in a new tab
    svg: "cube",
  },
  {
    id: "contact",
    text: "Contact",
    href: "mailto:avnishsinghch@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },

];


// Social media and contact icons
export const socialIcons = [
  {
    href: "https://linkedin.com/in/avnishsingh-ch",
    ariaLabel: "LinkedIn",
    title: "LinkedIn",
    svg: "linkedin",
  },
  {
    href: "https://github.com/AvnishSingh-Ch",
    ariaLabel: "GitHub",
    title: "GitHub",
    svg: "github",
  },
  {
    href: "https://x.com/AvnishSingh_Ch",
    ariaLabel: "X (Twitter)",
    title: "X (Twitter)",
    svg: "x",
  },
  {
    href: "https://medium.com/@avnishsingh-ch",
    ariaLabel: "Blog",
    title: "Blog",
    svg: "blog",
  },
];
