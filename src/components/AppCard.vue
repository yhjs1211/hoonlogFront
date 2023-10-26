<template>
  <div>
    <div v-for="card in props.cards" :key="card">
      {{ card }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
console.log(props.cards);
</script>

<style scoped></style>
