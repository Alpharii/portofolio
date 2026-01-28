import { FaReact, FaCode } from 'react-icons/fa';
import { SiNestjs, SiPostgresql, SiPrisma, SiReactrouter, SiGooglegemini, SiTailwindcss, SiMui, SiTypescript, SiShadcnui, SiVitest } from 'react-icons/si';
import { RiJavascriptLine, RiNextjsFill, RiQuillPenAiFill, RiRemixRunFill, RiSecurePaymentFill } from 'react-icons/ri';
import { FaGolang } from 'react-icons/fa6';

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
    title: 'AI Chatbot',
    description:
      'AI-powered chatbot with natural language processing and context-aware responses.',
    images: [
      '/projects/ai-chatbot/1.png',
      '/projects/ai-chatbot/2.png',
      '/projects/ai-chatbot/3.png',
      '/projects/ai-chatbot/4.png',
      '/projects/ai-chatbot/5.png',
    ],
    stack: [
      { icon: FaGolang, label: 'Golang' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiGooglegemini, label: 'Gemini API' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiReactrouter, label: 'React Router' },
      { icon: SiMui, label: 'Material UI' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: 'Fullstack',
  },
  {
    title: 'Buana CMS',
    description:
      'Web application designed to help sales teams efficiently manage customers, orders, and sales activities.',
    images: [
      '/projects/buana/1.png',
      '/projects/buana/2.png',
      '/projects/buana/3.png',
      '/projects/buana/4.png',
      '/projects/buana/5.png',
    ],
    stack: [
      { icon: FaGolang, label: 'Golang' },
      { icon: SiPostgresql, label: 'PostgreSQL' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: FaReact, label: 'React Hook Form' },
      { icon: SiShadcnui, label: 'Shadcn UI' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: 'Fullstack',
  },
  {
    title: 'Remix Boilerplate',
    description:
      'A starter kit using Remix with HTTP-only cookie authentication (preauth/postauth), flat routes, and Axios as the HTTP client.',
    images: [
      '/projects/remix-boilerplate/1.png',
      '/projects/remix-boilerplate/2.png',
      '/projects/remix-boilerplate/3.png',
      '/projects/remix-boilerplate/4.png',
      '/projects/remix-boilerplate/5.png',
    ],
    stack: [
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: FaReact, label: 'React Hook Form' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
    ],
    highlight: 'Frontend',
  },
  {
    title: 'Sticky Memo',
    description:
      'Contributed to an open-source sticky note web application built with React and Material UI.',
    images: [
      '/projects/sticky-memo/1.png',
      '/projects/sticky-memo/2.png',
      '/projects/sticky-memo/3.png',
    ],
    stack: [
      { icon: FaReact, label: 'React' },
      { icon: RiJavascriptLine, label: 'Javascript' },
      { icon: SiMui, label: 'Material UI' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },

    ],
    highlight: 'Open Source Contribution',
  },
    {
    title: 'EYP Summer Training Camp Website',
    description:
      'Contributed to an open-source website for the EYP Summer Training Camp.',
    images: [
      '/projects/eyp-summer-camp/1.png',
      '/projects/eyp-summer-camp/2.png',
      '/projects/eyp-summer-camp/3.png',
    ],
    stack: [
      { icon: RiNextjsFill, label: 'Next.js' },
      { icon: FaReact, label: 'React' },
      { icon: SiTypescript, label: 'Typescript' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },

    ],
    highlight: 'Open Source Contribution',
  },
  {
    title: 'ClickCode.id',
    description:
      'Developed a landing page for ClickCode.id, a digital agency focusing on website development services.',
    images: [
      '/projects/clickcode/1.png',
      '/projects/clickcode/2.png',
      '/projects/clickcode/3.png',
    ],
    stack: [
      { icon: RiRemixRunFill, label: 'Remix' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiShadcnui, label: 'Shadcn UI' },
      { icon: SiVitest, label: 'Vite' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },

    ],
    highlight: 'Frontend',
  },
  {
    title: 'GadgetSpot E-Commerce',
    description:
      'Developed a scalable e-commerce platform with payment integration with team of 4.',
    images: [
      '/projects/gadgetspot/1.png',
      '/projects/gadgetspot/2.png',
      '/projects/gadgetspot/3.png',
    ],
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
    highlight: 'Fullstack',
  },
  {
    title: 'My Blog App',
    description:
      'Developed a social-blogging platform that combines blog content with social interactions.',
    images: [
      '/projects/my-blog-app/1.png',
      '/projects/my-blog-app/2.png',
      '/projects/my-blog-app/3.png',
    ],
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
    highlight: 'Fullstack',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
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
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="container mx-auto max-w-4xl px-4 mb-16 text-center relative z-10"
      >
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
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
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
            <SwiperSlide key={i} className="!w-[340px] md:!w-[520px]">
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

                    <h3 className="text-xl font-bold">{project.title}</h3>

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
