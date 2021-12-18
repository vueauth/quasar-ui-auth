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
  name: {
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
  'update:password',
  'update:passwordConfirmation',
  'update:name'
])
</script>

<template>
  <q-form>
    <q-input
      v-if="typeof name === 'string'"
      filled
      label="Name"
      :model-value="name"
      :error="!!validationErrors?.['name']"
      :error-message="validationErrors?.['name']?.[0]"
      class="q-mb-sm"
      hide-bottom-space
      @update:model-value="value => emit('update:name', value)"
    />
    <q-input
      filled
      label="Email"
      :model-value="email"
      :error="!!validationErrors?.['email']"
      :error-message="validationErrors?.['email']?.[0]"
      class="q-mb-sm"
      hide-bottom-space
      @update:model-value="value => emit('update:email', value)"
    />
    <q-input
      filled
      type="password"
      label="Password"
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
      label="Confirm Password"
      :model-value="passwordConfirmation"
      :error="!!validationErrors?.['password_confirmation']"
      :error-message="validationErrors?.['password_confirmation']?.[0]"
      class="q-mb-sm"
      hide-bottom-space
      @update:model-value="value => emit('update:passwordConfirmation', value)"
    />
  </q-form>
</template>
