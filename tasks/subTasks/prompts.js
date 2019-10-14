module.exports = {
    questions: [
        {
            name: 'author',
            type: 'input',
            default: 'Guy Incognito',
            message: 'Who are you?'
        },
        {
            name: 'name',
            type: 'input',
            default: 'Please-Enter',
            message: 'What is the name of your project?',
            validate: (projectName) => (
                !/[^[\w[`'˜=+#ˆ@$&\-_.(){};[\]]/.test(projectName)
                || 'Please make sure your project name can work as a node module.'
            )
        },
        {
            name: 'description',
            type: 'input',
            default: 'Please enter',
            message: 'Describe your project?'
        },
        {
            name: 'keywords',
            type: 'input',
            default: 'Reactjs',
            message: 'Please enter a comma separated list of keywords'
        },
        {
            name: 'version',
            type: 'input',
            default: '1.0.0',
            message: 'What version would you like to use?'
        },
        {
            name: 'url',
            type: 'input',
            default: 'NA',
            message: 'What is your repository URL?'
        },
        {
            name: 'codeOwner',
            type: 'input',
            default: '',
            message: 'What is your git username (for CODEOWNERS)?'
        },
        {
            name: 'proxyPath',
            type: 'input',
            default: '',
            message: 'Where are your services proxied?'
        },
        {
            name: 'remoteServer',
            type: 'input',
            message: 'What is your remote services address?'
        }
    ]
}
