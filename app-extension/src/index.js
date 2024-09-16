function extendConf (conf, api) {
  conf.boot.push('../auth/boot/registerAuthRoutes.js')
  conf.boot.push('../auth/boot/authProvidersBoot.js')

  // @quasar/app-vite does not need this
  if (api.hasVite !== true) {
    // make sure app extension files & ui package gets transpiled
    conf.build.transpileDependencies.push(
      /quasar-app-extension-model-components[\\/]src/
    )
  }
  conf.framework.plugins.push('Loading')
}

module.exports = function (api) {
  api.compatibleWith('quasar', '^2.0.0')

  if (api.hasVite === true) {
    api.compatibleWith('@quasar/app-vite', '^1.x || ^2.0.0-beta || ^2.x')
  } else {
    // api.hasWebpack === true
    api.compatibleWith('@quasar/app-webpack', '^3.0.0')
  }

  // We extend /quasar.conf.js
  api.extendQuasarConf(extendConf, api)

  if (api.hasVite === true) {
    // Add Vite alias for auth
    api.extendViteConf((viteConf) => {
      Object.assign(viteConf.resolve.alias, { auth: api.resolve.src('auth') })
    })
  } else {
    // Add webpack alias for auth
    api.chainWebpack((chain) => {
      chain.resolve.alias.set('auth', api.resolve.src('auth'))
    })
  }
}
