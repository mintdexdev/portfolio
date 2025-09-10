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
    title: "Frontend Development",
    skills: [
      { name: "React", imgSrc: "/assets/logos/react.svg", alt: "react logo" },
      { name: "Next.Js", imgSrc: "/assets/logos/nextjs.svg", alt: "nextjs logo" },
      { name: "Tailwind CSS", imgSrc: "/assets/logos/tailwindcss.svg", alt: "tailwindcss logo" },
      { name: "JavaScript", imgSrc: "/assets/logos/javascript.svg", alt: "javascript logo" },
      { name: "TypeScript", imgSrc: "/assets/logos/typescript.svg", alt: "typescript logo" },
      { name: "CSS", imgSrc: "/assets/logos/css.svg", alt: "css logo" },
      { name: "HTML", imgSrc: "/assets/logos/html.svg", alt: "html logo" },
    ]
  },
  {
    title: "Frontend Libraries",
    skills: [
      { name: "Three.js", imgSrc: "/assets/logos/threejs.svg", alt: "threejs logo" },
      { name: "GSAP", imgSrc: "/assets/logos/gsap.svg", alt: "gsap logo" },
      { name: "Motion", imgSrc: "/assets/logos/motion.svg", alt: "motion logo" },
    ]
  },
  {
    title: "Development Tools",
    skills: [
      { name: "Git", imgSrc: "/assets/logos/git.svg", alt: "git logo" },
      { name: "Github", imgSrc: "/assets/logos/github.svg", alt: "github logo" },
    ]
  },
  {
    title: "Exposure Tech",
    skills: [
      { name: "Firebase", imgSrc: "/assets/logos/firebase.svg", alt: "firebase logo" },
      { name: "Appwrite", imgSrc: "/assets/logos/appwrite.svg", alt: "appwrite logo" },
      { name: "Mongodb", imgSrc: "/assets/logos/mongodb.svg", alt: "mongodb logo" },
      { name: "Postgresql", imgSrc: "/assets/logos/postgresql.svg", alt: "postgresql logo" },
      { name: "Nodejs", imgSrc: "/assets/logos/nodejs.svg", alt: "nodejs logo" },
      { name: "Cpp", imgSrc: "/assets/logos/cpp.svg", alt: "cpp logo" },
      { name: "Python", imgSrc: "/assets/logos/python.svg", alt: "python logo" },
      { name: "Docker", imgSrc: "/assets/logos/docker.svg", alt: "docker logo" },
    ]
  }
]

export const designStackList = [
  {
    title: "Design & Prototype Tools",
    skills: [
      { name: "Figma", imgSrc: "/assets/logos/figma.svg", alt: "figma logo" },
      { name: "Framer", imgSrc: "/assets/logos/framer.svg", alt: "framer logo" },
      { name: "Webflow", imgSrc: "/assets/logos/webflow.svg", alt: "webflow logo" },
    ]
  },
  {
    title: "Creater Tools",
    skills: [
      { name: "Photoshop", imgSrc: "/assets/logos/photoshop.svg", alt: "photoshop logo" },
      { name: "Illustrator", imgSrc: "/assets/logos/illustrator.svg", alt: "illustrator logo" },
      { name: "Blender", imgSrc: "/assets/logos/blender.svg", alt: "blender logo" },
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