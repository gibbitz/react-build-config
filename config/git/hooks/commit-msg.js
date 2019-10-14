const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const shell = command => cp.execSync(command, { encoding: 'utf8' })

const branches = shell('git branch')
const details = shell('git show')
const gitParams = shell('echo $HUSKY_GIT_PARAMS').split(' ')
const templatePath = path.resolve(__dirname, '../.git-commit-template')
let message = fs.readFileSync(gitParams[0].trim(), 'utf8')
const messageTemplate = fs.readFileSync(templatePath, 'utf8')
const author = /Author: (.*)/.exec(details)[1]
const branch = /\* (.*)/.exec(branches)[1]


console.log('Template Path: ', templatePath)
console.log('messagePath: ', gitParams[0].trim())
console.log('Branch: ', branch)
console.log('Author: ', author)
console.log('Message: \n', message)
console.log('Template: \n', messageTemplate)

fs.writeFileSync(gitParams[0].trim(), message)
message = fs.readFileSync(gitParams[0].trim(), 'utf8')
console.log('message index: ', message.indexOf(messageTemplate))
console.log((message.indexOf(messageTemplate) !== -1 ? 'Message Is Not Updated' : 'Message is Updated'))
if (message.indexOf(messageTemplate) !== -1 && false) {
    process.exit(1)
}
// process.exit(0)

process.exit(1)
