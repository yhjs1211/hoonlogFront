<template>
  <div class="flex justify-center bg-neutral-500">
    <iframe class="h-screen resume" :src="src"></iframe>
  </div>
</template>

<script setup>
const src = "/pdf/resume.pdf#toolbar=0&zoom=130";
</script>

<style scoped>
.resume {
  width: 100vw;
}
</style>
