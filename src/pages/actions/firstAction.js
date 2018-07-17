/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:08:35 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:08:35 
 */
export function getFistAction() {
    return {
        type:"GET_FIRST_ACTION_REQUEST",
        payload:null
    }
}

export function clickAction() {
    return {
        type:"CLICK_ACTION",
        payload:{}
    }
}