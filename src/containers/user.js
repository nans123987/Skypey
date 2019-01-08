import React from "react";
import "../styles/User.css";
import store from "../store";
import {setActiveUserId} from  "../actions";

const User = ({ user }) => {
    const { name, profile_pic, status } = user;

    const userClickHandler = () => {
        store.dispatch(setActiveUserId(user.user_id));
    };


    return (
        <div className="User" onClick={userClickHandler}>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    );
};
export default User;