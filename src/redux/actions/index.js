//action 类型（方法）
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'
export const UPDATE_PW = 'UPDATE_PW'
//创建action函数
export function updateAccount(value) {
    return {
        type: UPDATE_ACCOUNT,
        value
    }
}
export function updatePW(value) {
    return {
        type: UPDATE_PW,
        value
    }
}