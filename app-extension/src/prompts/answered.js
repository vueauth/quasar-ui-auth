module.exports = function answered (authProvider) {
  return (answers) => {
    return answers.authProvider.packageName === authProvider
  }
}
