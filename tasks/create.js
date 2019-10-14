const { writeBanner } = require('./subTasks/banner')
const { writeCodeOwners, writeProxyConfig, writeReadme } = require('./subTasks/write')
const { copyFiles } = require('./subTasks/copy')
const { userInterrogation } = require('./subTasks/interrogate')
const { mergePackage } = require('./subTasks/merge')
const install = require('./subTasks/install')
const configureGit = require('./subTasks/configureGit')

const copyPatterns = [
    '.*[^.DS_Store]',
    '.gitignore',
    'config/**',
    // 'config/nodejs/WebPackDevServerRunner.js',
    'webpack.config.babel.js'
]

module.exports = async () => {

    writeBanner()

    const {
        promptPackage,
        codeOwner,
        jiraTeam,
        proxyPath,
        remoteServer
    } = await userInterrogation()

    const { name, description } = promptPackage

    mergePackage(promptPackage)

    writeCodeOwners(codeOwner, jiraTeam)

    writeProxyConfig(proxyPath, remoteServer)

    writeReadme(name, description)

    copyFiles(copyPatterns)

    configureGit()

    install()
}
