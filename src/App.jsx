import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Stack from './components/Stack';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Stack />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
