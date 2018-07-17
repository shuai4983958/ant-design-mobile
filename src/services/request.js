/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:07:25 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:07:25 
 */

import fetch from 'isomorphic-fetch'

export default new class ApiUtil {

    fetch({ apiUrl, body, method='get', withAuthToken=false, host=null }) {
        const _method = method.toUpperCase()

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        }
        //let auth = store.getState().auth
        //if(auth && auth.auth.orgName && auth.auth.orgName.length > 0) {
        //    withAuthToken = false
        //    headers['orgname'] = auth.auth.orgName
        //}
        if (withAuthToken) {
            let auth = headers['Authorization'] = "自定义头部"
        }

        let settings = {
            method: _method,
            headers: headers
        }

        if (!['get', 'head'].includes(_method) && body) {
            settings['body'] = JSON.stringify(body)
        }

        return fetch(apiUrl, settings).then(response => {
            let json = response.json()
            return json.then(json => {
                return {json, response}
            }).then(({ json, response }) => {
                if (!response.ok) {
                    return Promise.reject(json)
                }
                return json
            }).catch(e => {
                if (response.ok) {
                    return {}
                } else {
                    return Promise.reject(e)
                }
            })
        })
    }
}()