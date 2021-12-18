<script setup>
import AuthUpdatePasswordDialog from 'src/auth/components/dialogs/UpdatePasswordDialog.vue'
import { ref } from 'vue'
import AuthChangePasswordItem from 'src/auth/components/AccountMenu/ChangePasswordItem.vue'
import AuthLogoutItem from 'src/auth/components/AccountMenu/LogoutItem.vue'

const showUpdatePasswordDialog = ref(false)
</script>

<template>
  <q-menu auto-close>
    <q-list>
      <AuthLogoutItem />
      <AuthChangePasswordItem @click="showUpdatePasswordDialog = true" />
    </q-list>
  </q-menu>
  <AuthUpdatePasswordDialog v-model="showUpdatePasswordDialog" />
</template>
