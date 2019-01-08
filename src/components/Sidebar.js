import React, {Component} from "react";
import "../styles/Sidebar.css";
import User from "../containers/user";
import _ from "lodash";

class Sidebar extends Component{
    render(){
        const contacts = this.props.contacts;
        return(
            <aside className="Sidebar">
            {
                _.values(contacts).map(contact => <User user={contact} key={contact.user_id}/>)
            }
            </aside>
        );
    }

};

export default Sidebar;