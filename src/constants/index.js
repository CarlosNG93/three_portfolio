import {
  backend,
  php,
  web,
  javascript,
  creator,
  typescript,
  cypress,
  jest,
  fitness,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  youtube,
  indra,
  freelance,
  restaurant,
  ecommerce,
  metric,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "cypress",
    icon: cypress,
  },
  {
    name: "jest",
    icon: jest,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Indra",
    icon: indra,
    iconBg: "#383E56",
    date: "October 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Freeelance Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Youtube Clone",
    description:
      "Web-based platform that allows users to search and listen music",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
	  {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/CarlosNG93/youtube_clone",
  },
  {
    name: "ecommerce",
    description:
      "Web application that enables users to search and buy things",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/CarlosNG93/ecommerce",
  },
  {
    name: "Fitness App",
    description:
      "Web application that allows users to search for exercises according to each part of the body, as well as explanatory videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/CarlosNG93/fitness",
  },
];

export { services, technologies, experiences, projects };
