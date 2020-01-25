import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types'

export default function article(state = [], action) {
    switch(action.type) {
        case ADD_ARTICLE:
            return state.concat(action.payload)
        case REMOVE_ARTICLE:
            return state.slice(0, state.length -1)
            
        default: 
            return state
    }
};