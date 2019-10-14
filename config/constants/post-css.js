import path from 'path'

export const urlOptions = [{
    filter: '**/**.woff',
    encodeType: 'base64',
    basePath: [path.resolve('./node_modules')],
    url: 'inline'
}]
