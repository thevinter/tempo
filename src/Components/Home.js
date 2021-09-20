import React, {Component} from "react";
import { Div } from "atomize";
import Header from './Header.js'
import ApiService from "../Services/ApiService.js";
import MessageList from "./MessageList.js";
import UserPage from "./UserPage.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            <Div>

                <BrowserRouter>
                <Header {...this.state.user}/>
                    <Route path="/me/feed">
                        <MessageList/>
                    </Route>
                    <Route path="/me/user">
                        <UserPage/>
                    </Route>
                </BrowserRouter>
            </Div>
        )
    }
}

export default Home;