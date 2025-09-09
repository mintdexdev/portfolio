import { links } from './links'

export const navList = [
  { name: "Projects", link: "#section-projects" },
  { name: "Stack", link: "#section-stack" },
  { name: "Skills", link: "#section-skills" },
  { name: "About", link: "#section-about" },
  { name: "Contact", link: "#section-contact" }
]

export const socialLinksList = [
  {
    name: "X",
    link: links.x
  },
  {
    name: "LinkedIn",
    link: links.linkedIn
  },
  {
    name: "Github",
    link: links.github
  },
]
export const otherLinksList = [
  {
    name: "All Projects",
    link: links.allProjects
  },
  {
    name: "Email Me",
    link: `mailTo:${links.workEmail}`
  },
]


export const projectList = [
  {
    id: 1,
    name: "Space Exploration",
    imgSrc: "/assets/36.avif",
    sourceCodeLink: "https://github.com/mintdexdev/frontendmentor/tree/main/p36_space_tourism",
    liveLink: "https://mintdexdev.github.io/frontendmentor/projects/p36_space_tourism/index.html",
    tags: ["June 2025", "React", "TailwindCss", "ReactRouter", "JavaScript", "CSS", "HTML"]
  },
  {
    id: 2,
    name: "Furniture Showcase",
    imgSrc: "/assets/35.avif",
    sourceCodeLink: "https://github.com/mintdexdev/frontendmentor/tree/main/p35_room",
    liveLink: "https://mintdexdev.github.io/frontendmentor/projects/p35_room/index.html",
    tags: ["June 2025", "React", "TailwindCss", "JavaScript", "CSS", "HTML"]
  },
  {
    id: 3,
    name: "Loop Studios Page",
    imgSrc: "/assets/33.avif",
    sourceCodeLink: "https://github.com/mintdexdev/frontendmentor/tree/main/p33_loopstudios",
    liveLink: "https://mintdexdev.github.io/frontendmentor/projects/p33_loopstudios/index.html",
    tags: ["June 2025", "React", "TailwindCss", "JavaScript", "CSS", "HTML"]
  },
  {
    id: 4,
    name: "SunnySide Page",
    imgSrc: "/assets/32.avif",
    sourceCodeLink: "https://github.com/mintdexdev/frontendmentor/tree/main/p32_sunnyside_agency",
    liveLink: "https://mintdexdev.github.io/frontendmentor/projects/p32_sunnyside_agency/index.html",
    tags: ["June 2025", "React", "TailwindCss", "JavaScript", "CSS", "HTML"]
  }
]

export const developmentStackList = [
  {
    title: "Core",
    skills: [
      { name: "React", imgSrc: "/assets/logos/react.svg", alt: "react Logo" },
      { name: "NextJs", imgSrc: "/assets/logos/nextjs.svg", alt: "nextjs Logo" },
      { name: "TailwindCss", imgSrc: "/assets/logos/tailwindcss.svg", alt: "tailwindcss Logo" },
      { name: "TypeScript", imgSrc: "/assets/logos/typescript.svg", alt: "typescript Logo" },
      { name: "JavaScript", imgSrc: "/assets/logos/javascript.svg", alt: "javascript Logo" },
      { name: "CSS", imgSrc: "/assets/logos/css.svg", alt: "css Logo" },
      { name: "HTML", imgSrc: "/assets/logos/html.svg", alt: "html Logo" },
    ]
  },
  {
    title: "Exposure Tech",
    skills: [
      { name: "Firebase", imgSrc: "/assets/logos/firebase.svg", alt: "firebase Logo" },
      { name: "Appwrite", imgSrc: "/assets/logos/appwrite.svg", alt: "appwrite Logo" },
      { name: "Mongodb", imgSrc: "/assets/logos/mongodb.svg", alt: "mongodb Logo" },
      { name: "Postgresql", imgSrc: "/assets/logos/postgresql.svg", alt: "postgresql Logo" },
      { name: "Cpp", imgSrc: "/assets/logos/cpp.svg", alt: "cpp Logo" },
      { name: "Python", imgSrc: "/assets/logos/python.svg", alt: "python Logo" },
    ]
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", imgSrc: "/assets/logos/git.svg", alt: "git Logo" },
      { name: "Github", imgSrc: "/assets/logos/github.svg", alt: "github Logo" },
      { name: "Nodejs", imgSrc: "/assets/logos/nodejs.svg", alt: "nodejs Logo" },
      { name: "Docker", imgSrc: "/assets/logos/docker.svg", alt: "docker Logo" },
    ]
  },
  {
    title: "Known Libraries",
    skills: ["Three", "GSAP", "Motion"]
  },
]

export const designStackList = [
  {
    title: "Design & Prototype Tools",
    skills: [
      { name: "Figma", imgSrc: "/assets/logos/figma.svg", alt: "figma Logo" },
      { name: "Framer", imgSrc: "/assets/logos/framer.svg", alt: "framer Logo" },
      { name: "Webflow", imgSrc: "/assets/logos/webflow.svg", alt: "webflow Logo" },
    ]
  },
  {
    title: "Creater Tools",
    skills: [
      { name: "Photoshop", imgSrc: "/assets/logos/photoshop.svg", alt: "photoshop Logo" },
      { name: "Illustrator", imgSrc: "/assets/logos/illustrator.svg", alt: "illustrator Logo" },
      { name: "Blender", imgSrc: "/assets/logos/blender.svg", alt: "blender Logo" },
    ]
  },
]

export const skillList = [
  // Design / Development
  "UI Design & Wireframing",
  "Prototyping & Interaction Design",
  "Development of Website",
  "Efficient State Management",
  "API Integration (REST)",
  "Crafting Responsive Interfaces",
  "Testing & Debugging",
  "Performance Optimization",
  "Cross-Browser Compatibility",
  "Version Control (Git/GitHub)",
]