import React from 'react'
import { action } from 'mobx'
import {
     Jumbotron
} from 'reactstrap'

//@observer(["state"]) // Only required if you use or change the state outside fetchData
export default class NotFound extends React.Component {
    @action static fetchData({state}){
        state.app.title = 'Not found'
    }
    render() {
        return <Jumbotron><h1>Not Found</h1></Jumbotron>
    }
}