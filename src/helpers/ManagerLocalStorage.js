export class ManagerLocalStorage {
    property
    constructor (property = '') {
        this.property = property
    }

    duplicate (lista = [], item = {}) {
        return lista.find(ele => ele.username.trim().toUpperCase() === item.username.trim().toUpperCase() ||
            ele.uid === item.uid)
    }

    async add (data) {
        let datalocalStorage = JSON.parse(localStorage.getItem(this.property)) || null
        if (datalocalStorage === null) {
            localStorage.setItem(this.property, JSON.stringify([data]))
            return { ok: true }
        }
        if (this.duplicate(datalocalStorage, data)) {
            return { ok: false, message: 'El usuario ya existe' }
        }
        datalocalStorage = [data, ...datalocalStorage]
        localStorage.setItem(this.property, JSON.stringify(datalocalStorage))
        return { ok: true }
    }
}
