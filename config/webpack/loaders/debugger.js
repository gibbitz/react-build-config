import { getOptions } from 'loader-utils';

export default (() => {
    let callcount = 0
    const loader = function loader(source, map) {
        callcount++
        const meta = getOptions(this)
        const callback = this.async()
        console.log('Total Files >>>>>>>>>>>>>>>: \n', callcount)
        console.log('source >>>>>>>>>>>>>>>: \n', source)
        console.log('map >>>>>>>>>>>>>>>: \n', map)
        // console.log('options >>>>>>>>>>>>>>>: \n', getOptions(this))
        // console.log('self context: >>>>>>>>>>>>>>>>>>>>>>>\n', Object.keys(this))
        callback(null, source, map, meta)
        return undefined
    }
    return loader
})()
