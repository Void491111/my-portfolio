import { Hero } from "@/components/hero";
import { Section } from "@/components/ui/section";
import { ProjectGrid } from "@/components/project-grid";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6">
      <Hero />
      <Section title="Selected Work">
        <ProjectGrid />
      </Section>
    </main>
  );
}