import React, {Component} from "react";
import _ from "lodash";
import Chat from "./Chat";
import "../styles/Chats.css";


class Chats extends Component{
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }
    
    componentDidMount(){
        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    scrollToBottom(){
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
    
    
    render(){
        const activeMsgs = this.props.activeMsgs;
        return(
            <div className="Chats" ref={this.chatsRef}>
            {
                _.values(activeMsgs).map(message =>
                    <Chat message={message} key={message.number}/>    
                )
            }
            </div>
        );
    }
};

export default Chats;