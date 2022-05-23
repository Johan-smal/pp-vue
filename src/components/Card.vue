<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ 
  title: string
}>()

defineExpose(props)
</script>

<template>
  <div class="border-slate-100 m-10">
    <div>
      <h3 class="font-semibold text-slate-900">{{ title }}</h3>
    </div>
    <div class="m-5">
      <slot></slot>
    </div>
    <div>
      <slot name="actions"></slot>
    </div>
  </div>
</template>