import { getMessages } from "../static-data";
import {SEND_MESSAGE} from "../constants/action-types";
import _ from "lodash";

export default function messages(state = getMessages(10), action){
        switch(action.type){
            case SEND_MESSAGE: 
                const {message, messageToUserId} = action.payload;
                const userMessages = state[messageToUserId];
                const number = +_.keys(userMessages).pop()+1;
                return{
                    ...state,
                    [messageToUserId]:{
                        ...userMessages,
                        [number]: {
                            number,
                            text: message,
                            is_user_msg: true
                        }
                    }
                }
            default: 
                return state;
        }
    
}