import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@vueauth/core'
import strapiConfig from 'app/config/strapi'
import {
  StrapiPlugin,
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
} from '@vueauth/strapi'

export default boot(({ app }) => {
  app.use(StrapiPlugin, strapiConfig) // Be sure to update config/strapi to configure your app!

  app.use(AuthPlugin, {
    default: 'strapi',
    providers: {
      strapi: {
        features: {
          'identityPassword:register': {
            composable: useIdentityPasswordRegister,
            config: { withUsername: false }
          },
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
