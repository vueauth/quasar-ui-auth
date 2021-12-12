import { useUpdatePassword } from 'auth-composables'

export default () => {
  const {
    form,
    update,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    requiresReauthentication,
    resetErrors,
    resetForm,
  } = useUpdatePassword()

  return {
    update,
    form,
    resetForm,
    loading,
    requiresReauthentication,

    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    resetErrors,
  }
}
