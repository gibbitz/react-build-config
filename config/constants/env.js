export const { NODE_ENV, RELOAD } = process.env
const { ...environmentVars } = process.env
export const ENV_KEYS = Object.keys(environmentVars)
export const ENV = {
    DEV: 'development',
    QA: 'qa',
    PROD: 'production'
}
export const HOT = 'hot'
