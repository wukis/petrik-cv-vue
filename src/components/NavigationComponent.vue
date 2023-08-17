<template>
  <nav class="sections-nav-container">
    <ul id="sections-nav" class="nav sections-nav sections-nav-animated">
      <li
        class="sections-nav-item"
        v-for="section in sections"
        :key="section.id"
      >
        <a
          :href="section.href"
          class="nav-link sections-nav-link goto-section"
          :class="{ active: activeSection === section.id }"
          @click="setActiveSection(section.id)"
        >
          <span class="sections-nav-counter">{{ section.counter }}</span>
          {{ section.name }}
        </a>
      </li>
      <li class="sections-nav-item">
        <div class="sections-nav-info">
          <a href="mailto:jonas@petrik.dev">jonas@petrik.dev</a><br />
          <a href="tel:+491785119617">+49 178 511 9617</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeSection: "section-01",
      sections: [
        { id: "section-01", counter: "01", name: "Top", href: "#section-01" },
        {
          id: "section-02",
          counter: "02",
          name: "About me",
          href: "#section-02",
        },
        {
          id: "section-03",
          counter: "03",
          name: "My Services",
          href: "#section-03",
        },
        {
          id: "section-04",
          counter: "04",
          name: "Skills",
          href: "#section-04",
        },
        { id: "section-05", counter: "05", name: "Facts", href: "#section-05" },
        {
          id: "section-06",
          counter: "06",
          name: "Experiences",
          href: "#section-06",
        },
        {
          id: "section-07",
          counter: "07",
          name: "References",
          href: "#section-07",
        },
        {
          id: "section-08",
          counter: "08",
          name: "Projects",
          href: "#section-08",
        },
        {
          id: "section-09",
          counter: "09",
          name: "Testimonials",
          href: "#section-09",
        },
        {
          id: "section-10",
          counter: "10",
          name: "Contact",
          href: "#section-10",
        },
      ],
    };
  },
  methods: {
    setActiveSection(id) {
      this.activeSection = id;
    },
  },
};
</script>
