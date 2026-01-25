import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Code, ArrowRight, Sparkles, Code2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] pt-24 flex items-center bg-black px-4 overflow-hidden pb-10">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -top-32 -left-32" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-2xl -bottom-32 -right-32" />

      {/* Wrapper */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kolom Gambar */}
        <div className="relative w-full max-w-md mx-auto aspect-square">
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src="/hero.jpg"
            alt="Website Mockup"
            className="w-full h-full rounded-2xl shadow-2xl ring-1 ring-white/10"
          />

          {/* Floating Icon */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="absolute -top-6 -left-6 bg-zinc-900 border border-white/10 shadow-lg rounded-full p-3 animate-bounce"
          >
            <Code className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Kolom Teks */}
        <div className="text-left space-y-6 text-white">
          <Badge
            data-aos="fade-right"
            data-aos-delay="200"
            variant="secondary"
            className="px-3 py-1 rounded-full text-sm w-fit flex items-center gap-1 bg-white/10 text-white border border-white/10"
          >
            <Code2 className="h-4 w-4 text-primary" />
            Full Stack Web Developer
          </Badge>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Hi, I’m <span className="text-primary">Muhammad Bintang</span>{' '}
            <span>Alphari</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-lg text-zinc-400 max-w-xl"
          >
            Full-Stack Web Developer experienced in building scalable web applications using TypeScript, Golang, NestJS, and Remix.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="gap-2">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
