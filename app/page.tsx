import { ApproachSection } from '@/components/approach-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
