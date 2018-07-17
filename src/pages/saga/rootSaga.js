/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:08:17 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:08:17 
 */

import { take, put, call, fork, race, cancelled } from 'redux-saga/effects'
import { delay, takeEvery, eventChannel, END } from 'redux-saga'
import * as firstSaga from './firstSaga.js'

export default function* rootSaga() {
    // 异步
    yield takeEvery('GET_FIRST_ACTION_REQUEST', mapPayload(firstSaga.firstRequest))
}

/**
 * 提取action.payload
 * saga层直接接触参数,便于saga复用
 * @param func
 * @returns {mapFunc}
 */
function mapPayload(func) {
    return function* mapFunc(action) {
        return yield func.call(this, action.payload)
    }
}