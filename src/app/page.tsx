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
import profileData from "@/data/profile.json";
import { siteUrl } from "@/lib/site";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl()}#person`,
    name: profileData.name,
    url: siteUrl(),
    image: siteUrl("prashant-chauhan.jpg"),
    jobTitle: "Senior Cloud Platform Architect",
    description: profileData.summary,
    worksFor: {
      "@type": "Organization",
      name: "IBM Cloud",
    },
    sameAs: [profileData.contact.linkedin, profileData.contact.github],
    knowsAbout: profileData.positioning.core_strengths,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
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
