import proxy from './proxy.config'

// node-config doesn't support '.babel' in the filename
// -- breaks export keyword
module.exports = {
    proxy
}
