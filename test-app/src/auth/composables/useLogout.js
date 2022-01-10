import { useIdentityPasswordLogout } from '@vueauth/core'
import { useRouter } from 'vue-router'

export default () => {
  const router = useRouter()

  const { logout, loading } = useIdentityPasswordLogout()

  async function onLogoutClicked () {
    await logout()
    router.push('/login')
  }

  return {
    logout,
    loading,
    onLogoutClicked
  }
}
