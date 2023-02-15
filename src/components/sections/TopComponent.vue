<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="1">
    <template #body>
      <div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
        <div class="row">
          <div class="col-md-4">
            <img
              src="@/assets/img/profile-photo.jpg"
              class="jumbotron-img animation-translate animation-item-1"
              alt="Avatar"
            />
          </div>
          <div class="col-md-8">
            <h1
              class="display-1 display-animated display-animated-in animation-translate animation-item-2"
            >
              Jonas<br />Petrik
            </h1>
            <p class="lead animation-translate animation-item-3">
              FREELANCE SENIOR FULLSTACK DEVELOPER
            </p>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
