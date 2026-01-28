import { Badge } from '../components/ui/badge';
import { GraduationCap, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

const education = [
  {
    period: '2024',
    school: 'Sanbercode Scholarship Bootcamp',
    major: 'Fullstack Web Development (NestJS & Remix)',
    color: 'blue',
    highlights: [
      'Built end-to-end fullstack applications using NestJS (REST API) and Remix (SSR frontend).',
      'Implemented authentication, role-based access control with protected routes.',
      'Designed scalable backend architecture with PostgreSQL and Prisma ORM.',
      'Developed modern UIs using Tailwind CSS and others component.',
    ],
  },
  {
    period: '2021 – 2023',
    school: 'SMK Negeri 2 Palembang',
    major: 'Mechatronics Engineering',
    color: 'green',
    highlights: [
      'Introduced to web development using JavaScript, React, and Tailwind CSS.',
      'Gained experience with automation, basic IoT, and logical programming.',
      'Worked with CNC simulation and basic industrial automation concepts.',
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative overflow-hidden py-20
        bg-gradient-to-br from-slate-950 via-slate-900 to-black
        text-zinc-100
      "
    >
      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-600/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-purple-600/10 blur-3xl rounded-full" />

      {/* Header */}
      <div
        className="container mx-auto max-w-4xl px-4 mb-16 text-center relative z-10"
        data-aos="fade-up"
      >
        <Badge className="bg-zinc-800 text-zinc-200 inline-flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Education
        </Badge>

        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">
          Academic Background
        </h2>

        <p className="mt-3 text-zinc-400 max-w-xl mx-auto">
          Learning foundations built through formal education and
          industry-focused intensive training.
        </p>
      </div>

      {/* Timeline */}
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        {/* Line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-zinc-700/40 to-purple-500/40" />

        <div className="space-y-14">
          {education.map((edu, i) => {
            const accent = edu.color === 'blue' ? 'blue' : 'green';

            return (
              <div
                key={i}
                className="relative pl-14"
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                {/* Dot */}
                <div
                  className="
                    absolute left-[14px] top-4 w-4 h-4 rounded-full
                    bg-gradient-to-br from-blue-500 to-purple-500
                    shadow-[0_0_0_6px_rgba(59,130,246,0.15)]
                  "
                />

                {/* Card */}
                <div
                  className="
                    grid grid-cols-1 md:grid-cols-4 gap-6
                    rounded-xl border border-zinc-800
                    bg-zinc-900/60 px-6 py-6
                    backdrop-blur-sm transition
                    hover:border-zinc-700
                  "
                >
                  {/* Left */}
                  <div className="md:col-span-1 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>

                    <h3 className="text-lg font-semibold leading-snug">
                      {edu.school}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {edu.major}
                    </p>

                    <div
                      className={`flex items-center gap-2 text-xs pt-2 text-${accent}-400`}
                    >
                      <Sparkles className="w-4 h-4" />
                      Key Learnings
                    </div>
                  </div>

                  {/* Right */}
                  <div className="md:col-span-3">
                    <ul className="space-y-3">
                      {edu.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="
                            flex items-start gap-3
                            rounded-lg border border-zinc-700
                            bg-zinc-800/60 px-4 py-3
                            text-sm leading-relaxed
                          "
                        >
                          <CheckCircle2
                            className={`mt-0.5 h-4 w-4 shrink-0 text-${accent}-400`}
                          />
                          <span className="text-zinc-300">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
