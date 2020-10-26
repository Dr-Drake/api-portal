import * as React from "react";
import styles from "./Sidebar.css";
import {Link} from "react-router-dom";



class Sidebar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isclicked: false,
        }

        this.buildUrl = this.buildUrl.bind(this);
    }

    buildUrl(service){
        var encoded = encodeURIComponent(service.toLowerCase())
        var url = `/docs/${encoded}`;
        return url
    }

    render(){
        var {list} = this.props
    
        return(
            <div className={styles.frame}>
                <div className={styles["top-frame"]}>
                    <div className={styles.logo}>
                        <Link to="/">
                            FINTECH <span>API PORTAL</span>
                        </Link>
                    </div>
                </div>
                <div className={styles.stack}>
                    <p>API DOCS</p>
                </div>
                <ul className={styles.nav}>
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
            </div>
        )
    }
}

export default Sidebar;