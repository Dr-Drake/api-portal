import * as React from "react";
import styles from "./NavBar.css";
import {Link} from "react-router-dom";

class NavBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isToggled: false
        }

        // Bind methods
        this.toggleNav = this.toggleNav.bind(this);
    }

    // Method to return class name for burger lines
    burgerClass(){
        if (this.state.isToggled){
            return `${styles.burger} ${styles.toggle}`
        }

        return styles.burger
    }

    // Method to toggle the responsive nav burger
    toggleNav(event){
        this.setState((prevState)=>({
            isToggled: !prevState.isToggled
        }))
    }

    buildUrl(service){
        var encoded = encodeURIComponent(service.toLowerCase())
        var url = `/docs/${encoded}`;
        return url
    }

    render(){
        var {list} = this.props
        return(
            <div className={styles.main}>
                <nav>
                    <div className={styles.logo}>
                        <Link to="/">
                            FINTECH <span>API PORTAL</span>
                        </Link>
                    </div>
                    <div className={this.burgerClass()} onClick={this.toggleNav}>
                        <div className={styles.line1}></div>
                        <div className={styles.line2}></div>
                        <div className={styles.line3}></div>
                    </div>
                </nav>
                {this.state.isToggled &&
                <div className={styles.subnav}>
                <ul>
                {list.map((item)=>{
                    return(
                        <li key={item.id}>
                            <Link to={this.buildUrl(item.name)}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
                </ul>
            </div>}
            </div>
        )
    }
}

export default NavBar;