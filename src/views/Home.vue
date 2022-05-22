<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <router-link :to="{ name: 'users' }"><button>GITHUB USERS</button></router-link>
</template>
<script setup lang="ts"></script>
