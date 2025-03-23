import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@vueauth/core'
import indexedDbConfig from 'app/config/indexeddb'
import {
  IndexedDbPlugin,
  useIdentityPasswordRegister,
  useIdentityPasswordLogin,
  useIdentityPasswordLogout,
  useUnauthenticatedRedirector,
  useAuthRedirector,
  useHandlesErrors,
  useAuthState,
  useAuthenticatedRedirector,
  useFetchUser,
  usePasswordResetViaEmail,
  useUpdatePassword
} from '@vueauth/indexeddb'

export default boot(({ app }) => {
  app.use(IndexedDbPlugin, indexedDbConfig) // Be sure to update config/sanctum to configure your app!

  app.use(AuthPlugin, {
    default: 'indexeddb',
    providers: {
      indexeddb: {
        features: {
          'identityPassword:register': useIdentityPasswordRegister,
          'identityPassword:login': useIdentityPasswordLogin,
          'identityPassword:logout': useIdentityPasswordLogout,
          unauthenticatedRedirector: useUnauthenticatedRedirector,
          authenticatedRedirector: useAuthenticatedRedirector,
          errorHandler: useHandlesErrors,
          fetchUser: useFetchUser,
          authState: useAuthState,
          authRedirector: useAuthRedirector,
          passwordResetViaEmail: usePasswordResetViaEmail,
          updatePassword: useUpdatePassword
        }
      }
    }
  })
})
