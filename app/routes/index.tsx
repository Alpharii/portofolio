import type { MetaArgs } from 'react-router';
import HeroSection from '~/components/HeroSection';
import Navbar from '~/components/Navbar';

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
      <h1>Index</h1>
    </div>
  );
}
