<script lang="ts" setup>
import { NEllipsis } from "naive-ui";
import { computed } from "vue";
import TButton from "../Button/TButton.vue";
import dj from "dayjs";

interface CardProductProp {
  name?: string;
  id?: number | string;
  thumbnail?: string;
  soldCount?: number;
  successCount?: number;
  marketplace?: string;
  prices?: number[];
  supplierInfo?: {
    name: string;
    location: string;
    url: string;
  };
  created?: number;
  updated?: number;
}

const props = defineProps<CardProductProp>();
const prices = computed(() => {
  let prc: string[] = [];

  if (props.prices?.[0])
    prc.push(
      props.prices[0].toLocaleString("id-ID", {
        currency: "IDR",
        style: "currency",
        maximumFractionDigits: 0,
      })
    );
  if (props.prices?.[1])
    prc.push(
      props.prices[1].toLocaleString("id-ID", {
        currency: "IDR",
        style: "currency",
        maximumFractionDigits: 0,
      })
    );

  return prc.join(" - ");
});

const postDate = computed(() => {
  return dj(props.created).format("DD MMM YYYY");
});

const updateDate = computed(() => {
  return dj(props.updated).format("DD MMM YYYY - HH:mm");
});
</script>

<template>
  <div class="t-card-product" draggable="true">
    <div class="t-card-product-shopinfos has-text-weight-semibold">
      <i class="bi bi-shop t-font-size-11"></i>
      <span :title="props.supplierInfo?.name" class="t-font-size-12">{{
        props.supplierInfo?.name
      }}</span>
    </div>
    <div class="t-card-product-shoplocs has-text-weight-semibold">
      <span class="loc t-font-size-11">{{ props.supplierInfo?.location }}</span>
    </div>
    <div class="t-card-product-thumb">
      <img :src="props.thumbnail" :alt="props.name" :title="props.name" />
      <span
        :class="[
          't-font-size-11 has-text-weight-semibold t-card-product-marketplace',
          `t-card-product-marketplace-${props.marketplace}`,
        ]"
        >{{ props.marketplace }}</span
      >
    </div>
    <n-ellipsis line-clamp="2">
      <span class="has-text-weight-semibold t-font-secondary">{{ props.name }}</span>
    </n-ellipsis>
    <div class="t-card-product-prices">
      <span class="t-font-size-13 has-text-weight-semibold">{{ prices }}</span>
    </div>
    <div class="t-card-product-meta">
      <div class="solds t-color-4">
        <i class="bi bi-bag-check-fill t-font-size-12"></i>
        <span title="Penjualan" class="t-font-size-12">{{ props.soldCount }}</span>
      </div>
      <div class="success-transaction t-color-4">
        <i class="bi bi-cart-check-fill t-font-size-12"></i>
        <span title="Transaksi Sukses" class="t-font-size-12">{{
          props.successCount
        }}</span>
      </div>
    </div>
    <t-button type="primary">
      <template #icon><i class="t-font-size-11 bi bi-arrow-clockwise"></i></template>
      Perbarui Data
    </t-button>
    <div class="is-flex mt-2 is-justify-content-space-between">
      <div title="Tanggal Crawl" class="is-flex is-align-items-center t-gap-x-1">
        <i class="t-font-size-10 t-color-5 bi bi-calendar-check"></i>
        <span class="t-font-size-11 t-color-5">{{ postDate }}</span>
      </div>
      <div title="Tanggal Update" class="is-flex is-align-items-center t-gap-x-1">
        <i class="t-font-size-10 t-color-5 bi bi-clock-fill"></i>
        <span class="t-font-size-11 t-color-5">{{ updateDate }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.t-card-product {
  display: flex;
  flex-direction: column;
  padding: var(--size-2);
  border-radius: 3px;
  cursor: pointer;
  transition: 200ms ease;
  box-shadow: 0 0 16px 0px rgba(230, 230, 230, 0.6);
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 16px 13px rgba(230, 230, 230, 0.6);
    & .t-card-product-shopinfos,
    & .t-card-product-shoplocs {
      transform: translateX(0%);
      opacity: 1;
      transition: 200ms ease-in-out;
    }
    & .t-card-product-shoplocs {
      transition-delay: 50ms;
    }
  }

  &-marketplace {
    position: absolute;
    bottom: 0;
    right: 0;
    padding-inline: var(--size-2);
    text-transform: capitalize;
    border-radius: var(--size-1);
    margin: 0 3px 3px 0;
    &-shopee {
      background-color: rgb(255, 124, 47);
      color: white;
    }
    &-tokopedia {
      background-color: white;
      color: rgb(27, 219, 43);
    }
  }

  &-shopinfos {
    box-shadow: 0 0 4px 1px rgba(5, 5, 5, 0.3);
    padding-inline: var(--size-2);
    transition: 350ms ease-in-out;
    position: absolute;
    z-index: 2;
    background-color: white;
    border-radius: var(--size-1);
    margin-top: var(--size-1);
    margin-left: var(--size-1);
    transform: translateX(-120%);
    opacity: 0;
    display: flex;
    align-items: center;
    column-gap: var(--size-1);
    flex-wrap: wrap;

    & > span {
      overflow: hidden;
      max-width: 20ch;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &-shoplocs {
    box-shadow: 0 0 7px 1px rgba(255, 255, 255, 0.2);
    border-radius: var(--size-1);
    position: absolute;
    z-index: 2;
    padding-inline: var(--size-2);
    background: rgb(20, 20, 20);
    color: white;
    margin-top: var(--size-1);
    margin-left: var(--size-1);
    top: 29px;
    transform: translateX(-120%);
    opacity: 0;
    transition: 350ms ease-in-out;
    transition-delay: 75ms;
  }

  &-prices {
    color: rgb(218, 14, 48);
  }

  &-meta {
    margin-bottom: 4px;
    margin-top: var(--size-1);
    display: flex;
    justify-content: space-between;
    & .solds,
    & .success-transaction {
      display: flex;
      align-items: center;
      column-gap: var(--size-1);
    }
    & .solds > i {
      color: rgb(70, 96, 247);
    }
    & .success-transaction > i {
      color: rgb(27, 245, 45);
    }
  }

  &-thumb {
    width: 100%;
    padding-top: 100%;
    position: relative;
    & > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border-radius: var(--size-1);
    }
    margin-bottom: 2px;
  }
}
</style>
