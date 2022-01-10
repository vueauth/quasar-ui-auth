<script setup>
import { QInput, QForm } from 'quasar'
import { defineProps, defineEmits } from 'vue'

defineProps({
  email: {
    required: false,
    type: String,
    default: null
  },
  currentPassword: {
    required: false,
    type: String,
    default: null
  },
  password: {
    required: true,
    type: String
  },
  passwordConfirmation: {
    required: false,
    type: String,
    default: null
  },
  validationErrors: {
    required: false,
    type: Object,
    default () { return {} }
  }
})

const emit = defineEmits([
  'update:email',
  'update:currentPassword',
  'update:password',
  'update:passwordConfirmation'
])
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
      v-if="typeof email === 'string'"
      filled
      label="Email"
      :model-value="email"
      :error="!!validationErrors?.['email']"
      :error-message="validationErrors?.['email']?.[0]"
      class="q-mb-md"
      hide-bottom-space
      @update:model-value="value => emit('update:email', value)"
    />
    <q-input
      v-if="typeof currentPassword === 'string'"
      filled
      type="password"
      label="Current Password"
      :model-value="currentPassword"
      :error="!!validationErrors?.['current_password']"
      :error-message="validationErrors?.['current_password']?.[0]"
      class="q-mb-lg"
      hide-bottom-space
      @update:model-value="value => emit('update:currentPassword', value)"
    />
    <q-input
      v-if="typeof password === 'string'"
      filled
      type="password"
      label="New Password"
      :model-value="password"
      :error="!!validationErrors?.['password']"
      :error-message="validationErrors?.['password']?.[0]"
      class="q-mb-sm"
      hide-bottom-space
      @update:model-value="value => emit('update:password', value)"
    />
    <q-input
      v-if="typeof passwordConfirmation === 'string'"
      filled
      type="password"
      label="Confirm New Password"
      :model-value="passwordConfirmation"
      :error="!!validationErrors?.['password_confirmation']"
      :error-message="validationErrors?.['password_confirmation']?.[0]"
      class="q-mb-sm"
      hide-bottom-space
      @update:model-value="value => emit('update:passwordConfirmation', value)"
    />
    <slot name="bottom" />
  </q-form>
</template>
