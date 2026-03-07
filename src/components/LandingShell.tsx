"use client";

import { HeroSection } from '@/components/HeroSection';
import { PositioningSection } from '@/components/sections/PositioningSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { NavMenu } from '@/components/navigation/NavMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import {
  architectureNodes,
  caseStudies,
  contactLinks,
  education,
  experience,
  heroContent,
  navSections,
  positioningContent,
  skillGroups,
} from '@/data/portfolio';

export function LandingShell() {
  const activeId = useActiveSection(navSections.map((section) => section.id));

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <NavMenu sections={navSections} activeId={activeId} />
        <main id="main" tabIndex={-1} className="flex-1 space-y-0">
          <HeroSection
            eyebrow={heroContent.eyebrow}
            title={heroContent.title}
            description={heroContent.description}
            primaryAction={heroContent.primaryAction}
            secondaryAction={heroContent.secondaryAction}
            metrics={[...heroContent.metrics]}
          />
          <PositioningSection
            eyebrow={positioningContent.eyebrow}
            title={positioningContent.title}
            intro={positioningContent.intro}
            blocks={[...positioningContent.blocks]}
          />
          <ArchitectureSection
            eyebrow="Architecture"
            title="Logique systeme"
            description="Schema de construction type pour connecter donnees, APIs, backend, stockage et interface utilisateur."
            nodes={[...architectureNodes]}
          />
          <ProjectsSection
            eyebrow="Projets"
            title="Case studies techniques"
            description="Chaque projet est presente avec contexte, architecture, stack et point cle demontre."
            projects={caseStudies}
          />
          <SkillsSection eyebrow="Competences" title="Stack technique" groups={[...skillGroups]} />
          <ExperienceSection eyebrow="Experience" title="Parcours" experiences={experience} />
          <EducationSection eyebrow="Formation" title="Parcours de formation" items={education} />
          <ContactSection
            eyebrow="Contact"
            title="Parlons de votre besoin"
            description="Ouvert aux opportunites en developpement fullstack, data engineering et projets IA appliques."
            links={contactLinks}
          />
        </main>
      </div>
    </div>
  );
}
