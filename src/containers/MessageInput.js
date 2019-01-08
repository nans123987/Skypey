import React from "react";
import store from "../store";
import {setTypingValue, sendMessage} from "../actions";
import "../styles/MessageInput.css";


export const MessageInput = ({value}) => {

    const handleChange =(e) =>{
        store.dispatch(setTypingValue(e.target.value));
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        const state = store.getState();
        const {typing, activeUserId} = state;
        typing && store.dispatch(sendMessage(typing,activeUserId));
    }


    return(
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );

};

