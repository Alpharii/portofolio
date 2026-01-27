import { Badge } from '../components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Briefcase, MapPin, CheckCircle, Code } from 'lucide-react';
import type { JSX } from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiRemixRunFill } from 'react-icons/ri';
import { SiNestjs, SiPostgresql, SiNextdotjs, SiStrapi } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    company: 'PT Elnusa Petrofin Tbk',
    role: 'Fullstack Web Developer',
    location: 'Jakarta Selatan (Remote)',
    period: 'Feb 2025 – Present',
    image: '/elnusa.jpg',
    stack: ['NestJS', 'PostgreSQL', 'Remix', 'NextJS', 'NodeJS', 'React'],
    bullets: [
      'Internal enterprise apps used by 10,000+ employees.',
      'NestJS & PostgreSQL backend with clean architecture.',
      'Auth, RBAC, file uploads, reporting modules.',
      'Agile Scrum environment.',
    ],
    accent: 'blue',
  },
  {
    id: 2,
    company: 'Freelance (Self-Employed)',
    role: 'Freelance Fullstack Web Developer',
    location: 'Remote',
    period: 'Jan 2025 – Apr 2025',
    image: '/freelance.jpg',
    stack: ['NextJS', 'Remix', 'NestJS', 'Golang', 'Strapi'],
    bullets: [
      'Production-ready landing pages with shadcn/ui.',
      'Backend using NestJS, Strapi CMS & Golang.',
      'Integrated Mollie payment gateway for SaaS.',
    ],
    accent: 'green',
  },
];

const techIcon = (tech: string) => {
  const map: Record<string, JSX.Element> = {
    NodeJS: <FaNodeJs className="w-4 h-4" />,
    React: <FaReact className="w-4 h-4" />,
    NestJS: <SiNestjs className="w-4 h-4" />,
    PostgreSQL: <SiPostgresql className="w-4 h-4" />,
    NextJS: <SiNextdotjs className="w-4 h-4" />,
    Strapi: <SiStrapi className="w-4 h-4" />,
    Golang: <FaGolang className="w-4 h-4" />,
    Remix: <RiRemixRunFill className="w-4 h-4" />,
  };

  return map[tech] ?? <Code className="w-4 h-4" />;
};

const Experiences = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black py-20 text-zinc-100 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute w-[480px] h-[480px] bg-blue-600/10 blur-3xl rounded-full -top-28 -left-28" />
      <div className="absolute w-[420px] h-[420px] bg-green-600/10 blur-3xl rounded-full -bottom-24 -right-28" />

      {/* Header */}
      <div className="container mx-auto px-4 text-center space-y-6 mb-14 relative z-10">
        <Badge className="bg-zinc-800 text-zinc-200 inline-flex items-center gap-2">
          <Briefcase className="h-4 w-4" />
          Experience
        </Badge>

        <h2 className="text-3xl md:text-4xl font-extrabold">
          Professional Experience
        </h2>

        <p className="text-zinc-400 max-w-2xl mx-auto">
          Building scalable enterprise systems and production-ready web
          applications.
        </p>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(exp => (
            <Card
              key={exp.id}
              className="
                p-0 bg-zinc-900/70 border border-zinc-800 overflow-hidden
                backdrop-blur-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-200 rounded-[10px]
              "
              data-aos="fade-up"
            >
              {/* Image TOP */}
              <div className="relative h-48 w-full bg-amber-200">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-900/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                <CardHeader className="p-0 mb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-lg md:text-xl">
                        {exp.role}
                      </CardTitle>
                    </div>

                    <Badge
                      className={`shrink-0 ${
                        exp.accent === 'blue'
                          ? 'bg-blue-600/10 text-blue-300'
                          : 'bg-green-600/10 text-green-300'
                      }`}
                    >
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-zinc-400 mt-1">
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="p-0 text-zinc-300">
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <CheckCircle
                          className={`h-4 w-4 mt-0.5 ${
                            exp.accent === 'blue'
                              ? 'text-blue-400'
                              : 'text-green-400'
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(tech => (
                      <div
                        key={tech}
                        className="
                          flex items-center gap-2 px-3 py-1 rounded-full
                          text-xs bg-zinc-800/60 border border-zinc-700
                        "
                      >
                        {techIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
