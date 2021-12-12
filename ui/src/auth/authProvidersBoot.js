import { boot } from 'quasar/wrappers'
import { AuthPlugin } from 'auth-composables'
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
  app.use(FirebasePlugin, {
    credentials: {},  // 👈 Replace this object with your 🔥firebase credentials
  })

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