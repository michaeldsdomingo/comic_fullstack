import {LOGIN, LOGOUT} from '../constants/action-types'

export default function auth(state = {auth: false, admin: false}, action) {
    switch(action.type) {
        case LOGIN:
            console.log('login action')
            return Object.assign({}, state, {auth: true}, action.payload)
        case LOGOUT:
            return {auth: false}
        default:
            return state
    }
}