import React, { Component } from "react";
import "../styles/Main.css";
import Empty from "./Empty";
import ChatWindow from "./ChatWindow";

class Main extends Component {
    render() {
        const {user, activeUserId, activeUser, activeMsgs} = this.props;
        return (
            <main className="Main">
            {
                    (activeUserId == null) ? <Empty user={user} activeUserId={activeUserId} /> : <ChatWindow activeUserId={activeUserId} activeUser={activeUser} activeMsgs={activeMsgs}/>
            }
            </main>
        );
    }

};

export default Main;