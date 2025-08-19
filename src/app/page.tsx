import Header from './components/common/Header';
import HeroSection from './components/sections/HeroSection';
import TechnologyStackSection from './components/sections/TechnologyStackSection';

import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import PricingSection from './components/sections/PricingSection';
import ProcessSection from './components/sections/ProcessSection';
import ContactSection from './components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechnologyStackSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PricingSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </>
  );
}
