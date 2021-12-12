<script setup>
import { QCard, QCardSection, QBtn } from 'quasar'
import AuthLoginForm from 'auth/components/AuthLoginForm.vue'
import useLogin from 'auth/actions/useLogin'
import AuthErrorsBanner from './AuthErrorsBanner.vue'

const {
  onLoginClicked,
  form,
  loading,
  errors,
  validationErrors,
  hasValidationErrors,
} = useLogin()
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <!-- Login Form -->
      <AuthLoginForm
        v-model:email="form.email"
        v-model:password="form.password"
        :validation-errors="validationErrors"
      />

      <!-- Errors -->
      <div v-if="!hasValidationErrors">
        <AuthErrorsBanner :errors="errors" />
      </div>
    </q-card-section>

    <!-- Login Button -->
    <q-btn
      :loading="loading"
      class="full-width"
      color="primary"
      label="login"
      unelevated
      @click="onLoginClicked"
    />
  </q-card>
</template>
