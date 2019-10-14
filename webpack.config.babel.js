import path from 'path'

import defaultSourceMapping from './config/webpack/plugins/sourcemaps'
import postCSSPipeline from './config/webpack/plugins/postCSSPipeline'
import miniCSSExtract from './config/webpack/plugins/miniCSSExtract'
import styleRules from './config/webpack/module.rules/styleRules'
import babelRules from './config/webpack/module.rules/babelRules'
import uglify from './config/webpack/optimization.minimizer/uglify'
import {
    entry,
    bin,
    cwd,
    rel,
    filename
} from './config/constants'

export default {
    mode: process.env.NODE_ENV,
    entry,
    output: {
        filename: `${filename}.js`,
        path: path.resolve(__dirname, `${cwd}${bin}/`),
        publicPath: `${rel}${bin}/`
    },
    optimization: {
        minimizer: [
            uglify
        ]
    },
    devtool: false, // defaultSourceMapping uses plugins for this
    plugins: [
        defaultSourceMapping,
        miniCSSExtract,
        postCSSPipeline
    ],
    module: {
        rules: [
            babelRules,
            styleRules
        ]
    },
    resolveLoader: {
        alias: {
            'debugger-loader$': path.join(
                __dirname, './config/webpack/loaders/debugger.js'
            ),
            'react-dom': '@hot-loader/react-dom'
        }
    }
}
