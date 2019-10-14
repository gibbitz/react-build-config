import BrowserSync from 'browser-sync'
import webpack from 'webpack'
import config from 'config'

import browserSyncProxyMiddleware from './browserSyncProxyMiddleware.babel'
import devWebPackConfig from '../../webpack.config.babel'
import { host, publicPort, dist } from '../constants'

const proxyConfig = config.get('proxy')
const browserSync = BrowserSync.create('cold-server')
const webPackColdConfig = { ...devWebPackConfig, watch: true }
const compiler = webpack(webPackColdConfig)

const server = () => {
    compiler.watch({}, () => {
        browserSync.reload()
    })
    browserSync.init({
        // browse to http://localhost:3000/ during development,
        host,
        port: publicPort,
        files: [`**${dist}/**.css`, `**${dist}/**.js`],
        server: {
            baseDir: `${dist}`,
            middleware: [
                ...browserSyncProxyMiddleware(proxyConfig)
            ]
        }
    })
}

export const runColdServer = server

export default server
