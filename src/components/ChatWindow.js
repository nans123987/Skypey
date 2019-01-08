import React, {Component} from "react";
import "../styles/ChatWindow.css";
import Header from "./Header";
import Chats from "./Chats";
import {MessageInput} from "../containers/MessageInput";

class ChatWindow extends Component {
    render(){
        const {activeUserId, activeUser, activeMsgs} = this.props;
        return(
            <div className="ChatWindow">
                <Header activeUser={activeUser} activeUserId={activeUserId}/>
                <Chats activeMsgs={activeMsgs}/>
                <MessageInput />
            </div>

        );
    }

}

export default ChatWindow;