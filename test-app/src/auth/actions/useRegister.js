import { useIdentityPasswordRegister, getOptions } from 'auth-composables'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default () => {
  const router = useRouter()
  const { emailConfirm } = getOptions('', 'identityPassword:register')
  const registered = ref()

  const {
    form,
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    register,
    customFields,
  } = useIdentityPasswordRegister()

  async function onRegisterClicked () {
    await register()
    if (!hasErrors.value) {
      if (!emailConfirm) {
        router.push('/')
      }
      registered.value = true
    }
  }

  return {
    onRegisterClicked,
    form,
    customFields: customFields ?? {},
    loading,
    errors,
    hasErrors,
    validationErrors,
    hasValidationErrors,
    register,
    router,
    emailConfirm,
    registered,
  }
}
