<template>
  <footer class="fixed py-2 bg-slate-400">
    <div class="flex flex-row items-center footer-content">
      <div
        class="text-3xl font-bold footer-title basis-1/4 animate__animated animate__pulse"
      >
        <h1>Thanks for coming ✨</h1>
      </div>
      <div class="inline-flex justify-end contact basis-3/4">
        <span class="w-48">
          <a href="https://github.com/yhjs1211" class="inline-flex">
            <img src="../assets/github.png" id="githubImg" />
            <p class="hover:underline">Git Hub</p>
          </a>
        </span>
        <span class="inline-flex w-48">
          <img src="../assets/email.png" id="emailImg" />
          <p class="hover:underline">yhjs1211@gmail.com</p>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
footer {
  bottom: 0;
  width: 100%;
}
.footer-title {
  margin: 0 0 0 50px;
  padding: 0;
  text-align: start;
}

#githubImg {
  max-width: 25px;
  margin-right: 10px;
}

#emailImg {
  max-width: 25px;
  margin-right: 10px;
}
</style>
