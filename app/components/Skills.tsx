import { useState } from 'react';
import { Code } from 'lucide-react';
import { CAT_ICONS, Categories, hexToRgba, skills } from './data/skills';

export const Skills = () => {
  const [active, setActive] = useState('All');
  const [animKey, setAnimKey] = useState(0);

  const filtered =
    active === 'All' ? skills : skills.filter(s => s.category === active);

  const handleCat = (cat: any) => {
    setActive(cat);
    setAnimKey(k => k + 1);
  };

  // Duplicate for seamless marquee loop
  const marqueeItems = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="relative py-24 bg-linear-to-br from-slate-950 via-slate-900 to-black text-zinc-100 sm:py-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-160 h-160 bg-blue-700/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-100 h-100 bg-violet-700/8 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8">

        {/* Header */}
        <div className="mb-12 text-center" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/60 px-4 py-1 text-xs text-zinc-400">
            <Code className="h-3.5 w-3.5" />
            Skills
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm text-zinc-400 max-w-md mx-auto">
            Technologies I actively use in real-world projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {Categories.map(cat => {
            const count =
              cat === 'All'
                ? skills.length
                : skills.filter(s => s.category === cat).length;

            const isActive = active === cat;

            const Icon = CAT_ICONS[cat];

            return (
              <button
                key={cat}
                onClick={() => handleCat(cat)}
                className={`
                  inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium
                  border transition-all duration-200
                  ${
                    isActive
                      ? 'border-zinc-400 bg-zinc-100 text-zinc-900'
                      : 'border-zinc-700 bg-zinc-800/60 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                  }
                `}
              >
                <Icon className="h-4 w-4" />

                {cat}

                <span
                  className={`ml-0.5 text-[10px] ${
                    isActive ? 'text-zinc-500' : 'text-zinc-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div
          key={animKey}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {filtered.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-6 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                {/* Icon */}
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: hexToRgba(skill.color, 0.12) }}
                >
                  <Icon
                    className="text-2xl transition-transform duration-200 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>

                {/* Name */}
                <div className="text-center">
                  <p className="text-xs leading-tight font-medium text-zinc-200">
                    {skill.name}
                  </p>
                  <p className="mt-0.5 text-[10px] text-zinc-600">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marquee */}
        <div
          className="mt-14 overflow-hidden border-t border-zinc-800 pt-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="hover:paused flex w-max animate-[marquee_32s_linear_infinite] gap-8">
            {marqueeItems.map((skill, i) => {
              const Icon = skill.icon;

              return (
                <span
                  key={i}
                  className="flex items-center gap-2 whitespace-nowrap text-xs text-zinc-500"
                >
                  <Icon
                    className="text-base"
                    style={{ color: skill.color }}
                  />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
