const inquirer = require('inquirer')
const { questions } = require('./prompts.js')

const userInterrogation = () => new Promise(async (resolve) => {
    const responses = await inquirer.prompt(questions)
    const {
        author,
        name,
        description,
        keywords,
        version,
        url
    } = responses

    resolve({
        ...responses,
        promptPackage: {
            name,
            version,
            description,
            keywords: keywords.split(','),
            repository: {
                type: 'git',
                url
            },
            author,
            license: 'UNLICENSED',
            private: 'true'
        }
    })
})

module.exports = { userInterrogation }
