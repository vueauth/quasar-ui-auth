const { copySync, removeSync } = require('fs-extra');

console.log(` ⬆️  Copying template files...\n`)

removeSync('../app-extension/src/templates')

copySync('src/auth', '../app-extension/src/templates/src/auth')