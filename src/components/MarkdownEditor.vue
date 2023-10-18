<template>
  <h3>This is MD Editor.</h3>
  <div class="wrapper">
    <MdEditor
      v-model="text"
      :language="state.language"
      :theme="state.theme"
      :code-theme="state.codeTheme"
      @on-upload-img="imageUpload"
    />
    <button class="chk" @click="logging">console</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import axios from "axios";
import { Cloudinary } from "@cloudinary/url-gen";

const text = ref("");
const state = reactive({
  theme: "dark",
  language: "en-US",
  codeTheme: "github",
});

const imageUpload = async (file) => {
  const form = new FormData();
  form.append("file", file);
  form.append("upload_preset", process.env.VUE_APP_CLOUD_PRESET);

  const res = await axios.post(process.env.VUE_APP_CLOUD_URL, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(res.data);
};
</script>
