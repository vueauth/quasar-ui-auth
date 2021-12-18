<script setup>
import { QCard, QCardSection, QBtn } from 'quasar'
import useRegister from 'auth/composables/useRegister'
import AuthRegisterForm from 'src/auth/components/forms/RegisterForm.vue'
import AuthErrorsBanner from './ErrorsBanner.vue'

const {
  form,
  loading,
  errors,
  onRegisterClicked,
  validationErrors,
  hasValidationErrors,
  registered
} = useRegister()

</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <!-- Register Form -->
      <AuthRegisterForm
        v-model:email="form.email"
        v-model:password="form.password"
        v-model:password-confirmation="form.password_confirmation"
        v-model:name="form.name"
        :validation-errors="validationErrors"
      />

      <!-- Errors -->
      <div v-if="!hasValidationErrors">
        <AuthErrorsBanner :errors="errors" />
      </div>
    </q-card-section>

    <!-- Register Button -->
    <q-btn
      v-if="!registered"
      :loading="loading"
      class="q-mt-sm full-width"
      color="primary"
      label="register"
      unelevated
      @click="onRegisterClicked"
    />

    <q-dialog
      :model-value="registered"
      persistent
    >
      <q-card>
        <q-card-section>
          <h5 class="q-my-md">
            Account Created!
          </h5>
          <div class="q-my-md">
            Look for a confirmation email in your inbox to get started!
          </div>
        </q-card-section>
        <q-btn
          label="Login Page"
          color="primary"
          unelevated
          no-caps
          class="full-width"
          @click="$router.push({ name: 'auth.login' })"
        />
      </q-card>
    </q-dialog>
  </q-card>
</template>
