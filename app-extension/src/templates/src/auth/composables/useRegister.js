import { useIdentityPasswordRegister, getConfig } from '@vueauth/core'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default () => {
  const router = useRouter()
  const { emailConfirm } = getConfig('identityPassword:register')
  const registered = ref()

  const {
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    register
  } = useIdentityPasswordRegister()

  async function onRegisterClicked () {
    await register()
    if (!hasErrors.value) {
      if (!emailConfirm) {
        router.push({ name: 'dashboard' })
      }
      registered.value = true
    }
  }

  return {
    onRegisterClicked,
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    register,
    router,
    emailConfirm,
    registered
  }
}
