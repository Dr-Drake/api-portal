import * as React from "react";
import SwaggerUI from "swagger-ui";
//import "swagger-ui/dist/swagger-ui.css";
import Sidebar from "./Sidebar";
import MenuData from "../data/menu.json";
import Service from "../data/service.json";
import styles from "./ApiPage.css";
import NavBar from "./NavBar";

class ApiPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            service: null
        }

        this.setSwagger = this.setSwagger.bind(this);
    }

    componentDidMount(){
        this.setState({
            service: decodeURIComponent(this.props.match.params.service)
        })
        this.setSwagger();
    }

    componentWillUpdate(newProps, newState){
        if (newProps.match.params.service !== this.state.service){
            this.setState({
                service: decodeURIComponent(newProps.match.params.service)
            })
            this.setSwagger();
        }
    }


    setSwagger(){
        // Configure SwaggerUI based on route parameter
        var service = decodeURIComponent(this.props.match.params.service);
        
        return(SwaggerUI({
            domNode: document.getElementById("api-data"),
            url: Service[service]
        }))
    }

    render(){
        const swaggerStyle = {
            flex: "88%",
            "overflow-y": "scroll",
        }
        return(
            <React.Fragment>
                <NavBar {...MenuData} />
                <div className={styles.App}>
                    <Sidebar {...MenuData} />
                    <div id="api-data" style={swaggerStyle}/>
                </div>
            </React.Fragment>
        )
    }
    
}

export default ApiPage;