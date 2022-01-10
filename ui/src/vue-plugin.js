import authenticateRoutes from './authenticateRoutes'

// eslint-disable-next-line no-undef
const version = __UI_VERSION__

function install (app, config) {
  app.provide('auth-default', config.authProvider)
}

export {
  version,
  authenticateRoutes,

  install
}
