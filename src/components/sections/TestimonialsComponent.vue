<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="9">
    <template #body>
      <div class="row">
        <div class="col col-xl-10">
          <h2
            class="section-title animation-translate-overline animation-item-1"
          >
            Testimonials
          </h2>

          <div
            id="carousel"
            class="carousel slide animation-translate animation-item-2"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="testimonial">
                  <img
                    src="https://via.placeholder.com/96"
                    class="testimonial-img"
                    alt="James Smith"
                  />
                  <div class="testimonial-body">
                    <h3 class="testimonial-title">James Smith</h3>
                    <h4 class="testimonial-subtitle">
                      WEBSITE OWNER — <a href="#">www.website.com</a>
                    </h4>
                    <p class="testimonial-text">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="testimonial">
                  <img
                    src="https://via.placeholder.com/96"
                    class="testimonial-img"
                    alt="Alice Jones"
                  />
                  <div class="testimonial-body">
                    <h3 class="testimonial-title">Alice Jones</h3>
                    <h4 class="testimonial-subtitle">
                      E-SHOP OWNER — <a href="#">www.eshop.com</a>
                    </h4>
                    <p class="testimonial-text">
                      At vero eos et accusam et justo duo dolores et ea rebum.
                      Stet clita kasd gubergren, no sea takimata sanctus est
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
            </ol>
            <a
              class="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
