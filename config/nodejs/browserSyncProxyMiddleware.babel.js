import proxyMiddleware from 'http-proxy-middleware'

const defaultOpts = {
    secure: false, // proxied certs can't be trusted
    changeOrigin: true, // host headers are usually expected
    logLevel: 'debug' // this proxy is for localhost
}

// does this support cookies and redirects?
export default (proxies = [], baseProxies = []) => proxies
    .concat(baseProxies).map(
        ({
            localPath,
            remoteServer: target,
            pathRewrites: pathRewrite,
            appendPath
        }) => proxyMiddleware(
            localPath,
            {
                ...defaultOpts,
                target,
                pathRewrite: (appendPath === false // default behavior is 'true'
                    ? {
                        ...pathRewrite,
                        [localPath]: '/'
                    }
                    : pathRewrite
                )

            }
        )
    )
