import { ProjectCard } from '@/components/project-card';
import { SectionReveal } from '@/components/section-reveal';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  return (
    <section id="work" className="border-b border-line py-24 md:py-36" aria-labelledby="work-title">
      <div className="container-shell">
        <SectionReveal className="mb-14 flex flex-col justify-between gap-7 md:mb-20 md:flex-row md:items-end">
          <div><p className="eyebrow">Selected work / 2021—24</p><h2 id="work-title" className="section-title max-w-2xl">Ideas that hold up<br /><span className="text-muted">in the real world.</span></h2></div>
          <p className="section-copy md:max-w-xs">A few collaborations across health, climate, culture, and the tools that move teams forward.</p>
        </SectionReveal>
        <div className="grid gap-16 md:grid-cols-2 md:gap-x-6 md:gap-y-24">
          {projects.map((project, index) => <ProjectCard key={project.index} project={project} featured={index === 0} />)}
        </div>
      </div>
    </section>
  );
}
