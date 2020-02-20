export function updateAccount(value) { 
    return {
        type: 'UPDATE_ACCOUNT',
        value
    }
}

export function updatePsW(value) {
    return {
        type: 'UPDATE_PASSWORK',
        value
    }
}
export function isLogin(value) {
    return {
        type: 'IS_LOGIN',
        value
    }
}