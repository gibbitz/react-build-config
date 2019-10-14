const fs = require('fs')
const path = require('path')
const merge = require('deepmerge')
const chalk = require('chalk')

const modulePackage = require('../package.json')

let parentPackage
try {
    const parentPackagePath = path.join(process.cwd(), 'package.json')
    parentPackage = JSON.parse(fs.readFileSync(parentPackagePath))
} catch (err) {
    parentPackage = {}
}

const mergePackage = (promptPackage) => {
    const timeLabel = chalk.hex('#0A0')('Updated package.txt')
    console.log(chalk.hex('#999')('Updating Package JSON...'))
    console.time(timeLabel)
    const {
        devDependencies,
        dependencies,
        repository,
        ...safeModulePackage
    } = modulePackage
    safeModulePackage.devDependencies = dependencies
    const outputPackage = merge.all([safeModulePackage, parentPackage, promptPackage])
    outputPackage.keywords = outputPackage.keywords ? [...new Set(outputPackage.keywords)] : []
    fs.writeFileSync(
        'package.json',
        JSON.stringify(outputPackage, null, 4)
    )
    console.timeEnd(timeLabel)
}

module.exports = { mergePackage }
