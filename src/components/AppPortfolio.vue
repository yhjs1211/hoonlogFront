<template>
  <div class="flex justify-center bg-slate-600">
    <iframe class="h-screen portfolio" :src="src"></iframe>
  </div>
</template>

<script setup>
const src = "/pdf/drinkit-portfolio.pdf#toolbar=0&zoom=200";
</script>

<style scoped>
.portfolio {
  width: 100vw;
}
</style>
