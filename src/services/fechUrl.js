/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 10:35:27 
 * @Last Modified by: lvjingshuai
 * @Last Modified time: 2018-07-17 10:59:12
 */

import request from './request.js'
import {courseAPis} from './Apis';


export default new class fechUrl {

    /**
     * 测试异步接口
     * @returns {*}
     */
    firstRequest() {
        return request.fetch({apiUrl:courseAPis.mock})
    }
}()