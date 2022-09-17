<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <NavigationComponent></NavigationComponent>
    <MainContentComponent></MainContentComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue"; // @ is an alias to /src
import NavigationComponent from "@/components/NavigationComponent.vue";
import MainContentComponent from "@/components/MainContentComponent.vue";
import "@/assets/js/scrollInteraction";
import "@/assets/js/nav";
import "@/assets/js/carousel";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
    NavigationComponent,
    MainContentComponent,
  },
});
</script>
