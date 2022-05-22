<template>
  <div>HOME</div>
  <h2>{{ someThing }}</h2>
  <button @click="change">CHANGE</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    someThing: "test" as string,
  }),
  methods: {
    change() {
      this.someThing = "change";
    },
  },
});
</script>
