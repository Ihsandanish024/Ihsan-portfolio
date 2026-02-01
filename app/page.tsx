import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="space-y-32 ">
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <WhyChooseMe />
      <Contact />
    </div>
  );
}
