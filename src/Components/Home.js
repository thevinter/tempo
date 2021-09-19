import React, {Component} from "react";
import Div from 'atomize'
import Header from './Header.js'
import ApiService from "../Services/ApiService.js";
import MessageList from "./MessageList.js";

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        ApiService.getCurrentUser().then(result => {this.setState({user: result}); console.log(result)});
    }

    render(){
        return (
            <div>
                <Header {...this.state.user}/>
                <MessageList/>
            </div>
        )
    }
}

export default Home;