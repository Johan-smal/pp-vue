<template>
  <div>ANOUT</div>
  <button @click="updateTest">{{ test }}</button>
</template>
<script setup lang="ts">
import { ref } from "vue";

let test = ref("bleh");

function updateTest() {
  test.value = "updated";
}
</script>
