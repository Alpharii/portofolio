import { Badge } from '../components/ui/badge';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { FaReact, FaDocker, FaPhp } from 'react-icons/fa';
import {
  SiRemix,
  SiVuedotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGo,
  SiGin,
  SiNginx,
  SiMysql,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiRedis,
  SiLaravel,
  SiReactrouter,
} from 'react-icons/si';
import { RiCloudLine } from 'react-icons/ri';
import { Code } from 'lucide-react';

export const skills = [
  // Languages
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'Go', icon: SiGo, color: 'text-cyan-400' },
  { name: 'PHP', icon: FaPhp, color: 'text-indigo-400' },

  // Frontend
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-zinc-200' },
  { name: 'Vue 3', icon: SiVuedotjs, color: 'text-emerald-400' },
  { name: 'Remix', icon: SiRemix, color: 'text-indigo-300' },
  { name: 'React Router', icon: SiReactrouter, color: 'text-red-400' },

  // Backend
  { name: 'NestJS', icon: SiNestjs, color: 'text-rose-500' },
  { name: 'Gin', icon: SiGin, color: 'text-sky-300' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-400' },

  // Datastore
  { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-sky-200' },

  // DevOps
  { name: 'Docker', icon: FaDocker, color: 'text-sky-500' },
  { name: 'Nginx', icon: SiNginx, color: 'text-green-400' },
  { name: 'CI/CD', icon: RiCloudLine, color: 'text-violet-400' },
];

export const Skills = () => {
  const chunkSize = 10;
  const pages = [];

  for (let i = 0; i < skills.length; i += chunkSize) {
    pages.push(skills.slice(i, i + chunkSize));
  }

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-zinc-100 sm:py-20"
    >
      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-600/10 blur-3xl rounded-full" />

      {/* Header */}
      <div className="relative z-10 mb-14 text-center" data-aos="fade-up">
        <Badge className="bg-zinc-800 text-zinc-200 inline-flex items-center gap-2">
          <Code className="w-4 h-4" />
          Skills
        </Badge>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Tech Stack
        </h2>


        <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
          Technologies I actively use in real-world projects.
        </p>
      </div>

      {/* Swiper */}
      <div
        className="relative z-10 mx-auto max-w-6xl px-10 py-10"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={32}
          loop
        >
          {pages.map((page, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    gap-4 sm:gap-6
                  "
              >
                {page.map(skill => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      className="
                        group flex flex-col items-center justify-center
                        gap-2 sm:gap-3
                        rounded-2xl sm:rounded-3xl
                        border border-zinc-800
                        bg-zinc-900/60 backdrop-blur
                        px-4 py-6 sm:px-6 sm:py-8
                        transition
                        hover:border-zinc-600
                        hover:bg-zinc-900
                      "
                    >
                      <Icon
                        className={`
                          h-8 w-8 sm:h-10 sm:w-10
                          ${skill.color}
                          transition
                          group-hover:scale-110
                        `}
                      />
                      <span className="text-xs sm:text-sm text-zinc-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
