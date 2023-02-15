<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="7">
    <template #body>
      <div class="row">
        <div class="col col-xl-10">
          <h2
            class="section-title animation-translate-overline animation-item-1"
          >
            References
          </h2>
          <div class="row animation-translate animation-item-2">
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 1"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 2"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 3"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 4"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 5"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 6"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 7"
                />
              </a>
            </div>
            <div class="col-6 col-lg-3">
              <a href="#" class="logo-link">
                <img
                  src="@/assets/img/reference.svg"
                  class="logo-img"
                  alt="Reference 8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
