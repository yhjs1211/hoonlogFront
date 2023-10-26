<template>
  <div class="flex flex-col main">
    <div
      class="welcome animate__animated animate__bounce animate__slower animate__infinite animate__delay-2s"
    >
      <h1 class="text-3xl">Welcome to Hoonlog</h1>
      <p>여행을 사랑하는 개발자, 정 영훈</p>
    </div>
    <div
      class="flex flex-row w-full h-full image-container place-content-center"
    >
      <div v-for="(img, idx) in images" :key="idx" class="absolute image">
        <img :src="img" alt="hoonImg" :class="{ active: idx === currentIdx }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = ref([
  "/img/img_1.jpg",
  "/img/img_2.jpg",
  "/img/img_3.jpg",
  "/img/img_4.jpg",
  "/img/img_5.jpg",
  "/img/img_6.jpg",
]);

const currentIdx = ref(0);

const nextImg = () => {
  currentIdx.value = (currentIdx.value + 1) % images.value.length;
};

setInterval(nextImg, 2500);
</script>

<style scoped>
.welcome {
  margin: 40px 0 30px 0;
}

.image {
  width: 700px;
}

.image img {
  width: 100%;
  transition: opacity 1s;
  opacity: 0;
  border-radius: 20px;
}

.image img.active {
  opacity: 1;
}
</style>
