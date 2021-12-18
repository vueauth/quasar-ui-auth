import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@vueauth/core'
import <%= authProviderIdentifier %>Config from 'app/config/<%= authProviderIdentifier %>'
import {
  <%= authProviderIdentifierPascal %>Plugin,
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
} from '<%= authProviderPackage %>'

export default boot(({ app }) => {
  app.use(<%= authProviderIdentifierPascal %>Plugin, <%= authProviderIdentifier %>Config) // Be sure to update config/<%= authProviderIdentifier %> to configure your app!

  app.use(AuthPlugin, {
    default: '<%= authProviderIdentifier %>',
    providers: {
      <%= authProviderIdentifier %>: {
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
