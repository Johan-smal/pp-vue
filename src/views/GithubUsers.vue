<template>
<router-link to="/"><button>HOME</button></router-link>
<div v-if="!loading && usersFetched">
  <card 
    v-if="usersFetched"
    v-for="user in users"
    :key="user.id"
    :title="user.login"
  >
    <template #body>
      <img :src="user.avatar_url" />
    </template>
    <template #actions>
      <button @click="remove(user.id)">REMOVE</button>
    </template>
  </card>
</div>
<div v-else-if="!loading && hasError">
  <p>{{ error }}</p>
</div>
<div v-else>
  <loading-spinner></loading-spinner>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

import Card from '../components/Card.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'

export default defineComponent({
  components: {
    card: Card,
    'loading-spinner': LoadingSpinner
  },
  computed: {
    ...mapGetters("github", {
      users: "getUsers",
      usersFetched: "isUsersFetched",
      loading: "isLoading",
      hasError: "hasError",
      error: "getError"
    })
  },
  async beforeMount() {
    if (!this.usersFetched) {
      this.$store.dispatch("github/fetchUsers")
    } 
  },
  methods: {
    remove(id) {
      this.$store.dispatch("github/removeUser", id)
    }
  }
})
</script>