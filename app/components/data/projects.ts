import type { IconType } from "react-icons";
import { FaCode, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiJavascriptLine, RiNextjsFill, RiQuillPenAiFill, RiRemixRunFill, RiSecurePaymentFill } from "react-icons/ri";
import {
  SiPostgresql,
  SiTypescript,
  SiReactrouter,
  SiTailwindcss,
  SiMui,
  SiGooglegemini,
  SiShadcnui,
  SiVitest,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";

export type TechStack = {
  icon: IconType;
  label: string;
};

export type Project = {
  title: string;
  description: string;
  images: string[];
  stack: TechStack[];
  highlight: "Fullstack" | "Frontend" | "Backend" | "Open Source";
  year: string;
};

export const projects: Project[] = [
  {
    title: "Nonton Mykisah",
    description: "Web for Anime Streaming powered by Otakudesu Scrapper Api",
    images: [
      "/projects/nonton-mykisah/1.webp",
      "/projects/nonton-mykisah/2.webp",
      "/projects/nonton-mykisah/3.webp",
      "/projects/nonton-mykisah/4.webp",
    ],
    stack: [
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: FaReact, label: 'React Hook Form' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Fullstack",
    year: "2024",
  },
  {
    title: "ClickCode.id",
    description: "Landing page for ClickCode.id, a digital agency focusing on website development services.",
    images: ["/projects/clickcode/1.webp", "/projects/clickcode/2.webp", "/projects/clickcode/3.webp", "/projects/clickcode/4.webp"],
    stack: [
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiShadcnui, label: 'Shadcn UI' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Frontend",
    year: "2024",
  },
  {
    title: "AI Chatbot",
    description: "AI-powered chatbot with natural language processing and context-aware responses built on Golang backend.",
    images: ["/projects/ai-chatbot/1.png", "/projects/ai-chatbot/2.png", "/projects/ai-chatbot/3.png"],
    stack: [
      { icon: FaGolang, label: "Golang" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiGooglegemini, label: "Gemini API" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiReactrouter, label: "React Router" },
      { icon: SiMui, label: "Material UI" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
    ],    
    highlight: "Fullstack",
    year: "2024",
  },
  {
    title: "Buana CMS",
    description: "Web application to help sales teams efficiently manage customers, orders, and sales activities.",
    images: ["/projects/buana/1.png"],
    stack: [
      { icon: FaGolang, label: 'Golang' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: FaReact, label: 'React Hook Form' },
      { icon: SiShadcnui, label: 'Shadcn UI' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],    
    highlight: "Fullstack",
    year: "2024",
  },
  {
    title: "Remix Boilerplate",
    description: "Starter kit with HTTP-only cookie authentication, flat routes, and Axios as the HTTP client.",
    images: ["/projects/remix-boilerplate/1.webp", "/projects/remix-boilerplate/2.webp"],
    stack: [
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: FaReact, label: 'React Hook Form' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Frontend",
    year: "2024",
  },
  {
    title: "Ownlyst",
    description: "Contributed to an open-source sticky note web application built with React and Material UI.",
    images: ["/projects/ownlyst/1.webp", "/projects/ownlyst/2.webp", "/projects/ownlyst/3.webp"],
    stack: [
      { icon: FaReact, label: 'React' },
      { icon: RiJavascriptLine, label: 'Javascript' },
      { icon: SiMui, label: 'Material UI' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Open Source",
    year: "2023",
  },
  {
    title: "EYP Summer Camp",
    description: "Contributed to an open-source website for the EYP Summer Training Camp event.",
    images: ["/projects/eyp-summer-camp/1.png"],
    stack: [
      { icon: RiNextjsFill, label: 'Next.js' },
      { icon: FaReact, label: 'React' },
      { icon: SiTypescript, label: 'Typescript' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Open Source",
    year: "2023",
  },
  {
    title: "GadgetSpot",
    description: "Scalable e-commerce platform with payment gateway integration, built with a team of 4.",
    images: ["/projects/gadgetSpot/1.webp", "/projects/gadgetSpot/2.webp", "/projects/gadgetSpot/3.webp"],
    stack: [
      { icon: SiNestjs, label: 'NestJs' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiPrisma, label: 'Prisma' },
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: FaCode, label: 'Zustand' },
      { icon: RiSecurePaymentFill, label: 'Midtrans' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Fullstack",
    year: "2023",
  },
  {
    title: "My Blog App",
    description: "Social-blogging platform combining blog content with social interactions and rich text editing.",
    images: ["/projects/my-blog-app/1.png"],
    stack: [
      { icon: SiNestjs, label: 'NestJs' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiPrisma, label: 'Prisma' },
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: FaCode, label: 'Zustand' },
      { icon: RiQuillPenAiFill, label: 'React Quil' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: "Fullstack",
    year: "2023",
  },
];