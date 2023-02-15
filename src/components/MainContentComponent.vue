<template>
  <main class="content">
    <div class="container-fluid-limited">
      <div class="row">
        <div class="col col-xl-9">
          <TopSection />
          <AboutSection />
          <ServicesSection />
          <SkillsSection />
          <FactsSection />
          <ExperienceSection />
          <ReferencesSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopSection from "@/components/sections/TopComponent.vue"; // @ is an alias to /src
import AboutSection from "@/components/sections/AboutComponent.vue";
import ServicesSection from "@/components/sections/ServicesComponent.vue";
import SkillsSection from "@/components/sections/SkillsComponent.vue";
import FactsSection from "@/components/sections/FactsComponent.vue";
import ExperienceSection from "@/components/sections/ExperienceComponent.vue";
import ReferencesSection from "@/components/sections/ReferencesComponent.vue";
import ProjectsSection from "@/components/sections/ProjectsComponent.vue";
import TestimonialsSection from "@/components/sections/TestimonialsComponent.vue";
import ContactSection from "@/components/sections/ContactComponent.vue";
export default defineComponent({
  name: "MainContentComponent",
  components: {
    TopSection,
    AboutSection,
    ServicesSection,
    SkillsSection,
    FactsSection,
    ExperienceSection,
    ReferencesSection,
    ProjectsSection,
    TestimonialsSection,
    ContactSection,
  },
});
</script>
