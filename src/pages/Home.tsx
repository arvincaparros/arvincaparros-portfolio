import { Navbar } from '../components/Navbar/Navbar';
import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { FeaturedWork } from '../components/FeaturedWork/FeaturedWork';
import { Skills } from '../components/Skills/Skills';
import { ExperienceSection } from '../components/Experience/ExperienceSection';
import { Contact } from '../components/Contact/Contact';

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Skills />
        <ExperienceSection />
        <Contact />
      </main>
    </>
  );
}
