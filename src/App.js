import * as React from "react";
import HomePage from "./components/HomePage";
import ApiPage from "./components/ApiPage";
/*import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";
import Sidebar from "./components/Sidebar";
import path from "path";
import styles from "./App.css";
import MenuData from  "./data/menu.json";*/
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


class App extends React.Component{
    constructor(props){
        super(props)
    }

    /*componentDidMount(){
        SwaggerUI({
            domNode: document.getElementById("api-data"),
            url: "/swagger.json"
        })
    }*/

    render(){
        return(
            <Router>
                <Switch>
                <Route path="/docs/:service" render={(props)=>(<ApiPage {...props} />)} />
                <Route path="/">
                    <HomePage />
                </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;