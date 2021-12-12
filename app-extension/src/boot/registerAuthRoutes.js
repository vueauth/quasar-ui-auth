import { boot } from 'quasar/wrappers'

export default boot(({ router }) => {
  router.addRoute('/', {
    name: 'auth.register',
    path: '/register',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/AuthIdentityPasswordRegisterPage.vue'),
  })

  router.addRoute('/', {
    name: 'auth.login',
    path: '/login',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/AuthIdentityPasswordLoginPage.vue'),
  })

  router.addRoute('/', {
    name: 'auth.requestPasswordReset',
    path: '/forgot-password',
    meta: { unauthOnly: true },
    component: () => import('src/auth/pages/AuthPasswordResetViaEmailPage.vue'),
  })

  router.addRoute('/', {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('src/pages/UserDashboard.vue'),
        meta: { authOnly: true },
      },
    ],
  })
})
