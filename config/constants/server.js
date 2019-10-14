export const host = 'localhost'
export const publicDir = 'public'
export const publicPort = 3000
export const proxiedPort = 3030
export const styleguidePort = 6060

export const defaultProxies = [{
    localPath: '/',
    remoteServer: `http://${host}:${proxiedPort}/`
}]
