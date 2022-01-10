import { useRouter } from 'vue-router'
import { useIdentityPasswordLogin, useAuthState } from '@vueauth/core'

export default () => {
  const router = useRouter()
  const {
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    login,
    isReauthenticating,
    resetForm,
    resetErrors
  } = useIdentityPasswordLogin()
  const { user } = useAuthState()

  async function onLoginClicked () {
    resetErrors()
    await login()
    if (!hasErrors.value) {
      router.push({ name: 'dashboard' })
    }
  }

  function onForgotPasswordClicked () {
    router.push({ name: 'auth.requestPasswordReset' })
  }

  /**
   * For some auth providers reauthentication requires an email address.
   * This function prefills the email if possible,
   * thus saving the user from typing it in
   */
  function attemptSetEmailOnForm () {
    if (typeof form.value.email === 'string' && user.value?.email) {
      form.value.email = user.value.email
    }
  }

  return {
    onLoginClicked,
    onForgotPasswordClicked,
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    login,
    resetForm,
    isReauthenticating,
    attemptSetEmailOnForm
  }
}
