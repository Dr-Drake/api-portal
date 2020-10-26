import * as React from "react";
import styles from "./HomePage.css";
import Sidebar from "./Sidebar";
import MenuData from  "../data/menu.json";
import Emoji from "../emoji.svg";
import NavBar from "./NavBar";

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <NavBar {...MenuData} />
                <div className={styles.page}>
                    <Sidebar {...MenuData}/>
                    <div className={styles["main-frame"]}>
                        <div className={styles.header}>
                            <p>Welcome to the FinTech API Portal</p>
                        </div>
                        <div className={styles.content}>
                            <p>Have a look at the API Docs in the menu <span> <img src={Emoji} /></span></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default HomePage;