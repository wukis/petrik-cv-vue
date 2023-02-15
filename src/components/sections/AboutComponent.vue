<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="2">
    <template #body>
      <div class="row">
        <div class="col col-xl-10">
          <h2
            class="section-title animation-translate-overline animation-item-1"
          >
            About
          </h2>
          <article class="article animation-translate animation-item-2">
            <p>
              Experienced software engineer with a demonstrated history of
              working in the web development industry and a Bachelor's degree
              focused in Software Engineering. Skilled in: PHP (Laravel,
              Symfony), SQL / MongoDB, Javascript (NodeJS, ES6, React, Redux,
              VueJS, Vuex).
            </p>
            <p>
              I believe that anyone can fix a problem or develop a specific
              solution, but my 8+ years of experience as a full stack developer
              has taught me beyond this. Don't just build around clients
              requirements and patch barely working system, but design a
              solution that is scalable, flexible, reliable and maintainable,
              open for interoperability and longstanding.
            </p>
            More than 10 years of experience in software engineering:
            <ul>
              <li>9+ years PHP/Symfony/Laravel/Zend/Laminas</li>
              <li>
                8+ years of Javascript: NodeJS, ES6, ReactJS, Redux, Jest,
                VueJS, Vuex, Express
              </li>
            </ul>

            Being a senior developer, my primary job is to:
            <ul>
              <li>
                Listen to client requirements, create a vision and draw big
                picture
              </li>
              <li>
                Determine best possible plan for execution (backend and
                frontend)
              </li>
              <li>Measure possible risk factors and environment limitations</li>
              <li>Consider future scalability and scope</li>
            </ul>
          </article>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
