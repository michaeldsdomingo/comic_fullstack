import { ADD_ARTICLE, REMOVE_ARTICLE, LOGIN, LOGOUT } from '../constants/action-types'

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload}
}

export function removeArticle() {
    return {type: REMOVE_ARTICLE}
}

export function login(payload) {
    return {type: LOGIN, payload}
}

export function logout() {
    return {type: LOGOUT}
}