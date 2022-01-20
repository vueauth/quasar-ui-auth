const providerDependencies = require('./provider-dependencies')

module.exports = function (api) {
  api.render('./templates', {
    authProviderPackage: api.prompts.authProvider.packageName,
    authProviderIdentifier: api.prompts.authProvider.identifier,
    authProviderIdentifierPascal: capitalizeFirstLetter(api.prompts.authProvider.identifier)
  })
  api.render('./provider-specific-templates/' + api.prompts.authProvider.identifier)

  const dependencies = providerDependencies[api.prompts.authProvider.identifier]

  if (dependencies) {
    api.extendPackageJson(dependencies)
  }
}

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
