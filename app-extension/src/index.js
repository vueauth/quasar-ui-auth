function extendConf (conf, api) {
  conf.boot.push('../auth/boot/registerAuthRoutes.js')
  conf.boot.push('../auth/boot/authProvidersBoot.js')

  // make sure app extension files & ui package gets transpiled
  conf.build.transpileDependencies.push(/quasar-app-extension-model-components[\\/]src/)

  conf.framework.plugins.push('Loading')
}

module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')
  api.compatibleWith('@quasar/app', '^3.0.0')

  // Uncomment the line below if you provide a JSON API for your component
  // api.registerDescribeApi('AuthRegisterForm', '~quasar-ui-auth/src/components/AuthRegisterForm.json')

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf, api)

  // Add webpack alias for auth
  api.chainWebpack((chain) => {
    chain.resolve.alias.set('auth', api.resolve.src('auth'))
  })
}
