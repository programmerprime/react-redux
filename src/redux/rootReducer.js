import cakeReducers from './cake/cakeReducers'
import iceCreamReducers from './iceCream/iceCreamReducers'
import {combineReducers} from 'redux'
import userReducers from './user/userReducers'

const rootReducer = combineReducers({
    cake: cakeReducers,
    iceCream: iceCreamReducers,
    user: userReducers
})

export default rootReducer

