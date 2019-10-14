import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import { RELOAD, HOT, filename } from '../../constants'

const plugin = RELOAD === HOT
    ? () => {}
    : new MiniCSSExtractPlugin({
        filename: `${filename}.css`
    })

export default plugin
