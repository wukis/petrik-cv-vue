<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="3">
    <template #body>
      <div class="row">
        <div class="col col-xl-10">
          <h2
            class="section-title animation-translate-overline animation-item-1"
          >
            My services
          </h2>
          <div class="row animation-translate animation-item-2">
            <div class="col-12 col-md-4">
              <div class="card card">
                <div class="card-body">
                  <strong class="card-counter">1</strong>
                  <h3 class="card-title">Full Stack<br />Web development</h3>
                  <p class="card-text">
                    Harnessing the synergy of PHP and JavaScript, I provide
                    comprehensive full stack web development solutions that
                    cater to modern online demands. With PHP powering the
                    server-side processes and JavaScript enriching the
                    client-side interactivity, my approach ensures responsive,
                    efficient, and dynamic web applications. From intricate
                    back-end functionalities to seamless front-end experiences,
                    I encapsulate every layer of web development to deliver a
                    holistic digital product that resonates with user
                    expectations and business goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card card">
                <div class="card-body">
                  <strong class="card-counter">2</strong>
                  <h3 class="card-title">Consulting</h3>
                  <p class="card-text">
                    In the ever-evolving landscape of technology, navigating the
                    intricacies of development can be daunting. I offer
                    strategic consulting services tailored to streamline your
                    development processes. Leveraging a deep understanding of
                    best practices, methodologies, and emerging trends, I guide
                    teams and businesses in optimizing their workflows, ensuring
                    projects are executed efficiently and effectively. Whether
                    it's selecting the right technology stack, refining agile
                    practices, or enhancing team collaboration, my insights aim
                    to position your projects for success from inception to
                    deployment.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="card card">
                <div class="card-body">
                  <strong class="card-counter">3</strong>
                  <h3 class="card-title">Auditing</h3>
                  <p class="card-text">
                    In a digital age marked by rapidly changing technologies and
                    standards, ensuring your platforms and processes remain at
                    their peak is paramount. My auditing services dive deep into
                    the intricacies of your systems, identifying potential
                    bottlenecks, security vulnerabilities, and areas for
                    improvement. With a meticulous approach, I evaluate the
                    efficiency and effectiveness of your digital assets,
                    ensuring compliance with industry standards and best
                    practices. From code quality assessments to performance
                    evaluations, my goal is to provide actionable insights that
                    bolster your operations, ensuring your digital endeavors are
                    both robust and future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
