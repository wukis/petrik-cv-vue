<script setup>
import { defineProps } from "vue";

const props = defineProps({
  sectionNumber: {
    type: Number,
    required: true,
  },
});

function formatSectionNumber(sectionNumber) {
  return sectionNumber < 10 ? `0${sectionNumber}` : sectionNumber;
}

const nextSectionNumber = props.sectionNumber + 1;

const sectionId = `section-${formatSectionNumber(props.sectionNumber)}`;
const nextSectionId = `section-${formatSectionNumber(nextSectionNumber)}`;
</script>
<template>
  <section :id="sectionId" class="section animation">
    <div class="section-body">
      <slot name="body"></slot>
    </div>
    <div class="section-footer animation-translate animation-item-3">
      <a class="section-next goto-section" :href="'#' + nextSectionId">
        <span class="section-next-counter"
          >{{ formatSectionNumber(props.sectionNumber) }}/10</span
        >
        <span class="section-next-label">Next chapter</span>
        <span class="section-next-icon"></span>
      </a>
    </div>
  </section>
</template>
