<script lang="ts" setup>
import { ref } from "vue";

import { NImage, NButton } from "naive-ui";
import THeader from "../components/Header/THeader.vue";
import TInput from "../components/Input/TInput.vue";

import shopee from "../assets/shopee.png";
import tokopedia from "../assets/tokopedia.png";

import axios from "axios";

const urls = ref<string>("");

const runCrawler = async () => {
  const filteredUrls = urls.value
    .split("\n")
    .filter(Boolean)
    .map((url) => url.trim());
  await axios.post("http://localhost:8000/apis/crawl-to-collections", {
    urls: filteredUrls,
  });
};
</script>

<template>
  <div class="t-box">
    <t-header>
      <template #icon><i class="bi bi-joystick"></i></template>
      Crawler Produk
    </t-header>
    <div class="px-2 is-flex is-align-item-center t-gap-x-1">
      <span class="t-color-3">Marketplace yang didukung :</span>
      <n-image preview-disabled :object-fit="'contain'" :width="14" :src="shopee" />
      <n-image preview-disabled :object-fit="'contain'" :width="14" :src="tokopedia" />
    </div>
    <t-input
      type="textarea"
      :rows="25"
      placeholder="Masukan URL pisahkan dengan baris baru"
      v-model:value="urls"
    />
    <n-button @click="runCrawler" type="primary" size="tiny">
      <template #icon>
        <i style="font-size: 13px" class="bi bi-play-fill"></i>
      </template>
      <span class="has-text-weight-medium">Jalankan Crawler</span>
    </n-button>
  </div>
</template>
