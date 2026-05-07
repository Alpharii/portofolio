import { useState } from "react";
import { Sparkles, FolderOpen, ArrowUpRight, Code2, Globe, GitMerge } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { projects } from "./data/projects";

const CARD_GRADIENTS = [
  "from-violet-600/30 via-purple-900/20 to-slate-900",
  "from-blue-600/30 via-cyan-900/20 to-slate-900",
  "from-emerald-600/30 via-teal-900/20 to-slate-900",
  "from-amber-600/30 via-orange-900/20 to-slate-900",
  "from-rose-600/30 via-pink-900/20 to-slate-900",
  "from-sky-600/30 via-indigo-900/20 to-slate-900",
  "from-fuchsia-600/30 via-violet-900/20 to-slate-900",
  "from-lime-600/30 via-green-900/20 to-slate-900",
];

const FILTERS = ["All", "Fullstack", "Frontend", "Backend", "Open Source"];

const highlightIcon = (h: any) => {
  if (h === "Fullstack") return <Code2 className="w-3 h-3" />;
  if (h === "Frontend") return <Globe className="w-3 h-3" />;
  return <GitMerge className="w-3 h-3" />;
};

const highlightColor = (h: any) => {
  if (h === "Fullstack") return "bg-violet-500/15 text-violet-300 border-violet-500/30";
  if (h === "Frontend") return "bg-sky-500/15 text-sky-300 border-sky-500/30";
  return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => active === "All" || p.highlight === active
  );

  return (
    <section
      id="portfolio"
      className="relative min-h-screen py-24 bg-[#080B14] text-white overflow-hidden"
    >
      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-150 h-150 bg-violet-700/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-700/5 rounded-full blur-[120px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/60 text-zinc-400 text-xs tracking-widest uppercase mb-6 backdrop-blur-sm">
            <FolderOpen className="w-3.5 h-3.5 text-violet-400" />
            Portfolio
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
            <span className="text-white">Selected</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #34d399 100%)",
              }}
            >
              Works
            </span>
          </h2>

          <p className="mt-5 text-zinc-500 max-w-md mx-auto text-sm leading-relaxed">
            A curated collection of projects spanning fullstack applications,
            frontend builds, and open-source contributions.
          </p>

          {/* ── Filter pills ── */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 border ${
                  active === f
                    ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-900/40"
                    : "border-zinc-700/60 bg-zinc-900/40 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
                }`}
              >
                {f}
                <span
                  className={`ml-2 text-[10px] ${
                    active === f ? "text-violet-200" : "text-zinc-600"
                  }`}
                >
                  {f === "All"
                    ? projects.length
                    : projects.filter((p) => p.highlight === f).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const grad = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
            const isHovered = hovered === i;

            return (
              <article
                key={project.title}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative flex flex-col rounded-2xl border bg-zinc-900/40 backdrop-blur-sm overflow-hidden transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? "border-zinc-600 -translate-y-1 shadow-2xl shadow-black/40"
                    : "border-zinc-800/60"
                }`}
              >
                {/* Card gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* ── Image placeholder ── */}
                <div className="relative h-48 overflow-hidden border-b border-zinc-800/60">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 1000 }}
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                  >
                    {project.images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`${project.title}-${idx}`}
                          className="w-full h-full object-cover"
                          onError={(e: any) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[10px] text-zinc-400 border border-zinc-700/60 z-10">
                    {project.year}
                  </div>
                </div>

                {/* ── Content ── */}
                <div className="relative flex flex-col flex-1 p-5 gap-4">
                  {/* Highlight badge */}
                  <div
                    className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11px] font-medium ${highlightColor(project.highlight)}`}
                  >
                    {highlightIcon(project.highlight)}
                    {project.highlight}
                  </div>

                  {/* Title + desc */}
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug mb-1.5 group-hover:text-violet-200 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.stack.slice(0, 5).map((tech, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/50 text-[11px] text-zinc-300"
                      >
                        <tech.icon className="w-3.5 h-3.5" />
                        {tech.label}
                      </span>
                    ))}

                    {project.stack.length > 5 && (
                      <span className="flex items-center px-2.5 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/30 text-[11px] text-zinc-500">
                        +{project.stack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action row */}
                  <div className="mt-auto pt-3 border-t border-zinc-800/60 flex items-center justify-between">
                    <span className="text-[11px] text-zinc-600">
                      {project.stack.length} technologies
                    </span>
                    <button className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors group/btn">
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ── Empty state ── */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-zinc-600 gap-3">
            <Sparkles className="w-8 h-8 opacity-30" />
            <p className="text-sm">No projects in this category yet.</p>
          </div>
        )}

        {/* ── Footer count ── */}
        <p className="text-center mt-12 text-xs text-zinc-700">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>
    </section>
  );
}