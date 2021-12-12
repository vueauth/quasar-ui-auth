import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@vueauth/core'
import firebaseConfig from 'app/config/firebase-config'
import supabaseConfig from 'app/config/supabase-config'
import {
  FirebasePlugin,
  useIdentityPasswordRegister as useFirebaseIdentityPasswordRegister,
  useIdentityPasswordLogin as useFirebaseIdentityPasswordLogin,
  useIdentityPasswordLogout as useFirebaseIdentityPasswordLogout,
  useUnauthenticatedRedirector as useFirebaseUnauthenticatedRedirector,
  useAuthRedirector as useFirebaseAuthRedirector,
  useHandlesErrors as useFirebaseHandlesErrors,
  useAuthState as useFirebaseAuthState,
  useAuthenticatedRedirector as useFirebaseAuthenticatedRedirector,
  useFetchUser as useFirebaseFetchUser,
  usePasswordResetViaEmail as useFirebasePasswordResetViaEmail,
  useUpdatePassword as useFirebaseUpdatePassword,
} from '@vueauth/firebase'
import {
  SanctumPlugin,
  useIdentityPasswordRegister as useSanctumIdentityPasswordRegister,
  useIdentityPasswordLogin as useSanctumIdentityPasswordLogin,
  useIdentityPasswordLogout as useSanctumIdentityPasswordLogout,
  useUnauthenticatedRedirector as useSanctumUnauthenticatedRedirector,
  useAuthRedirector as useSanctumAuthRedirector,
  useHandlesErrors as useSanctumHandlesErrors,
  useAuthState as useSanctumAuthState,
  useAuthenticatedRedirector as useSanctumAuthenticatedRedirector,
  useFetchUser as useSanctumFetchUser,
  usePasswordResetViaEmail as useSupabaseSanctumResetViaEmail,
  useUpdatePassword as useSanctumUpdatePassword,
} from '@vueauth/sanctum'
import {
  SupabasePlugin,
  useIdentityPasswordRegister as useSupabaseIdentityPasswordRegister,
  useIdentityPasswordLogin as useSupabaseIdentityPasswordLogin,
  useIdentityPasswordLogout as useSupabaseIdentityPasswordLogout,
  useUnauthenticatedRedirector as useSupabaseUnauthenticatedRedirector,
  useAuthRedirector as useSupabaseAuthRedirector,
  useHandlesErrors as useSupabaseHandlesErrors,
  useAuthState as useSupabaseAuthState,
  useAuthenticatedRedirector as useSupabaseAuthenticatedRedirector,
  useFetchUser as useSupabaseFetchUser,
  usePasswordResetViaEmail as useSupabasePasswordResetViaEmail,
  useUpdatePassword as useSupabaseUpdatePassword,
} from '@vueauth/supabase'

export default boot(({ app }) => {
  app.use(FirebasePlugin, firebaseConfig)
  app.use(SanctumPlugin)
  app.use(SupabasePlugin, supabaseConfig)

  app.use(AuthPlugin, {
    default: 'firebase',
    providers: {
      firebase: {
        features: {
          'identityPassword:register': useFirebaseIdentityPasswordRegister,
          'identityPassword:login': useFirebaseIdentityPasswordLogin,
          'identityPassword:logout': useFirebaseIdentityPasswordLogout,
          unauthenticatedRedirector: useFirebaseUnauthenticatedRedirector,
          authenticatedRedirector: useFirebaseAuthenticatedRedirector,
          errorHandler: useFirebaseHandlesErrors,
          fetchUser: useFirebaseFetchUser,
          authState: useFirebaseAuthState,
          authRedirector: useFirebaseAuthRedirector,
          passwordResetViaEmail: useFirebasePasswordResetViaEmail,
          updatePassword: useFirebaseUpdatePassword,
        },
      },
      sanctum: {
        features: {
          'identityPassword:register': useSanctumIdentityPasswordRegister,
          'identityPassword:login': useSanctumIdentityPasswordLogin,
          'identityPassword:logout': useSanctumIdentityPasswordLogout,
          unauthenticatedRedirector: useSanctumUnauthenticatedRedirector,
          authenticatedRedirector: useSanctumAuthenticatedRedirector,
          errorHandler: useSanctumHandlesErrors,
          fetchUser: useSanctumFetchUser,
          authState: useSanctumAuthState,
          authRedirector: useSanctumAuthRedirector,
          passwordResetViaEmail: useSupabaseSanctumResetViaEmail,
          updatePassword: useSanctumUpdatePassword,
        },
      },
      supabase: {
        features: {
          'identityPassword:register': useSupabaseIdentityPasswordRegister,
          'identityPassword:login': useSupabaseIdentityPasswordLogin,
          'identityPassword:logout': useSupabaseIdentityPasswordLogout,
          unauthenticatedRedirector: useSupabaseUnauthenticatedRedirector,
          authenticatedRedirector: useSupabaseAuthenticatedRedirector,
          errorHandler: useSupabaseHandlesErrors,
          fetchUser: useSupabaseFetchUser,
          authState: useSupabaseAuthState,
          authRedirector: useSupabaseAuthRedirector,
          passwordResetViaEmail: useSupabasePasswordResetViaEmail,
          updatePassword: useSupabaseUpdatePassword,
        },
      },
    },
  })
})
