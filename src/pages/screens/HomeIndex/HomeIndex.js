/*
 * @Author: lvjingshuai 
 * @Date: 2018-07-17 11:08:00 
 * @Last Modified by:   lvjingshuai 
 * @Last Modified time: 2018-07-17 11:08:00 
 */

import React from 'react';
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import { Accordion, List } from 'antd-mobile';
import {getFistAction, clickAction} from '../../actions/firstAction'

class HellowWord extends React.Component {

   render () {
       const {location:{pathname},} = this.props;
       return (
           <div >
               <div>{pathname}</div>
               <Link to="/home">跳转off</Link>
               <Link to="/">跳转on</Link>
               <div style={{ marginTop: 10, marginBottom: 10 }}>
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                <Accordion.Panel header="Title 1">
                    <List className="my-list">
                    <List.Item>content 1</List.Item>
                    <List.Item>content 2</List.Item>
                    <List.Item>content 3</List.Item>
                    </List>
                </Accordion.Panel>
                <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                <Accordion.Panel header="Title 3" className="pad">
                    text text text text text text text text text text text text text text text
                </Accordion.Panel>
                </Accordion>
            </div>
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



