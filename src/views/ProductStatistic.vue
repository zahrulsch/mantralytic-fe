<script lang="ts" setup>
import THeader from "../components/Header/THeader.vue";
import CardProduct from "../components/Card/CardProduct.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { ProductsResponse, ProductResponse } from "../typings/ProductsResponse";

const products = ref<ProductResponse[]>([]);
const productRequester = async () => {
  return (await (await axios.get("http://localhost:8000/apis/products"))
    .data) as ProductsResponse;
};

onMounted(() => {
  productRequester().then((data) => {
    products.value = data.data;
  });
});
</script>

<template>
  <div class="t-box-plain">
    <t-header>
      <template #icon><i class="bi bi-box-fill"></i></template>
      Produk
    </t-header>
    <div class="t-product-list">
      <card-product
        v-for="x in products"
        :key="x.pid"
        :name="x.name"
        :thumbnail="x.thumbnail"
        :id="x.pid"
        :marketplace="x.marketplace_type"
        :sold-count="x.sold_count"
        :success-count="x.success_count"
        :prices="x.prices"
        :supplier-info="x.supplierinfo"
        :created="x.created"
        :updated="x.updated"
      />
    </div>
  </div>
</template>

<style lang="scss">
.t-product-list {
  display: grid;
  gap: var(--size-3);
  grid-template-columns: repeat(6, 1fr);

  @include res("large") {
    grid-template-columns: repeat(5, 1fr);
  }
  @include res("xxlarge") {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
