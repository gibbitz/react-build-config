export default [
    {
        localPath: '/api',
        remoteServer: 'http://localhost:8000/api',
        pathRewrites: {
            '^/test/api': '/'
        },
        appendPath: false
    },
    {
        localPath: '/api',
        remoteServer: 'http://localhost:8000/api'
    }
]
