<template>
  <AppHeader />
  <div class="relative content">
    <RouterView />
  </div>
  <AppFooter />
</template>

<script setup>
import { RouterView } from "vue-router";
import "animate.css";
import "@/assets/main/main.css";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<style scoped></style>
