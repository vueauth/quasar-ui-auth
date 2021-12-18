<script setup>
import { QCard, QCardSection, QBtn } from 'quasar'
import usePasswordReset from 'auth/composables/usePasswordReset'
import ErrorsBanner from './ErrorsBanner.vue'
import PasswordResetRequestForm from './forms/PasswordResetRequestForm.vue'

const {
  onRequestResetClicked,
  requestForm,
  loading,
  hasValidationErrors,
  validationErrors,
  errors,
  resetErrors,
} = usePasswordReset()

</script>

<template>
  <q-card>
    <q-card-section class="text-center q-pb-sm">
      <!-- Register Form -->
      <PasswordResetRequestForm
        v-model:email="requestForm.email"
        :validation-errors="validationErrors"
        @update:model-value="resetErrors"
      />

      <!-- Errors -->
      <div v-if="!hasValidationErrors">
        <ErrorsBanner :errors="errors" />
      </div>
    </q-card-section>

    <!-- Register Button -->
    <q-btn
      :loading="loading"
      class="full-width"
      color="grey-8"
      label="Email Reset Link"
      unelevated
      @click="onRequestResetClicked"
    />
  </q-card>
</template>
