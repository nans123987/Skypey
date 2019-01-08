import React, {Component} from "react";
import "../styles/Header.css";

class Header extends Component{
    render() {
        const {activeUser}  = this.props;
        return(
            <header className="Header">
                <h1 className="Header__name">{activeUser.name}</h1>
                <p className="Header__status">{activeUser.status}</p>
            </header>
        );
    
    }

}


export default Header;
