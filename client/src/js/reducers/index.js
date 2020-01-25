import { ADD_ARTICLE, REMOVE_ARTICLE } from '../constants/action-types'
import { combineReducers } from 'redux'
import  article  from './article'
import  auth  from './auth'

const rootReducer = combineReducers({
    article,
    auth
})

export default rootReducer;