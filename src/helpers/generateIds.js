export const generaId = (entity = '') => entity.toLocaleLowerCase() + Date.now().toString(24).substring(4) + Math.random().toString(32).substring(2)
