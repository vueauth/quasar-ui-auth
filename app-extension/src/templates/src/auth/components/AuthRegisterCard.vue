<script setup>
import { QCard, QBanner, QCardSection, QBtn } from 'quasar'
import useRegister from 'auth/actions/useRegister'
import AuthRegisterForm from 'src/auth/components/AuthRegisterForm.vue'

const {
  form,
  loading,
  error,
  hasError,
  onRegisterClicked,
} = useRegister()
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <!-- Register Form -->
      <AuthRegisterForm
        v-model:email="form.email"
        v-model:password="form.password"
      />

      <!-- Errors -->
      <q-banner
        v-if="hasError"
        rounded
        class="bg-negative q-mt-sm text-white"
      >
        {{ error.message }}
      </q-banner>

      <!-- Register Button -->
      <q-btn
        :loading="loading"
        class="q-mt-sm"
        color="primary"
        label="register"
        unelevated
        @click="onRegisterClicked"
      />
    </q-card-section>
  </q-card>
</template>
