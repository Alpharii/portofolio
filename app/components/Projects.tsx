import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNestjs, SiRemix, SiPostgresql, SiPrisma } from 'react-icons/si';

import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FolderOpen, Sparkles } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles/projects-swiper.css';


const projects = [
  {
    title: 'RBAC News Backend',
    description:
      'Role-based access control backend system with authentication, permission handling, and scalable architecture.',
    images: [
      '/projects/rbac/1.png',
      '/projects/rbac/2.png',
      '/projects/rbac/3.png',
      '/projects/rbac/4.png',
      '/projects/rbac/5.png',
    ],
    stack: [
      { icon: SiNestjs, label: 'NestJS' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiPrisma, label: 'Prisma' },
    ],
    highlight: 'Backend',
  },
    {
    title: 'RBAC News Backend',
    description:
      'Role-based access control backend system with authentication, permission handling, and scalable architecture.',
    images: [
      '/projects/rbac/1.png',
      '/projects/rbac/2.png',
      '/projects/rbac/3.png',
      '/projects/rbac/4.png',
      '/projects/rbac/5.png',
    ],
    stack: [
      { icon: SiNestjs, label: 'NestJS' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiPrisma, label: 'Prisma' },
    ],
    highlight: 'Backend',
  },
    {
    title: 'RBAC News Backend',
    description:
      'Role-based access control backend system with authentication, permission handling, and scalable architecture.',
    images: [
      '/projects/rbac/1.png',
      '/projects/rbac/2.png',
      '/projects/rbac/3.png',
      '/projects/rbac/4.png',
      '/projects/rbac/5.png',
    ],
    stack: [
      { icon: SiNestjs, label: 'NestJS' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiPrisma, label: 'Prisma' },
    ],
    highlight: 'Backend',
  },
  {
    title: 'Account Management System',
    description:
      'Fullstack web app for managing users, hobbies, and favorite characters with SSR and authentication.',
    images: [
      '/projects/account/1.png',
      '/projects/account/2.png',
      '/projects/account/3.png',
    ],
    stack: [
      { icon: SiRemix, label: 'Remix' },
      { icon: FaReact, label: 'React' },
      { icon: FaNodeJs, label: 'Node.js' },
    ],
    highlight: 'Fullstack',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative overflow-hidden py-20
        bg-gradient-to-br from-slate-950 via-slate-900 to-black
        text-zinc-100
      "
    >
      {/* Glow */}
      <div className="absolute -top-32 right-0 w-[420px] h-[420px] bg-purple-600/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 left-0 w-[420px] h-[420px] bg-blue-600/10 blur-3xl rounded-full" />

      {/* Header */}
      <div className="container mx-auto max-w-4xl px-4 mb-16 text-center relative z-10">
        <Badge className="bg-zinc-800 text-zinc-200 inline-flex items-center gap-2">
          <FolderOpen className="w-4 h-4" />
          Projects
        </Badge>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Selected Works
        </h2>

        <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
          Swipe through projects and explore image galleries inside each card.
        </p>
      </div>

      {/* CARD SWIPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={28}
          slidesPerView="auto"
          grabCursor
          centeredSlides={false}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          pagination={{ clickable: true }}
          className="
            !pb-12
            projects-swiper
          "
        >
          {projects.map((project, i) => (
            <SwiperSlide
              key={i}
              className="!w-[340px] md:!w-[520px]"
            >
              <div
                className="
                  h-full rounded-2xl border border-zinc-800
                  bg-zinc-900/60 p-5
                  backdrop-blur-sm transition
                  hover:border-zinc-700
                  hover:scale-[1.01]
                  flex flex-col
                "
              >
                {/* IMAGE SWIPER */}
                <div className="relative mb-5 rounded-xl overflow-hidden border border-zinc-800">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    nested
                    className="h-56"
                  >
                    {project.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`${project.title} ${idx + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-blue-400">
                      <Sparkles className="w-4 h-4" />
                      {project.highlight}
                    </div>

                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* STACK */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.stack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="
                            flex items-center gap-2
                            rounded-lg border border-zinc-700
                            bg-zinc-800/60 px-3 py-2
                            text-xs text-zinc-200
                          "
                        >
                          <tech.icon className="w-4 h-4 text-blue-400" />
                          {tech.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="pt-5">
                    <Button
                      variant="outline"
                      className="
                        w-full border-zinc-700 text-zinc-200
                        hover:bg-zinc-800
                      "
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};


export default Projects;
