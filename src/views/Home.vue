<template>
  <div>HOME</div>
  <h2>{{ someThing }}</h2>
  <button @click="change">CHANGE</button>
  <pre>{{ users }}</pre>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  data: () => ({
    someThing: "test" as string,
  }),
  computed: {
    ...mapGetters("github", {
      users: "getUsers",
    }),
  },
  beforeMount() {
    console.log(this.$store);
  },
  methods: {
    change() {
      this.someThing = "change";
    },
  },
});
</script>
