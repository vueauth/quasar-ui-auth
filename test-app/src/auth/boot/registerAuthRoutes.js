import { boot } from 'quasar/wrappers'

export default boot(({ router }) => {
  router.addRoute('/', {
    name: 'auth.register',
    path: '/register',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/IdentityPasswordRegisterPage.vue')
  })

  router.addRoute('/', {
    name: 'auth.login',
    path: '/login',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/IdentityPasswordLoginPage.vue')
  })

  router.addRoute('/', {
    name: 'auth.requestPasswordReset',
    path: '/forgot-password',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/PasswordResetRequestViaEmailPage.vue')
  })

  router.addRoute('/', {
    name: 'auth.resetPassword',
    path: '/password-reset',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/PasswordResetViaEmailPage.vue')
  })

  router.addRoute('/', {
    path: '/dashboard',
    component: () => import('layouts/AuthenticatedLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('src/pages/UserDashboard.vue'),
        meta: { authOnly: true }
      }
    ]
  })
})
