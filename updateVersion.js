const fs = require('fs')
const path = require('path')
const package = require('./package.json')
const versionFile = require('./assets/static/version.json')
const versionFilePath = './assets/static/version.json'

versionFile.version = package.version

fs.unlinkSync(path.resolve(versionFilePath))
fs.writeFileSync(path.resolve(versionFilePath), JSON.stringify(versionFile))
