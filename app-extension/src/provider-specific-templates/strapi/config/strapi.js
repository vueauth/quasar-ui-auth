import { makeFetchRequester, useVueUseAuthState, useLocalStorageTokenRepo } from '@vueauth/strapi'

export default {
  /**
   * By default, Quasar Auth will make requests using Fetch.
   * If you want to use a different library for backend
   * requests you can provide an implemntation here.
   */
  requester: makeFetchRequester,

  /**
   * Quasar Auth uses "createGlobalState" from "vueuse" to store
   * the user. Feel free to use your own by implementing
   * the UseAuthState contract and passing it below.
   */
  useAuthState: useVueUseAuthState,

  /**
   * When making requests, strapi uses the repo below to get
   * the 'Bearer' token. By default we use localStorage
   * yet you can provide your own implementation.
   */
  useTokenRepo: useLocalStorageTokenRepo,

  /**
   * You may want to configure the endpoints Sanctum uses. We use
   * sensible defaults aligned with fortify, but you can of
   * course configure your own.
   */
  endpoints: {
    // login: '/login',
    // register: '/register',
    // logout: '/logout',
    // getUser: 'api/user',
    // csrfCookie: '/strapi/csrf-cookie',
    // resetPassword: '/reset-password',
    // forgotPassword: '/forgot-password',
    // password: '/user/password'
  }
}
