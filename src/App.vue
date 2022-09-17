<template>
  <vue-particles
    color="#dedede"
    :particleOpacity="0.7"
    :particlesNumber="40"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="1"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="push"
  >
  </vue-particles>
  <router-view />
</template>

<style lang="scss">
@import "./assets/css/main.scss";

canvas {
  width: 100%;
  height: 100%;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;
}
</style>
