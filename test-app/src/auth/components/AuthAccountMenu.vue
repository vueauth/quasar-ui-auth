<script setup>
import useLogout from 'auth/actions/useLogout'
import AuthUpdatePasswordDialog from './AuthUpdatePasswordDialog.vue'
import { ref } from 'vue'

const { loading, onLogoutClicked } = useLogout()

const showUpdatePasswordDialog = ref(false)
</script>

<template>
  <q-menu auto-close>
    <q-list>
      <!-- Logout -->
      <q-item
        clickable
        @click="onLogoutClicked"
      >
        <q-item-section side>
          <q-icon
            v-if="!loading"
            name="logout"
          />
          <q-spinner
            v-else
            size="sm"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          Logout
        </q-item-section>
      </q-item>

      <!-- Change Password -->
      <q-item
        clickable
        @click="showUpdatePasswordDialog = true"
      >
        <q-item-section side>
          <q-icon name="key" />
        </q-item-section>
        <q-item-section>
          Change Password
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
  <AuthUpdatePasswordDialog v-model="showUpdatePasswordDialog" />
</template>
