/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:08:31 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:08:31 
 */

import { combineReducers } from 'redux'
import firstReducer from './firstReducer.js'
const rootReducer = combineReducers({
    firstState:firstReducer
})

export default rootReducer