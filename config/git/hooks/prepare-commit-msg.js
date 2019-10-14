const cp = require('child_process')
const fs = require('fs')

const shell = command => cp.execSync(command, { encoding: 'utf8' })

const branches = shell('git branch')
let initCommit = false
try {
    initCommit = shell('git status | grep "No commits yet"')
} catch (err) { /**/ }
console.log('initCommit: ', !!initCommit)
const author = initCommit || shell('git show --pretty=format:"%an --summary"')
const gitParams = process.env.HUSKY_GIT_PARAMS.split(' ')
const message = gitParams[0] && fs.readFileSync(gitParams[0], 'utf8')
const branch = initCommit || /\* (.*)/.exec(branches)[1]
const updatedMsg = initCommit ? message : `${message}
# footer added in hook ========================
Author: ${author}
Branch: ${branch}
`

// console.log('Branch: ', branch)
// console.log('Author: ', author)
// console.log('Params: ', gitParams)
// console.log('Message: \n', message)
// console.log('Updated Message: \n', updatedMsg)
fs.writeFileSync(gitParams[0], updatedMsg)
