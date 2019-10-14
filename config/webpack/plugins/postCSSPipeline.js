import PostCssPipelineWebpackPlugin from 'postcss-pipeline-webpack-plugin'
import discardDuplicates from 'postcss-discard-duplicates'
import mergeRules from 'postcss-merge-rules'
import csso from 'postcss-csso'
import autoprefixer from 'autoprefixer'
import url from 'postcss-url'

import { RELOAD, HOT, urlOptions } from '../../constants'

const plugin = RELOAD === HOT
    ? () => {}
    : new PostCssPipelineWebpackPlugin({
        pipeline: [
            csso({}),
            autoprefixer(),
            url(urlOptions),
            mergeRules(),
            discardDuplicates()
        ],
        map: {
            inline: true
        }
    })

export default plugin
