<script lang="ts" setup>
import axios from "axios";
import THeader from "../components/Header/THeader.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ProductPropsResponse } from "../typings/ProductPropsResponse";

const { id } = useRoute().params;
const props = ref<NonNullable<ProductPropsResponse["data"]>>();

const productPropsRequester = async (id: number) => {
  return (await axios.get(`http://localhost:8000/apis/products/props/${id}`))
    .data as ProductPropsResponse;
};

onMounted(() => {
  if (id) {
    productPropsRequester(+id).then((res) => {
      if (res.data) {
        props.value = res.data;
      }
    });
  }
});
</script>

<template>
  <div>
    <t-header>
      <template #icon><i class="bi bi-bar-chart-line-fill"></i></template>
      Statistik Produk {{ props?.name ? " ~ " + props.name : "" }}
    </t-header>
  </div>
</template>
