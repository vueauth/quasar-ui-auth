import { usePasswordResetViaEmail } from '@vueauth/core'

export default () => {
  const {
    requestForm,
    resetForm,
    requestReset,
    reset,
    loading,
    hasValidationErrors,
    validationErrors,
    errors,
    resetErrors
  } = usePasswordResetViaEmail()

  async function onResetClicked () {
    await reset()
  }

  async function onRequestResetClicked () {
    await requestReset()
  }

  return {
    onResetClicked,
    onRequestResetClicked,
    requestForm,
    resetForm,
    requestReset,
    reset,
    loading,
    hasValidationErrors,
    validationErrors,
    errors,
    resetErrors
  }
}
