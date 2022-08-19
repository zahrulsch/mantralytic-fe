<script lang="ts" setup>
import { NEllipsis } from "naive-ui";
import { computed } from "vue";
import { Status } from "../../typings/logs";

interface Log {
  type?: "crawler" | "connection" | "";
  url?: string;
  marketplaceType?: "shopee" | "tokopedia" | "";
  status: Status;
  title: string;
}
const props = defineProps<Log>();
const styleClass = computed(() => {
  let attr = {
    class: "",
    style: {
      color: "",
    },
  };

  const titleToIcon = [
    {
      title: "database",
      icon: "bi bi-server t-font-size-11",
      color: "#7734f9",
    },
    {
      title: "socket",
      icon: "bi bi-plugin t-font-size-11",
      color: "#198754",
    },
  ];

  titleToIcon.forEach((tt) => {
    if (props.title.toLowerCase().includes(tt.title)) {
      attr.class = tt.icon;
      attr.style.color = tt.color;
    }
  });

  return attr;
});
</script>

<template>
  <div
    :class="[
      props.type === 'crawler' ? 'is-align-items-start' : 'is-align-items-center',
      'is-flex t-gap-x-1 t-log-row',
    ]"
  >
    <span
      :class="[
        'is-capitalized t-font-size-12 t-log-row-status',
        `t-log-row-status-${status}`,
      ]"
      style="white-space: nowrap"
      >{{ props.status }}</span
    >
    <i v-if="props.type === 'connection'" v-bind="styleClass"></i>
    <span
      style="white-space: nowrap"
      :class="[
        `t-log-row-marketplace-${props.marketplaceType}`,
        'is-capitalized t-font-size-12',
      ]"
      v-if="props.marketplaceType"
      >{{ props.marketplaceType }}</span
    >
    <n-ellipsis :tooltip="false" line-clamp="2">
      <span class="t-font-code t-font-size-12">{{ props.title }}</span>
    </n-ellipsis>
  </div>
</template>

<style lang="scss">
.t-log-row {
  padding-block: 5px;
  padding-inline: 7px;
  margin-bottom: 8px;
  transition: 250ms ease;
  background-color: rgba(245, 245, 245, 0.7);

  &:hover {
    background-color: #f0f0f0ce;
    border-radius: var(--size-1);
  }

  &-status {
    padding-inline: 7px;
    border-radius: 5px;
    cursor: default;
    &-success {
      background: rgb(1, 119, 70);
      color: white;
    }
    &-error {
      background: rgb(238, 53, 47);
      color: white;
    }
    &-warning {
      background: rgb(255, 251, 13);
      color: var(--color-dark-2);
      font-weight: 500;
    }
    &-info {
      background: rgb(0, 101, 160);
      color: white;
      font-weight: 500;
    }
  }
  &-marketplace {
    &-shopee {
      cursor: default;
      background-color: #fb5430;
      color: white;
      padding-inline: 7px;
      border-radius: 5px;
    }
    &-tokopedia {
      cursor: default;
      background-color: #03ac0e;
      color: white;
      padding-inline: 7px;
      border-radius: 5px;
    }
    &-update- {
      &tokopedia,
      &shopee {
        cursor: default;
        background-color: #e02a61;
        color: white;
        padding-inline: 7px;
        border-radius: 5px;
        font-weight: 500;
      }
    }
  }
}
</style>
