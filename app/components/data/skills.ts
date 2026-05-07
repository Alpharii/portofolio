import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPhp,
  SiNextdotjs,
  SiVuedotjs,
  SiRemix,
  SiReactrouter,
  SiNestjs,
  SiGin,
  SiLaravel,
  SiRedis,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiNginx,
} from "react-icons/si";

import {
  FaReact,
  FaDocker,
} from "react-icons/fa";

import { RiCloudLine } from "react-icons/ri";

import {
  LayoutGrid,
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
} from "lucide-react";

export const Categories = [
  'All',
  'Language',
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
] as const;

type Category = (typeof Categories)[number];

export const CAT_ICONS: Record<Category, React.ElementType> = {
  All: LayoutGrid,
  Language: Code2,
  Frontend: Monitor,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
};

export const skills = [
  // Language
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3B82F6', category: 'Language' },
  { name: 'Go',         icon: SiGo,         color: '#00ADD8', category: 'Language' },
  { name: 'PHP',        icon: SiPhp,        color: '#8B7FD4', category: 'Language' },

  // Frontend
  { name: 'React',        icon: FaReact,        color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js',      icon: SiNextdotjs,    color: '#aaaaaa', category: 'Frontend' },
  { name: 'Vue 3',        icon: SiVuedotjs,     color: '#42B883', category: 'Frontend' },
  { name: 'Remix',        icon: SiRemix,        color: '#8B9DFF', category: 'Frontend' },
  { name: 'React Router', icon: SiReactrouter,  color: '#CA4245', category: 'Frontend' },

  // Backend
  { name: 'NestJS',  icon: SiNestjs,  color: '#E0234E', category: 'Backend' },
  { name: 'Gin',     icon: SiGin,     color: '#0EA5E9', category: 'Backend' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', category: 'Backend' },

  // Database
  { name: 'Redis',      icon: SiRedis,      color: '#DC382D', category: 'Database' },
  { name: 'MySQL',      icon: SiMysql,      color: '#4479A1', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
  { name: 'MongoDB',    icon: SiMongodb,    color: '#47A248', category: 'Database' },
  { name: 'Prisma',     icon: SiPrisma,     color: '#5A67D8', category: 'Database' },

  // DevOps
  { name: 'Docker', icon: FaDocker,     color: '#2496ED', category: 'DevOps' },
  { name: 'Nginx',  icon: SiNginx,      color: '#009900', category: 'DevOps' },
  { name: 'CI/CD',  icon: RiCloudLine,  color: '#A855F7', category: 'DevOps' },
];

export function hexToRgba(hex: any, alpha = 0.12) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}