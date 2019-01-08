import React, {Component} from "react";
import "../styles/Chat.css";

class Chat extends Component{
    render(){
        let message = this.props.message;
        return(
            <span className={`Chat ${message.is_user_msg ? "is-user-msg":""}`}>{message.text}</span>
        );
    };

};

export default Chat;