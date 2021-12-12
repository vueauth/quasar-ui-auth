const answeredFirebase = require('./answered.js')('@vueauth/firebase')

module.exports = [
  // {
  //   when: answeredFirebase,
  //   type: 'editor',
  //   name: 'firebase_config',
  //   message: 'Paste your firebase credentials'
  // },
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
          composable: 'useIdentityPasswordRegister',
        },
      },
      {
        name: 'Identifier password login (e.g. email password)',
        value: {
          id: 'identityPassword:login',
          composable: 'useIdentityPasswordLogin',
        },
      },
      {
        name: 'Logout',
        value: {
          id: 'identityPassword:logout',
          composable: 'useIdentityPasswordLogout',
        },
      },
      {
        name: 'Facebook Popup Auth',
        value: {
          id: 'popup:facebook',
          composable: 'useFacebookPopupAuth',
        },
      },
      {
        name: 'Twitter Popup Auth',
        value: {
          id: 'popup:twitter',
          composable: 'useTwitterPopupAuth',
        },
      },
      {
        name: 'Github Popup Auth',
        value: {
          id: 'popup:github',
          composable: 'useGithubPopupAuth',
        },
      },
      {
        name: 'Google Popup Auth',
        value: {
          id: 'popup:google',
          composable: 'useGooglePopupAuth',
        },
      },
    ],
  },
]
