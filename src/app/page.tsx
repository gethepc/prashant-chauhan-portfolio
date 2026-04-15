import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { WhatIBuild } from "@/components/WhatIBuild";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { AutomationPipeline } from "@/components/AutomationPipeline";
import { CloudExpertise } from "@/components/CloudExpertise";
import { Achievements } from "@/components/Achievements";
import { GlobalDelivery } from "@/components/GlobalDelivery";
import { Timeline } from "@/components/Timeline";
import { Leadership } from "@/components/Leadership";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { ThoughtLeadership } from "@/components/ThoughtLeadership";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhatIBuild />
        <About />
        <Projects />
        <AutomationPipeline />
        <CloudExpertise />
        <Achievements />
        <GlobalDelivery />
        <Timeline />
        <Leadership />
        <Skills />
        <Certifications />
        <ThoughtLeadership />
        <Contact />
      </main>
    </>
  );
}
