/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:08:13 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:08:13 
 */

import fechUrl from '../../services/fechUrl'
import { call, put } from 'redux-saga/effects'

export function* firstRequest() {
    try {
        const products = yield call(fechUrl.firstRequest)
        console.log('成功')
        yield put({ type: 'GET_FIRST_ACTION_RESPONSE', products })
    }
    catch(error) {
        console.log('失败')
        yield put({ type: 'GET_FIRST_ACTION_FAILED', error })
    }
}