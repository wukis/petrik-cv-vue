<script setup>
import SectionComponent from "./SectionComponent.vue";
</script>

<template>
  <SectionComponent :section-number="6">
    <template #body>
      <div class="row">
        <div class="col col-xl-10">
          <h2
            class="section-title animation-translate-overline animation-item-1"
          >
            Experiences
          </h2>
          <div class="timeline timeline-animated">
            <div class="timeline-item">
              <h3 class="timeline-title">anwalt.de</h3>
              <p class="timeline-text">Senior Software Engineer Team Lead</p>
              <span class="timeline-date">
                Dec 2022&nbsp;–&nbsp;now&nbsp;&#183;&nbsp;
              </span>
              <p class="timeline-text">Senior Software Developer</p>
              <span class="timeline-date">
                Dec 2020&nbsp;–&nbsp;Dec 2022&nbsp;&#183;&nbsp;2 yrs 1 mo
              </span>
            </div>
            <div class="timeline-item">
              <h3 class="timeline-title">Solutionlab Production</h3>
              <p class="timeline-text">Senior Software Engineer Team Lead</p>
              <span class="timeline-date">
                Jan 2018&nbsp;–&nbsp;Dec 2020&nbsp;&#183;&nbsp;3 yrs
              </span>
              <p class="timeline-text">Senior Web Developer</p>
              <span class="timeline-date">
                Nov 2017&nbsp;–&nbsp;Jan 2018&nbsp;&#183;&nbsp;3 mos
              </span>
            </div>
            <div class="timeline-item">
              <h3 class="timeline-title">Olympic Casino Group Baltija</h3>
              <p class="timeline-text">Full Stack Engineer</p>
              <span class="timeline-date">
                Jan 2017&nbsp;–&nbsp;Nov 2017&nbsp;&#183;&nbsp;11 mos
              </span>
            </div>
            <div class="timeline-item">
              <h3 class="timeline-title">Inlusion Netforms</h3>
              <p class="timeline-text">Senior Software Engineer Team Lead</p>
              <span class="timeline-date">
                Feb 2016&nbsp;–&nbsp;Jan 2017&nbsp;&#183;&nbsp;1 yr
              </span>
              <p class="timeline-text">Senior Software Engineer</p>
              <span class="timeline-date">
                Nov 2015&nbsp;–&nbsp;Feb 2016&nbsp;&#183;&nbsp;4 mos
              </span>
            </div>
            <div class="timeline-item">
              <h3 class="timeline-title">Integrus</h3>
              <p class="timeline-text">Full Stack Engineer</p>
              <span class="timeline-date">
                Nov 2014&nbsp;–&nbsp;Nov 2015&nbsp;&#183;&nbsp;1 yr 1 mo
              </span>
            </div>
            <div class="timeline-item">
              <h3 class="timeline-title">ITLogas</h3>
              <p class="timeline-text">Ruby on Rails Developer</p>
              <span class="timeline-date">
                Feb 2014&nbsp;–&nbsp;Oct 2015&#183;&nbsp;9 mos
              </span>
            </div>
            <div class="timeline-item">
              <h3 class="timeline-title">Profectus Novus</h3>
              <p class="timeline-text">PHP Web Developer</p>
              <span class="timeline-date">
                Apr 2013&nbsp;–&nbsp;Feb 2014&nbsp;&#183;&nbsp;11 mos
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionComponent>
</template>
