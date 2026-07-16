"use client";

import { HeroSection } from '@/components/HeroSection';
import { PositioningSection } from '@/components/PositioningSection';
import { ArchitectureSection } from '@/components/ArchitectureSection';
import { ProductionSection } from '@/components/ProductionSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { NavMenu } from '@/components/navigation/NavMenu';
import { useActiveSection } from '@/hooks/useActiveSection';
import {
  architectureNodes,
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

const sectionIds = navSections.map((section) => section.id);

export function LandingShell() {
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
            description="Chaîne type d’un produit connecté : client, authentification, cloud, données et export vers l’IA."
            nodes={[...architectureNodes]}
          />
          <ProductionSection
            eyebrow=""
            title="Projets réalisés"
            description="Produits publiés — applications en production."
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
            description="Ouvert aux opportunités en développement mobile iOS, fullstack et produits data / IA appliqués."
            links={contactLinks}
          />
        </main>
      </div>
    </div>
  );
}
