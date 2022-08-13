<script lang="ts" setup>
import {
  NLayout,
  NLayoutSider,
  NMenu,
  NImage,
  NLayoutContent,
  NScrollbar,
} from "naive-ui";
import { menuOptions } from "./menuOptions";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import TLogger from "../components/Logger/TLogger.vue";

import mantralytic from "../assets/mantralytic.svg";
import mantralyticmini from "../assets/mantralytic-mini.png";

const router = useRouter();
const route = useRoute();
const collapsed = ref(false);

const updatedValue = (v: any) => {
  router.push({ path: v });
};
</script>

<template>
  <n-layout class="t-layout" has-sider>
    <n-layout-sider
      show-trigger="arrow-circle"
      collapse-mode="width"
      :collapsed-width="60"
      :width="200"
      :native-scrollbar="false"
      v-model:collapsed="collapsed"
      bordered
    >
      <div v-if="!collapsed" class="t-menu-header">
        <router-link to="/">
          <n-image width="120" title="mantralytic" :src="mantralytic" preview-disabled />
        </router-link>
      </div>
      <div v-else class="t-menu-header-collapsed">
        <router-link to="/">
          <n-image
            title="mantralytic"
            width="14"
            :src="mantralyticmini"
            preview-disabled
          />
        </router-link>
      </div>
      <n-menu
        :collapsed-width="60"
        :icon-size="12"
        :collapsed-icon-size="12"
        :options="menuOptions"
        class="t-menu"
        @update:value="(v) => updatedValue(v)"
        :value="route.path"
      />
    </n-layout-sider>
    <n-scrollbar>
      <n-layout-content>
        <div class="container t-container">
          <router-view>
            <template #default="{ Component }">
              <transition name="router" mode="out-in">
                <component :is="Component"></component>
              </transition>
            </template>
          </router-view>
        </div>
      </n-layout-content>
    </n-scrollbar>
    <t-logger />
  </n-layout>
</template>

<style lang="scss">
.n-layout-sider.n-layout-sider--bordered .n-layout-sider__border {
  background-color: var(--color-dark-6);
}
.t-layout {
  height: 100vh;
  width: 100vw;
}
.t-container {
  padding-block: 20px;
  padding-inline: 20px;
  position: relative;
}
.t-menu {
  font-weight: 400;
  &-header {
    margin-top: 18px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    &-collapsed {
      display: flex;
      justify-content: center;
      margin-top: 18px;
      margin-bottom: 12px;
    }
  }
}

.router-enter-active {
  transition: all 0.1s linear;
}

.router-leave-active {
  transition: all 0.1s linear;
}

.router-enter-from {
  transform: translateY(10px);
  opacity: 0;
}
.router-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
