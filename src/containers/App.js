import React from 'react';
import '../styles/App.css';
import Sidebar from '../components/Sidebar';
import Main from '../components/main';
import store from "../store";

const App = () => {
    const {contacts, user, activeUserId, messages} = store.getState();
    let activeUser = null;
    let activeMsgs = messages[activeUserId];
    if(activeUserId){
      activeUser = contacts[activeUserId];
    }
    return (
      <div className="App">
        <Sidebar contacts={contacts}/>
        <Main user={user} activeUserId={activeUserId} activeUser={activeUser} activeMsgs={activeMsgs}/>
      </div>
    );
};

export default App