/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:07:40 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:07:40 
 */
import React from 'react'
export default function (Loadable) {
    return [
        {
            name: 'home',
            path: '/',
            exact: true,
            component: Loadable({
                loader: () => import('../pages/screens/HellowWord/HellowWord'),
                loading: () => <div />
            })
        },
        {
            name: 'home',
            path: '/home',
            exact: true,
            component: Loadable({
                loader: () => import('../pages/screens/HomeIndex/HomeIndex'),
                loading: () => <div />
            })
        }
    ]
}