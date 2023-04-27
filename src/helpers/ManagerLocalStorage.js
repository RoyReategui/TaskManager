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

    async search (user) {
        const datalocalStorage = JSON.parse(localStorage.getItem(this.property)) || null
        const objectMessage = {
            ok: false,
            message: 'Upps, Asegurese de estar registrado'
        }
        if (datalocalStorage === null) return objectMessage

        const userFlag = datalocalStorage.find(ele => ele.username.toUpperCase() === user.username.toUpperCase())
        if (!userFlag) return objectMessage
        if (user.password !== userFlag.password) return objectMessage

        const { username, uid } = userFlag
        return { ok: true, userFound: { username, uid } }
    }

    static updateItem (key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }

    static getItem (key) {
        return JSON.parse(localStorage.getItem(key)) || null
    }
}
