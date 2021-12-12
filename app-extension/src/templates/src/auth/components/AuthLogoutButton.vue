<script setup>
import { QBtn } from 'quasar'
import useLogout from 'auth/actions/useLogout'

const {
  loading,
  onLogoutClicked,
} = useLogout()
</script>

<template>
  <q-btn
    :loading="loading"
    @click="onLogoutClicked"
  />
</template>
