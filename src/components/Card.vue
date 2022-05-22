<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{ 
  title: string
}>()

defineExpose(props)
</script>

<template>
  <div>
    <div>
      <h3 class="text-lg">{{ title }}</h3>
    </div>
    <div>
      <slot></slot>
    </div>
    <div>
      <slot name="actions"></slot>
    </div>
  </div>
</template>