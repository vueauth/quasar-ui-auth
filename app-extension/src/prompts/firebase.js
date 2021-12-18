const answeredFirebase = require('./answered.js')('@vueauth/firebase')

module.exports = [
  {
    when: answeredFirebase,
    type: 'checkbox',
    name: 'features',
    message: 'Select Auth Features',
    choices: [
      {
        name: 'Identifier password Register (e.g. email password)',
        value: {
          id: 'identityPassword:register',
          composable: 'useIdentityPasswordRegister'
        }
      },
      {
        name: 'Identifier password login (e.g. email password)',
        value: {
          id: 'identityPassword:login',
          composable: 'useIdentityPasswordLogin'
        }
      },
      {
        name: 'Logout',
        value: {
          id: 'identityPassword:logout',
          composable: 'useIdentityPasswordLogout'
        }
      }
    ]
  }
]
