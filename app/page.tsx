import GlassHero from "@/components/glass-hero";
import AboutSection from "@/components/about-section";
import WorkSection from "@/components/work-section";
import ProcessSection from "@/components/process-section";
import ExperimentsSection from "@/components/experiments-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-blue-200/50 selection:text-ink">
      <GlassHero />
      <AboutSection />
      <WorkSection />
      <ProcessSection />
      <ExperimentsSection />
      <Footer />
    </main>
  );
}
