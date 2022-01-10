<script setup>
import { QInput, QForm } from 'quasar'
import { defineProps, defineEmits } from 'vue'

defineProps({
  email: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  passwordConfirmation: {
    required: true,
    type: String
  },
  validationErrors: {
    required: false,
    type: Object,
    default () {
      return {}
    }
  }
})

const emit = defineEmits([
  'update:email',
  'update:password',
  'update:passwordConfirmation'
])
</script>

<template>
  <q-form>
    <slot name="top" />
    <q-input
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
      filled
      label="Password"
      :model-value="password"
      :error="!!validationErrors?.['password']"
      :error-message="validationErrors?.['password']?.[0]"
      class="q-mb-xs"
      type="password"
      hide-bottom-space
      @update:model-value="value => emit('update:password', value)"
    />
    <q-input
      filled
      label="Confirm Password"
      :model-value="passwordConfirmation"
      :error="!!validationErrors?.['password_confirmation']"
      :error-message="validationErrors?.['password_confirmation']?.[0]"
      class="q-mb-md"
      type="password"
      hide-bottom-space
      @update:model-value="value => emit('update:passwordConfirmation', value)"
    />
    <slot name="bottom" />
  </q-form>
</template>
