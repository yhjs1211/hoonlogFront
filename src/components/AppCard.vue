<template>
  <div class="relative flex flex-col w-4/5 h-full my-3">
    <div
      v-for="card in props.cards"
      :key="card"
      class="flex flex-row my-2 border-4 border-double h-44 hover:cursor-pointer"
    >
      <div class="flex flex-col justify-center w-1/3 h-44 card-title">
        <p class="text-4xl">{{ card.title }}</p>
      </div>
      <div class="relative flex flex-col justify-center w-2/3 h-44 card-body">
        <p>{{ card.content }}</p>
        <p class="absolute text-lg bottom-2 right-1/4">
          Created :{{ card.createdAt.split("T")[0] }}
        </p>
        <p class="absolute text-lg bottom-2 right-2">
          Updated :{{ card.updatedAt.split("T")[0] }}
        </p>
      </div>
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
