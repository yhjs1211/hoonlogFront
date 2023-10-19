<template>
  <div
    class="welcome animate__animated animate__bounce animate__slower animate__infinite animate__delay-2s"
  >
    <h1 class="text-3xl">Welcome to Hoonlog</h1>
    <p>여행을 사랑하는 개발자, 정 영훈</p>
  </div>
  <div
    class="relative flex flex-row w-full h-full image-container place-content-center"
  >
    <div v-for="(img, idx) in images" :key="idx" class="absolute image">
      <img :src="img" alt="hoonImg" :class="{ active: idx === currentIdx }" />
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

.arrow-prev,
.arrow-next {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin-right: 5px;
}

.arrow-prev::after {
  position: absolute;
  left: 40px;
  top: 40px;
  content: "";
  width: 20px; /* 사이즈 */
  height: 20px; /* 사이즈 */
  border-top: 5px solid #000; /* 선 두께 */
  border-right: 5px solid #000; /* 선 두께 */
  transform: rotate(225deg); /* 각도 */
}

.arrow-next::after {
  position: absolute;
  left: 40px;
  top: 40px;
  content: "";
  width: 20px; /* 사이즈 */
  height: 20px; /* 사이즈 */
  border-top: 5px solid #000; /* 선 두께 */
  border-right: 5px solid #000; /* 선 두께 */
  transform: rotate(45deg); /* 각도 */
}
</style>
