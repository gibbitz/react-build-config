const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const cp = require('child_process')
const { copyFiles } = require('./copy')

const shell = command => cp.execSync(command, { encoding: 'utf8' })

const configureGit = () => {
    const gitHubGlob = '.github/**'
    const gitGlob = ['config/git/hooks/**.js', 'config/git/.git-commit-template', 'config/git/.gitconfig']
    const gitInitPath = path.resolve(process.cwd(), '.git')
    if (!fs.existsSync(gitInitPath)) {
        console.log(chalk.hex('#593')('initializing git'))
        shell('git init')
    }
    const gitConfigPath = path.relative(gitInitPath, './config/git/.gitconfig')
    console.log(chalk.hex('#593')('configuring git'))
    copyFiles(gitGlob)
    shell(`git config --local include.path ${gitConfigPath}`)
    console.log(chalk.hex('#593')('configuring gitHub'))
    // console.log(chalk.hex('#009')(process.cwd(), __dirname))
    copyFiles(gitHubGlob)
}

module.exports = configureGit
