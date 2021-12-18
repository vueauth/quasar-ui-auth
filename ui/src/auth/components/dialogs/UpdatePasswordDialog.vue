<script setup>
import AuthUpdatePasswordForm from 'src/auth/components/forms/UpdatePasswordForm.vue'
import AuthReauthenticateDialog from 'src/auth/components/dialogs/ReauthenticateDialog/ReauthenticateDialog.vue'
import { ref, watch } from 'vue'
import { useAuthState } from '@vueauth/core'
import useChangePassword from 'auth/composables/useChangePassword'
import AuthErrorsBanner from 'src/auth/components/ErrorsBanner.vue'

const dialogComponent = ref()

const {
  form,
  loading,
  requiresReauthentication,
  errors,
  hasErrors,
  update: updatePassword,
  validationErrors,
  hasValidationErrors,
  resetErrors,
  resetForm
} = useChangePassword()

async function handleUpdatePassword () {
  resetErrors()
  await updatePassword()
  if (!hasErrors.value) {
    dialogComponent.value.hide()
  }
}

const { user } = useAuthState()

if (typeof form.value.email === 'string' && user.value?.email) {
  form.value.email = user.value.email
}

const showReauthenticateDialog = ref(false)

if (requiresReauthentication !== undefined) {
  watch(requiresReauthentication, newValue => {
    if (newValue) {
      showReauthenticateDialog.value = true
    }
  })
}
</script>

<template>
  <q-dialog
    ref="dialogComponent"
    v-bind="$attrs"
    @hide="resetForm"
  >
    <q-card>
      <q-toolbar>
        <q-toolbar-title>Change Password</q-toolbar-title>
        <q-btn
          v-close-popup
          icon="close"
          round
          flat
        />
      </q-toolbar>

      <q-card-section>
        <AuthUpdatePasswordForm
          v-model:email="form.email"
          v-model:current-password="form.current_password"
          v-model:password="form.password"
          v-model:password-confirmation="form.password_confirmation"
          :validation-errors="validationErrors"
        />

        <!-- Errors -->
        <div v-if="!hasValidationErrors">
          <AuthErrorsBanner :errors="errors" />
        </div>
      </q-card-section>

      <q-btn
        label="update"
        :loading="loading"
        class="full-width"
        color="primary"
        @click="handleUpdatePassword"
        @contextmenu.prevent="showReauthenticateDialog = true"
      />

      <AuthReauthenticateDialog
        v-if="requiresReauthentication !== undefined"
        v-model="showReauthenticateDialog"
      />
    </q-card>
  </q-dialog>
</template>
