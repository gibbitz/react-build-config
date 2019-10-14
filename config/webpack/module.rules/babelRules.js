import babelrc from '../../babelrc'

export default {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'react-hot-loader/webpack'
        },
        {
            loader: 'babel-loader',
            options: babelrc
        }
    ]
}
