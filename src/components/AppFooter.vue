<template>
  <footer class="justify-between py-3 bg-slate-400">
    <div class="container grid grid-flow-col grid-cols-4">
      <h1 class="text-3xl font-bold title">Thanks for coming ✨</h1>
      <div class="github">
        <a href="https://github.com/yhjs1211" class="grid grid-flow-col">
          <img src="../assets/github.png" id="githubImg" />
          <h1 class="hover:underline">Git hub</h1>
        </a>
      </div>
      <div class="grid grid-flow-col email">
        <img src="../assets/email.png" id="emailImg" />
        <h1>yhjs1211@gmail.com</h1>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  footerMsg: String,
});
</script>

<style scoped>
.title {
  margin-left: 20px;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.github {
  grid-column: 3;
  padding-top: 10px;
}

.github h1 {
  text-align: right;
}

.github img {
  max-width: 25px;
  position: absolute;
  right: 39%;
}
.email {
  grid-column: 4;
  padding-top: 10px;
}

.email img {
  max-width: 25px;
  position: absolute;
  right: 29%;
}
</style>
