<template>
  <router-view />
</template>

<script setup>
import { authenticateRoutes } from '@vueauth/quasar-ui-auth'
authenticateRoutes()
</script>
