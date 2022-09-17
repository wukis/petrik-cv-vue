<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
  },
});
</script>
