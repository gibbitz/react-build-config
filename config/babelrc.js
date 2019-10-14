import { ENV_KEYS } from './constants'

const plugins = [
    ['@babel/plugin-proposal-class-properties'],
    ['@babel/plugin-transform-react-jsx'],
    ['react-hot-loader/babel'],
    ['transform-inline-environment-variables',
        {
            include: ENV_KEYS
        }
    ]
]

const presets = [
    ['@babel/env']
]

export default { plugins, presets }
