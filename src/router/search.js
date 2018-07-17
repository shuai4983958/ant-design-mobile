/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:07:47 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:07:47 
 */
import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'search',
            path: '/search',
            component: Loadable({
                loader: () => import('pages/Search/Search'),
                loading: () => <div />
            })
        }
    ]
}