<template>
<router-link to="/"><button>HOME</button></router-link>
<pre>{{ usersFetched }}</pre>
<pre>{{ loading }}</pre>
<pre>{{ users }}</pre>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

export default defineComponent({
  computed: {
    ...mapGetters("github", {
      users: "getUsers",
      usersFetched: "isUsersFetched",
      loading: "isLoading"
    })
  },
  async beforeMount() {
    if (!this.usersFetched) {
      this.$store.dispatch("github/fetchUsers")
    } 
  }
})
</script>