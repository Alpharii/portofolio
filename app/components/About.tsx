import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowRight, Users, Star, Award } from "lucide-react";

export const meta = () => {
  return [
    { title: "About Me" },
    {
      name: "description",
      content:
        "About me section – Fullstack Web Developer specializing in TypeScript, Golang, NestJS, NextJS, and RemixJS.",
    },
  ];
};

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black py-20 relative overflow-hidden text-zinc-100">
      {/* Background Glow */}
      <div className="absolute w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-3xl top-[-80px] left-[-80px]" />
      <div className="absolute w-[320px] h-[320px] bg-purple-600/20 rounded-full blur-3xl bottom-[-80px] right-[-80px]" />

      {/* Header */}
      <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
        <Badge variant="secondary" className="bg-zinc-800 text-zinc-200 text-sm">
          <Star className="h-6 w-6 mr-2" />
          About Me
        </Badge>

        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Experienced Full Stack Web Develeoper
        </h2>

        <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
          Fullstack Web Developer with experience building and deploying scalable
          applications using{" "}
          <span className="text-white font-medium">
            TypeScript, Golang, NestJS, NextJS, and RemixJS
          </span>
          . Proven in improving API performance up to 50% and supporting
          1,000+ active users across Web, SaaS, and Web3 platforms.
        </p>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Summary</h3>

          <p className="text-zinc-400 leading-relaxed">
            I specialize in designing clean architectures, building performant
            RESTful APIs, and developing modern, responsive user interfaces.
            I’ve worked in enterprise environments, SaaS products, and freelance
            projects—always focusing on scalability, maintainability, and real
            business impact.
          </p>

          <ul className="space-y-4 text-zinc-300">
            <li className="flex items-center gap-3">
              <Award className="h-5 w-5 text-blue-500" />
              Improved API response times by up to 30%.
            </li>
            <li className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-500" />
              Built systems used by 1,000+ enterprise employees.
            </li>
            <li className="flex items-center gap-3">
              <Star className="h-5 w-5 text-blue-500" />
              Experience in Web, SaaS, Management System platforms.
            </li>
          </ul>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-[5px]">
            <a href="#" className="flex items-center gap-2">
              Get In Touch <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Right */}
        <div className="relative w-full h-[420px]">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-[1rem] shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
