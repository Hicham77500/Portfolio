"use client";

import { useMemo } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { PositioningSection } from '@/components/sections/PositioningSection';
import { ArchitectureSection } from '@/components/sections/ArchitectureSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ProductionSection } from '@/components/ProductionSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { NavMenu } from '@/components/navigation/NavMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import {
  architectureNodes,
  caseStudies,
  complementarySkills,
  contactLinks,
  education,
  experience,
  heroContent,
  navSections,
  positioningContent,
  productionProjects,
  skillGroups,
} from '@/data/portfolio';

export function LandingShell() {
  const sectionIds = useMemo(() => navSections.map((section) => section.id), []);
  const [activeId, selectSection] = useActiveSection(sectionIds);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <NavMenu sections={navSections} activeId={activeId} onSectionSelect={selectSection} />
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
            eyebrow=""
            title={positioningContent.eyebrow}
            intro={positioningContent.intro}
            blocks={[...positioningContent.blocks]}
          />
          <ArchitectureSection
            eyebrow=""
            title="Architecture"
            description="Schéma de construction type pour connecter données, APIs, backend, stockage et interface utilisateur."
            nodes={[...architectureNodes]}
          />
          <ProjectsSection
            eyebrow=""
            title="Projets"
            description="Projets techniques autour des data pipelines, microservices backend et applications web. Chaque projet détaille le contexte, l'architecture, la stack et la démonstration technique."
            projects={caseStudies}
          />
          <ProductionSection
            eyebrow=""
            title="Projets en production"
            description="Interventions concrètes sur des produits web déployés : performance, SEO, UX/UI et accessibilité."
            projects={productionProjects}
          />
          <SkillsSection
            eyebrow=""
            title="Compétences"
            groups={[...skillGroups]}
            complementary={complementarySkills}
          />
          <ExperienceSection eyebrow="" title="Parcours" experiences={experience} education={education} />
          <ContactSection
            eyebrow=""
            title="Contact"
            description="Ouvert aux opportunités en développement full stack, data engineering et projets IA appliqués."
            links={contactLinks}
          />
        </main>
      </div>
    </div>
  );
}
