module.exports = function () {
  return [
    {
      name: 'authProvider',
      type: 'list',
      message: 'Select an auth provider',
      choices: [
        {
          name: 'Laravel Sanctum',
          value: {
            identifier: 'sanctum',
            packageName: '@vueauth/sanctum'
          }
        },
        {
          name: 'Firebase',
          value: {
            identifier: 'firebase',
            packageName: '@vueauth/firebase'
          }
        },
        {
          name: 'Supabase',
          value: {
            identifier: 'supabase',
            packageName: '@vueauth/supabase'
          }
        }
      ]
    }
  ]
}
