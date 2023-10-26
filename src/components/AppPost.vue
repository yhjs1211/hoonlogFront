<template>
  <div class="flex flex-col items-center w-full cards-container">
    <p class="title-posts text-7xl">Posts</p>
    <div class="flex flex-row flex-wrap justify-center w-1/4 tag-container">
      <div
        class="px-2 mx-2 text-white bg-black rounded-md hover:cursor-pointer hover:bg-rose-950"
        @click="changeSelect()"
      >
        All
      </div>
      <div
        v-for="tag in tags"
        :key="tag.id"
        class="px-2 mx-2 my-1 text-white bg-black rounded-md hover:cursor-pointer hover:bg-rose-950"
        @click="changeSelect(tag.id)"
      >
        {{ tag.data }}
      </div>
    </div>
    <Card :cards="cards" />
  </div>
</template>

<script setup>
import { inject, defineComponent, ref, watch, watchEffect } from "vue";
import AppCard from "./AppCard.vue";

const Card = defineComponent(AppCard);
const axios = inject("$axios");
const tagId = ref(undefined);
const cards = ref(await getAllPosts());
const tags = ref(await getAllTags());

watchEffect(async () => {
  if (tagId.value) {
    cards.value = await getPostsByTagId(tagId.value);
  } else {
    cards.value = await getAllPosts();
  }
});

async function getPostsByTagId(id) {
  const posts = (
    await axios.get(`http://localhost:8000/posts/tags/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data.posts;

  return posts;
}

async function getAllPosts() {
  return (
    await axios.get(`${process.env.VUE_APP_BACK_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data;
}

async function getAllTags() {
  return (
    await axios.get(`${process.env.VUE_APP_BACK_URL}/posts/tags`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data;
}

function changeSelect(id) {
  tagId.value = id;
}
</script>

<style scoped>
.title-posts {
  padding: 20px 0 20px 0;
}
</style>
