import { useRouter } from 'vue-router'
import { useIdentityPasswordLogin } from '@vueauth/core'

export default () => {
  const router = useRouter()
  const {
    form,
    loading,
    error,
    hasError,
    login,
  } = useIdentityPasswordLogin()

  async function onLoginClicked () {
    try {
      await login()
      router.push('/')
    } catch (error) {

    }
  }

  return {
    onLoginClicked,
    form,
    loading,
    error,
    hasError,
    login,
  }
}
