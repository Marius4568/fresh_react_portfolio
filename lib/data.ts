import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mbrewImg from "@/public/mbrew.png";
import scraperImg from "@/public/scraper.webp";
import fileTreeGeneratorImg from "@/public/fileTreeGenerator.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance wordpress developer",
    location: "Klaipėda, Lithuania",
    description:
      "Together with my friend we made a couple of websites for local businesses using wordpress and no-code tools.",
    icon: React.createElement(FaWordpress),
    date: "2015-2016",
  },
  {
    title: "Code Academy student",
    location: "Vilnius, Lithuania",
    description:
      "At Code Academy, I advanced my frontend development skills, and gained hands-on experience in backend development and database management.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Frontend Developer, @Cherry team",
    location: "Klaipėda, Lithuania",
    description:
      "After graduating from code academy I started working as a frontend developer at Cherry team. I've learned to work more in a professional environment and collaborate with other developers.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
] as const;

export const projectsData = [
  {
    title: "Mbrew E-shop",
    description:
      "A full-stack project for an imaginary kombucha drink brand. It has login/registration functionality, seeing purchase history, shopping cart and checkout.",
    tags: ["React", "Styled Components", "PostgreSQL", "Strapi CMS", "Stripe API"],
    imageUrl: mbrewImg,
  },
  {
    title: "Codepen Scraper",
    description:
      "A web app for scraping codepen.io and seeing relevant data of a codepen user and his pens.",
    tags: ["Puppeteer", "TypeScript",],
    imageUrl: scraperImg,
  },
  {
    title: "'File tree generator' - VSCode plugin",
    description:
      "A VSCode plugin for generating a file tree of a project.",
    tags: ["Javascript", "VSCode API"],
    imageUrl: fileTreeGeneratorImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Tailwind",
  "SCSS",
  "Git",
  "Node.js",
  "Express",
  "GraphQL",
  "MySQL",
  "Strapi CMS",
  "Stripe API",
  "Puppeteer",
  "Gsap",
  "Framer Motion",
  "Figma",
] as const;