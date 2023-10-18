<template>
  <AppHeader :msg="headerMsg" />
  <div class="relative content">
    <RouterView />
  </div>
  <AppFooter :footerMsg="footerMsg" />
</template>

<script setup>
import { RouterView } from "vue-router";
import "@/assets/main/main.css";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

const headerMsg = "Hello Header!";
const footerMsg = "Hello Footer!";
</script>

<style scoped></style>
