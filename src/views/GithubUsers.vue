<template>
<router-link to="/"><button>HOME</button></router-link>
<div v-if="!loading && usersFetched">
  <card 
    v-if="usersFetched"
    v-for="user in users"
    :key="user.id"
    :title="user.login"
  >
    <div>
      <img class="w-20 h-20 rounded-full bg-slate-100 ring-2 ring-white" :src="user.avatar_url" />
    </div>
    <template #actions>
      <my-button @click="remove(user.id)">REMOVE</my-button>
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
import Button from '../components/Button.vue'

export default defineComponent({
  components: {
    card: Card,
    'loading-spinner': LoadingSpinner,
    'my-button': Button
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
    remove(id: number) {
      this.$store.dispatch("github/removeUser", id)
    }
  }
})
</script>