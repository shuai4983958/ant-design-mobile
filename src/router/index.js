/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:07:44 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:07:44 
 */
import Loadable from "react-loadable"   // 以组件为中心的代码分割和懒加载
import home from './home'

let config = [
    ...(home(Loadable)),
    // ...(search(Loadable))
]

export default config