<script lang="ts" setup>
import { NEllipsis } from "naive-ui";
interface Log {
  type: "crawler" | "connection" | "";
  url: string;
  marketplaceType: "shopee" | "tokopedia" | "";
  status: "success" | "error";
  title: string;
}
// `t-log-row-status-${status}`,
const props = defineProps<Log>();
</script>

<template>
  <div class="is-flex is-align-items-center t-gap-x-1 t-log-row">
    <span
      :class="[
        'is-capitalized t-font-size-12 t-log-row-status',
        `t-log-row-status-${status}`,
      ]"
      >{{ props.status }}</span
    >
    <span
      :class="[
        `t-log-row-marketplace-${props.marketplaceType}`,
        'is-capitalized t-font-size-12',
      ]"
      v-if="props.marketplaceType"
      >{{ props.marketplaceType }}</span
    >
    <n-ellipsis :tooltip="false">
      <span class="t-font-code t-font-size-12">{{ props.title }}</span>
    </n-ellipsis>
  </div>
</template>

<style lang="scss">
.t-log-row {
  padding-block: 3px;
  &-status {
    padding-inline: 7px;
    border-radius: 5px;
    &-success {
      background: rgb(37, 224, 146);
      color: white;
    }
    &-error {
      background: rgb(238, 53, 47);
      color: white;
    }
  }
  &-marketplace {
    &-shopee {
      background-color: #fb5430;
      color: white;
      padding-inline: 7px;
      border-radius: 5px;
    }
    &-tokopedia {
      background-color: #03ac0e;
      color: white;
      padding-inline: 7px;
      border-radius: 5px;
    }
  }
}
</style>
