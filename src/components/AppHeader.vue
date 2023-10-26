<template>
  <nav class="bg-stone-950 header">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-center h-16">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="/"
          class="absolute bg-gray-900 rounded-md left-8"
          aria-current="page"
        >
          <div class="flex">
            <img
              class="w-12 h-12"
              src="../assets/hoonLog.png"
              alt="hoonLogLogo"
            />
            <img class="h-12" src="../assets/blog-name.png" alt="hoonLogName" />
          </div>
        </a>
        <RouterLink
          to="/posts"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          Posts
        </RouterLink>
        <RouterLink
          to="/resume"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          Resume
        </RouterLink>
        <RouterLink
          to="/portfolio"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
        >
          Portfolio
        </RouterLink>
        <!-- Admin -->
        <RouterLink
          to="/editor"
          class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          v-if="admin"
        >
          Editor
        </RouterLink>
        <button
          className="text-yellow-50 absolute right-10 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2"
          @click="changeAdmin"
        >
          Admin
        </button>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Team</a
        >
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Projects</a
        >
        <a
          href="#"
          class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const admin = ref(false);

const changeAdmin = () => {
  const pw = prompt("What is Admin Password?");
  let verify = false;
  pw === process.env.VUE_APP_ADMIN_PW ? (verify = true) : null;

  if (pw !== null) {
    if (verify) {
      admin.value = !admin.value;
    } else {
      alert("Only Access by Administrator 😥");
    }
  }
};
</script>

<style scoped>
/* nav.header {
  position: fixed;
} */
</style>
