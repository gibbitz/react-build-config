import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

const minimizer = new UglifyJsPlugin({
    uglifyOptions: {
        warnings: false,
        parse: {},
        compress: {},
        mangle: true,
        output: null,
        toplevel: false,
        nameCache: null,
        ie8: false,
        keep_fnames: false
    },
    sourceMap: true
})

export default minimizer
