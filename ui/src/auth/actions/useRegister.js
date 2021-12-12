import { useIdentityPasswordRegister } from '@vueauth/core'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()
  const emailRegisterService = useIdentityPasswordRegister()

  async function onRegisterClicked () {
    try {
      await emailRegisterService.register()
      router.push('/')
    } catch (error) {

    }
  }

  return {
    ...emailRegisterService,
    onRegisterClicked,
    router,
  }
}
