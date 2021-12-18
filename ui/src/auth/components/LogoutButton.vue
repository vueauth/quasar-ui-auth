<script setup>
import { QBtn } from 'quasar'
import useLogout from 'auth/composables/useLogout'

const {
  loading,
  onLogoutClicked
} = useLogout()
</script>

<template>
  <q-btn
    :loading="loading"
    @click="onLogoutClicked"
  />
</template>
