const answeredSanctum = require('./answered.js')('@vueauth/sanctum')

module.exports = [
  {
    when: answeredSanctum,
    type: 'checkbox',
    name: 'features',
    message: 'Select Auth Features',
    choices: [
      {
        name: 'Identifier password login (e.g. email password)',
        value: 'authProvider:identityPassword:login'
      },
      {
        name: 'Identifier password Register (e.g. email password)',
        value: 'authProvider:identityPassword:register'
      },
      {
        name: 'Logout',
        value: 'authProvider:logout'
      }
    ]
  }
]
