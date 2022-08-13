<script lang="ts" setup>
import { useSlots } from "vue";

const props = defineProps<{
  iconSize?: number;
  iconColor?: string;
}>();

const slots = useSlots();
</script>
<template>
  <h4 class="t-header">
    <i
      v-if="slots.icon"
      :style="{
        color: props.iconColor || '#bcf368',
        fontSize: props.iconSize ? props.iconSize + 'px' : '13px',
      }"
      class="t-header-icon"
    >
      <slot name="icon"></slot>
    </i>
    <slot></slot>
  </h4>
</template>

<style lang="scss">
.t-header {
  font-weight: 500;
  font-size: 14px;
  color: var(--color-dark-5);
  user-select: none;
  &-icon {
    margin-right: var(--size-1);
  }
}
</style>
