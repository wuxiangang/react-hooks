class Storage {
    getItem(key: S, type?: S) {
        try {
            const val = localStorage.getItem(key)
            switch (type) {
                case 'json':
                    return JSON.parse(val)
                case 'number':
                    return Number(val)
                case 'boolen':
                    return !!val
                default:
                    return val
            }
        } catch(e) {}
        return null
    }
    setItem(params: anyObject) {
        try {
            Object.keys(params).forEach(key => {
                const val = params[key]
                localStorage[key] = (val && typeof val === 'object') ? JSON.stringify(val) : val
            })
        } catch(e) {}
    }
    removeItem(key: S) {
        try {
            localStorage.removeItem(key)
        } catch(e) {}
    }
    clear() {
        try {
            localStorage.clear()
        } catch(e) {}
    }
}

export default new Storage