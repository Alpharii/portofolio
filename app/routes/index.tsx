import type { MetaArgs } from 'react-router';
import About from '~/components/About';
import { Contact } from '~/components/Contact';
import Education from '~/components/Education';
import Experiences from '~/components/Experiences';
import HeroSection from '~/components/HeroSection';
import Navbar from '~/components/Navbar';
import Projects from '~/components/Projects';
import { Skills } from '~/components/Skills';

export function meta({}: MetaArgs) {
  return [
    { title: 'Bintang Alphari' },
    {
      name: 'Muhammad Bintang Alphari',
      content: 'Portofolio Muhammad Bintang Alphari',
    },
  ];
}

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <About />
      <Experiences />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
