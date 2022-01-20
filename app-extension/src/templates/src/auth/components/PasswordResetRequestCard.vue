<script setup>
import { QCard, QCardSection, QBtn } from 'quasar'
import usePasswordReset from 'auth/composables/usePasswordReset'
import ErrorsBanner from './ErrorsBanner.vue'
import PasswordResetRequestForm from './forms/PasswordResetRequestForm.vue'
import { ref } from 'vue'

const {
  requestReset,
  requestForm,
  loading,
  hasValidationErrors,
  validationErrors,
  errors,
  hasErrors,
  resetErrors
} = usePasswordReset()

const hasRequestedReset = ref(false)

async function onRequestResetClicked () {
  await requestReset()
  if (!hasErrors.value) {
    hasRequestedReset.value = true
  }
}

</script>

<template>
  <q-card>
    <q-card-section class="text-center q-pb-sm">
      <!-- Register Form -->
      <PasswordResetRequestForm
        v-if="!hasRequestedReset"
        v-model:email="requestForm.email"
        :validation-errors="validationErrors"
        @update:model-value="resetErrors"
      />

      <div
        v-else
        style="font-size: 1.25em; max-width: 300px;"
      >
        We've emailed you instructions on how to reset your password 😊
      </div>

      <!-- Errors -->
      <div v-if="!hasValidationErrors">
        <ErrorsBanner :errors="errors" />
      </div>
    </q-card-section>

    <!-- Request Password Reset Button -->
    <q-btn
      v-if="!hasRequestedReset"
      :loading="loading"
      class="full-width"
      color="grey-8"
      label="Email Reset Instructions"
      unelevated
      @click="onRequestResetClicked"
    />
  </q-card>
</template>
