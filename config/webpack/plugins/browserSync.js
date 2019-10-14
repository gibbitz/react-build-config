import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import config from 'config'

import {
    publicPort,
    defaultProxies,
    host,
    dist
} from '../../constants'
import browserSyncProxyMiddleware from '../../nodejs/browserSyncProxyMiddleware.babel'

const proxyConfig = config.get('proxy')

export default (
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        host,
        port: publicPort,
        // re-serve what webpack dev server has served
        // proxy: `http://${host}:${proxiedPort}/`
        server: {
            baseDir: dist,
            middleware: [
                ...browserSyncProxyMiddleware(proxyConfig, defaultProxies)
            ]
        }
    },
    {
        reload: false
    })
)
