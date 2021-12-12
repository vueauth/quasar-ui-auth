<script setup>
import { QCard, QBanner, QCardSection, QBtn } from 'quasar'
import AuthLoginForm from 'auth/components/AuthLoginForm.vue'
import useLogin from 'auth/actions/useLogin'

const {
  onLoginClicked,
  form,
  loading,
  error,
  hasError,
} = useLogin()
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <AuthLoginForm
        v-model:email="form.email"
        v-model:password="form.password"
      />

      <q-banner
        v-if="hasError"
        rounded
        class="bg-negative q-mt-sm text-white"
      >
        {{ error.message }}
      </q-banner>

      <q-btn
        :loading="loading"
        class="q-mt-sm"
        color="primary"
        label="login"
        unelevated
        @click="onLoginClicked"
      />
    </q-card-section>
  </q-card>
</template>
