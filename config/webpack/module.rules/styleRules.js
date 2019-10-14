import autoprefixer from 'autoprefixer'
import discardDuplicates from 'postcss-discard-duplicates'
import mergeRules from 'postcss-merge-rules'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'

import url from 'postcss-url'

import { RELOAD, HOT, urlOptions } from '../../constants'

const devOutputLoader = {
    loader: 'style-loader',
    options: {
        singleton: false, // currently breaks sourcemaps
        sourceMap: true
    }
}

const prodOutputLoader = {
    loader: MiniCSSExtractPlugin.loader,
    options: { sourceMap: true }
}

export default {
    test: /\.scss$/,
    use: [
        (RELOAD === HOT
            ? devOutputLoader
            : prodOutputLoader
        ),
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                plugins: () => ([
                    discardDuplicates(),
                    mergeRules(),
                    url(urlOptions),
                    autoprefixer()
                ])
            }
        },
        // {
        //     loader: 'debugger-loader'
        // },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true // ,
                // outfile: 'app.css.map'
            }
        }
    ]
}
