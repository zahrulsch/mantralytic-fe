<script lang="ts" setup>
import { useSlots } from "vue";

type ButtonType = "primary" | "info" | "danger" | "success" | "warn";
type ButtonAnimation = "pulse" | "rotate";
interface TButtonProps {
  type?: ButtonType;
  loading?: boolean;
  animate?: ButtonAnimation;
}

const slots = useSlots();
const props = defineProps<TButtonProps>();
</script>

<template>
  <button
    :class="[
      't-button t-font-secondary t-font-size-12',
      `t-button-${props.type || 'primary'}`,
    ]"
  >
    <div
      :class="['t-button-animate', props.loading && `t-button-animate-${props.animate}`]"
      v-if="slots.icon"
    >
      <slot name="icon"></slot>
    </div>
    <slot name="default"></slot>
  </button>
</template>

<style lang="scss">
.t-button {
  padding: var(--size-1);
  padding-inline: var(--size-2);
  display: flex;
  align-items: center;
  column-gap: var(--size-2);
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: var(--size-1);
  background-color: rgb(231, 231, 231);
  color: #3f3f3f;
  font-weight: 400;
  transition: 120ms ease;

  &:hover {
    background-color: rgb(221, 221, 221);
  }

  &-primary {
    background-color: rgb(0, 206, 127);
    color: white;

    &:hover {
      background-color: rgb(0, 192, 118);
    }
  }

  &-success {
    background-color: rgb(17, 199, 0);
    color: white;

    &:hover {
      background-color: rgb(16, 192, 0);
    }
  }

  &-warn {
    background-color: rgb(255, 238, 0);
    color: #3f3f3f;

    &:hover {
      background-color: rgb(248, 232, 0);
    }
  }

  &-info {
    background-color: rgb(0, 162, 255);
    color: white;

    &:hover {
      background-color: rgb(0, 156, 247);
    }
  }

  &-danger {
    background-color: rgb(221, 0, 48);
    color: white;

    &:hover {
      background-color: rgb(231, 0, 50);
    }
  }

  &-animate {
    display: flex;
    align-items: center;
    &-rotate {
      animation: trotate 1.75s linear infinite;
    }
    &-pulse {
      animation: tpulse 1s ease infinite;
    }
  }

  @keyframes tpulse {
    from,
    to {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
  }

  @keyframes trotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
