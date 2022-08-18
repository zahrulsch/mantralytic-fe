<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { NPopover, NButton, NScrollbar } from "naive-ui";
import { Log } from "../../typings/logs";
import TLoggerRow from "./TLoggerRow.vue";
import socket from "../../utils/socket";

const openLogs = ref(false);
const logsListElement = ref<HTMLDivElement | null>(null);
const logsListElementContainer = ref<HTMLDivElement | null>(null);
const logs = ref<Log[]>([]);

const logCatcher = (data: Log) => {
  logs.value.push(data);
};

const scroller = () => {
  logsListElement.value?.scrollTo({
    top:
      logsListElementContainer.value?.clientHeight &&
      logsListElementContainer.value.clientHeight + 1000,
    behavior: "auto",
  });
};

watch(logsListElementContainer, () => {
  scroller();
});

watch(
  () => logs.value.length,
  () => {
    scroller();
  },
  { immediate: true }
);

onMounted(() => {
  socket.on("log", logCatcher);
  socket.emit("connection");
  socket.emit("dbstatus");
});

onUnmounted(() => {
  socket.off("log", logCatcher);
});
</script>

<template>
  <div class="t-logs-container">
    <n-popover :show="openLogs" trigger="manual" placement="left">
      <template #trigger>
        <n-button @click="openLogs = !openLogs" size="tiny" type="info">
          <template #icon>
            <i class="bi bi-list-task"></i>
          </template>
          <span>Log</span>
        </n-button>
      </template>
      <div class="t-logs-list">
        <n-scrollbar ref="logsListElement">
          <div ref="logsListElementContainer" class="is-flex is-flex-direction-column">
            <t-logger-row
              v-for="(i, index) in logs"
              :key="index"
              :marketplace-type="i.marketplaceType"
              :status="i.status"
              :title="i.title"
              :type="i.type"
              :url="i.url"
            />
          </div>
        </n-scrollbar>
      </div>
    </n-popover>
  </div>
</template>

<style lang="scss">
.t-logs {
  &-container {
    position: absolute;
    bottom: 18px;
    right: 18px;
  }
  &-list {
    height: 600px;
    width: 500px;
    overflow: hidden;
  }
}
</style>
