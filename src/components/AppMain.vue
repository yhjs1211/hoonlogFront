<template>
  <div class="welcome">
    <h1 class="text-3xl">Welcome to Hoonlog</h1>
    <p>여행을 사랑하는 개발자, 정 영훈</p>
  </div>
  <div
    class="relative grid w-full grid-flow-col grid-cols-6 image-container place-content-center"
  >
    <button @click="prevImg" class="col-span-1 prevBtn">
      <span class="arrow-prev"></span>
    </button>
    <div v-for="(img, idx) in images" :key="idx" class="image">
      <img
        :src="img"
        alt="hoonImg"
        className="absolute col-span-4"
        :class="{ active: idx === currentIdx }"
      />
    </div>
    <button @click="nextImg" class="col-span-1 nextBtn">
      <span class="arrow-next"></span>
    </button>
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

const prevImg = () => {
  currentIdx.value =
    currentIdx.value - 1 < 0 ? images.value.length - 1 : currentIdx.value - 1;
  console.log(currentIdx.value);
};

const nextImg = () => {
  currentIdx.value = (currentIdx.value + 1) % images.value.length;
  console.log(currentIdx.value);
};
</script>

<style scoped>
.welcome {
  margin: 30px 0 30px 0;
}

.image {
  width: 700px;
}

.image img {
  width: 100%;
  transition: opacity 0.5s;
  opacity: 0;
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
