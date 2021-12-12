import { boot } from 'quasar/wrappers'
import { AuthPlugin } from '@vueauth/core'
<% if (authProviderIdentifier === 'firebase') { %>import firebaseConfig from 'app/config/firebase-config'<% } %>
import {
  <% if (authProviderIdentifier === 'firebase') { %>FirebasePlugin,<% } %>
  <% for (const feature of features) { %><%= feature.composable %>,
  <% } %>useUnauthenticatedRedirector,
  useAuthRedirector,
  useHandlesErrors,
  useAuthState,
  useAuthenticatedRedirector,
  useFetchUser,
} from '<%= authProviderPackage %>'

boot(({ app }) => {
  app.use(FirebasePlugin, firebaseConfig)
  app.use(FirebasePlugin, firebaseConfig)  // Be sure to update config/firebase-config with your credentials 🔥

  app.use(AuthPlugin, {
    defaultProvider: '<%= authProviderIdentifier %>',
    providers: {
      firebase: {
        features: {<% for (const feature of features) { %>
          '<%= feature.id %>': <%= feature.composable %>,<% } %>
          'unauthenticatedRedirector': useUnauthenticatedRedirector,
          'authenticatedRedirector': useAuthenticatedRedirector,
          'errorHandler': useHandlesErrors,
          'fetchUser': useFetchUser,
          'authState': useAuthState,
          'authRedirector': useAuthRedirector
        }
      }
    }
  })
})