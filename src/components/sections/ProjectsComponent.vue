<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="8">
    <template #body>
      <div class="row">
        <div class="col col-xl-10">
          <h2
            class="section-title animation-translate-overline animation-item-1"
          >
            Projects
          </h2>
          <div class="row animation-translate animation-item-2">
            <div class="col-12 col-md-4">
              <a class="card" href="#modal-project-1" data-toggle="modal">
                <img
                  class="card-img-top"
                  src="https://via.placeholder.com/360x240"
                  alt="Project 1"
                />
                <div class="card-body">
                  <h3 class="card-title">Project 1</h3>
                  <h4 class="card-subtitle">Design e-shop</h4>
                  <p class="card-tags">Frontend — Backend</p>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-4">
              <a class="card" href="#modal-project-2" data-toggle="modal">
                <img
                  class="card-img-top"
                  src="https://via.placeholder.com/360x240"
                  alt="Project 2"
                />
                <div class="card-body">
                  <h3 class="card-title">Project 2</h3>
                  <h4 class="card-subtitle">Social Network for Musicians</h4>
                  <p class="card-tags">Design — Frontend — Backend</p>
                </div>
              </a>
            </div>
            <div class="col-12 col-md-4">
              <a class="card" href="#modal-project-3" data-toggle="modal">
                <img
                  class="card-img-top"
                  src="https://via.placeholder.com/360x240"
                  alt="Project 3"
                />
                <div class="card-body">
                  <h3 class="card-title">Project 3</h3>
                  <h4 class="card-subtitle">Jewelry e-shop</h4>
                  <p class="card-tags">Frontend — Backend</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
