<script setup lang="ts">
import { NConfigProvider, NMessageProvider, NNotificationProvider } from "naive-ui";
import Layout from "./layout/Layout.vue";
</script>

<template>
  <n-config-provider>
    <n-notification-provider placement="top-right" :max="2">
      <n-message-provider placement="top" :max="2">
        <layout></layout>
      </n-message-provider>
    </n-notification-provider>
  </n-config-provider>
</template>
