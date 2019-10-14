import { HotModuleReplacementPlugin } from 'webpack'
import browserSyncPlugin from './plugins/browserSync'
import {
    proxiedPort,
    host
} from '../constants'

export default {
    mode: 'development',
    entry: [
        'webpack/hot/dev-server',
        `webpack-dev-server/client?http://${host}:${proxiedPort}/`
    ],
    output: {
        futureEmitAssets: false
    },
    devServer: {
        host,
        port: proxiedPort,
        contentBase: './dist',
        publicPath: '/dist/',
        inline: true,
        hot: true,
        color: true
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        browserSyncPlugin
    ]
}
