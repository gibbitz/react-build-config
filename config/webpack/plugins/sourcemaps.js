import webpack from 'webpack'

import {
    NODE_ENV,
    ENV,
    host,
    publicPort
} from '../../constants'

const isProd = NODE_ENV === ENV.PROD

export default (
    isProd
        ? new webpack.SourceMapDevToolPlugin({
            // this is the url of our local sourcemap server
            // -- when NODE_ENV is prod, sourcemaps will be emitted that can be used locally
            publicPath: `http://${host}:${publicPort}/`,
            filename: '[file].map'
        })
        : new webpack.EvalSourceMapDevToolPlugin({
            // this is the equivalent of cheap-eval-source-map
            columns: false
        })
)
