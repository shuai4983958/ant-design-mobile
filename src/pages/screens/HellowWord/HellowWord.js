/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:07:54 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:07:54 
 */

import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd-mobile';
import { Link} from 'react-router-dom'
import {getFistAction, clickAction} from '../../actions/firstAction'

class HellowWord extends React.Component {

   render () {
       const {location:{pathname},clickAction,getFistAction} = this.props;
       return (
           <div >
               <div>当前url{pathname}</div>
               <Link to="/home">跳转off</Link>
               <Link to="/">跳转on</Link>
               <Button type="primary"  onClick={clickAction}>点击</Button>
               <Button type="primary"  onClick={getFistAction}>异步请求：</Button>
           </div>
       )
   }
}
function mapStateToProps(state) {
    return {
        firstState: state.firstState
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getFistAction:() => dispatch(getFistAction()),
        clickAction:() => dispatch(clickAction())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(HellowWord)
