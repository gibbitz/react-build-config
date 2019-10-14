const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const chalk = require('chalk')
const glob = require('glob')

const copyFiles = (filePatterns, targetDir = './') => {
    const timeLabel = chalk.hex('#0A0')('Copied Files')
    console.log(chalk.hex('#999')('Copying Files...'))
    console.time(timeLabel)
    const buildModulePath = path.resolve(__dirname, '../')
    const targetPath = path.resolve(process.cwd(), targetDir)
    const copyPatterns = typeof filePatterns === 'string' ? [filePatterns] : filePatterns

    const findFiles = patterns => patterns.reduce(
        (accumulator, pattern) => (
            accumulator.concat(
                glob.sync(pattern, {
                    dot: true,
                    ignore: 'node_modules/**',
                    cwd: buildModulePath
                })
            )
        ),
        []
    )

    const getPaths = (file, sourcePath, targetPath) => {
        const toFile = path.resolve(process.cwd(), `${targetPath}/${file}`)
        return {
            fromFile: path.resolve(sourcePath, file),
            toPath: path.dirname(toFile),
            toFile
        }
    }

    const copyFile = (fromFile, toFile) => {
        if (fs.existsSync(fromFile)) {
            fs.copyFileSync(fromFile, toFile)
            console.log(
                `    ${chalk.hex('#593')(fromFile)} ${chalk.hex('#555')('copied to:')} ${chalk.hex('#9C7')(toFile)}!`
            )
        } else {
            console.log(chalk.hex('#593')(`    ${fromFile} ${chalk.hex('#953')('can\'t be found!')}`))
        }
    }

    findFiles(copyPatterns).forEach((file, index, queue) => {
        const { fromFile, toFile, toPath } = getPaths(file, buildModulePath, targetPath)
        if (!fs.existsSync(toPath)) {
            mkdirp.sync(toPath)
        }
        copyFile(fromFile, toFile)
        if (index === queue.length - 1) {
            console.timeEnd(timeLabel)
        }
    })
}

module.exports = { copyFiles }
