/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:08:27 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:08:27 
 */
const initFistState = {
    count:0,
    fetch_state:""
}
export default function firstReducer(state=initFistState, action) {
    switch (action.type) {
        case "CLICK_ACTION":
            return Object.assign({},state,{ count: state.count + 1 })
        case "GET_FIRST_ACTION_REQUEST":
            return Object.assign({},state,{ fetch_state: "开始请求" })
        case "GET_FIRST_ACTION_RESPONSE":
            return Object.assign({},state,{ fetch_state: "请求成功" })
        case "GET_FIRST_ACTION_FAILED":
            return Object.assign({},state,{ fetch_state: "请求失败" })
        default:
            return state
    }
}