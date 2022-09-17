<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <NavigationComponent></NavigationComponent>
    <MainContentComponent></MainContentComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue"; // @ is an alias to /src
import NavigationComponent from "@/components/HeaderComponent.vue";
import MainContentComponent from "@/components/MainContentComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
    NavigationComponent,
    MainContentComponent,
  },
});
</script>
