const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const writeCodeOwners = (codeOwner, jiraTeam) => {
    const contents = `# JiraTeam(${jiraTeam})\n# Global owners\n*      @ExpressScripts/${codeOwner}`
    fs.writeFileSync('CODEOWNERS', contents)
    console.log(chalk.hex('#593')(`    ${path.resolve(process.cwd())}/CODEOWNERS -- written!`))
}

const writeProxyConfig = (proxyPath, remoteServer) => {
    const proxyConfig = {
        localPath: proxyPath,
        remoteServer
    }
    const filePath = path.resolve(__dirname, '../config/proxy-config.js')
    const contents = `export default [${JSON.stringify(proxyConfig, null, 4)}]`
    fs.writeFileSync(filePath, contents)
    console.log(chalk.hex('#593')(`    ${filePath} -- written!`))
}

const writeReadme = (projectTitle, description) => {
    const readMePath = path.join(process.cwd(), 'README.md')
    const contents = `
# ${projectTitle}
## description
${description}
`
    if (!fs.existsSync(readMePath)) {
        fs.writeFileSync(readMePath, contents)
        console.log(chalk.hex('#593')(`    ${readMePath} -- written!`))
    }
}

module.exports = {
    writeCodeOwners,
    writeProxyConfig,
    writeReadme
}
