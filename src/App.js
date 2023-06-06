import React from 'react'
import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App= ()=> {

    if(!localStorage.getItem('username')) return <LoginForm/>


  return (
  
            <ChatEngine
                height='100vh'
                projectID='f3892bdd-461c-4903-a040-04aa925fe0d6'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatProps)=> <ChatFeed {...chatProps} /> }
            />

  );
}

export default App;