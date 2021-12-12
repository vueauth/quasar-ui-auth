/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendConf (conf, api) {
  // register our boot file
  conf.boot.push('~quasar-app-extension-auth/src/boot/registerAuthRoutes.js')
  conf.boot.push('../auth/authProvidersBoot.js')

  // make sure app extension files & ui package gets transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-auth[\\/]src/)

  conf.framework.plugins.push('Loading')
}

module.exports = function (api) {
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of "@quasar/app" CLI
  api.compatibleWith('quasar', '^2.0.0')
  api.compatibleWith('@quasar/app', '^3.0.0')

  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('AuthRegisterForm', '~quasar-ui-auth/src/components/AuthRegisterForm.json')

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf, api)

  // Add webpack alias for auth-actions
  api.chainWebpack((chain) => {
    console.log(api.resolve.src('auth'))
    chain.resolve.alias.set('auth', api.resolve.src('auth'))
  })
}
