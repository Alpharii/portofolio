import type { MetaArgs } from 'react-router';
import About from '~/components/About';
import Education from '~/components/Education';
import Experiences from '~/components/Experiences';
import HeroSection from '~/components/HeroSection';
import Navbar from '~/components/Navbar';
import Projects from '~/components/Projects';

export function meta({}: MetaArgs) {
  return [
    { title: 'Test' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Experiences />
      <Education />
      <Projects />
    </div>
  );
}
