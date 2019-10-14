import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import merge from 'webpack-merge'

import {
    proxiedPort,
    NODE_ENV,
    ENV
} from '../constants'
import devWebPackConfig from '../../webpack.config.babel'
import serverWebPackConfig from '../webpack/webpack.devServer.config.babel'

const { watch, ...prodWebPackConfig } = devWebPackConfig
const webPackEnvConfig = NODE_ENV === ENV.PROD
    ? prodWebPackConfig
    : devWebPackConfig
const serverConfig = merge(webPackEnvConfig, serverWebPackConfig)
const compiler = webpack(serverConfig)

// const handleBuild = (callback) =>

const webPackDevServer = () => {

    const {
        host, port, color, ...devServerConfig
    } = serverConfig.devServer

    // hand-off to dev server to watch
    const callback = () => {
        new WebpackDevServer(compiler, devServerConfig)
            .listen(
                proxiedPort,
                host
            );
    }

    // kick off with initial real webpack compilation
    compiler.run((err) => {
        if (err) {
            console.log(err)
            throw new Error('webpack-dev-server')
        }

        // Server listening
        console.log(
            '[webpack-dev-server]',
            `http://${host}:${proxiedPort}/webpack-dev-server/index.html`
        )

        callback()
    })
}

export const runWebpackServer = webPackDevServer

export default webPackDevServer
