/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/InstallAPI.js
 */

module.exports = function (api) {
  api.render('./templates', {
    authProviderPackage: api.prompts.authProvider.packageName,
    authProviderIdentifier: api.prompts.authProvider.identifier,
    authProviderIdentifierPascal: capitalizeFirstLetter(api.prompts.authProvider.identifier)
  })
  api.render('./providerSpecificTemplates/' + api.prompts.authProvider.identifier)
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
