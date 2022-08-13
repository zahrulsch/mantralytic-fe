<script lang="ts" setup>
import { NInput, type InputProps } from 'naive-ui'

interface TInputProps extends InputProps {}

const props = defineProps<TInputProps>()
</script>

<template>
  <n-input type="textarea" class="t-input" v-bind="props" />
</template>

<style lang="scss">
.t-input {
  --n-border: 1px solid var(--color-dark-6) !important;
  --n-border-hover: 1px solid var(--color-dark-6) !important;
  --n-border-focus: 1px solid var(--color-dark-6) !important;
  --n-box-shadow-focus: none !important;
}
</style>
