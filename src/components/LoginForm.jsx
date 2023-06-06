import { useState } from "react";
import axios from 'axios';

const LoginForm = ()=>{

const [ username, setUsername ] = useState('');
const [password, setPassword ]  = useState('');
const [errors, setError]         = useState('');

let handleSubmit =(e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "f3892bdd-461c-4903-a040-04aa925fe0d6", 'User-Name': username, 'User-Secret':password};
   
    async function myfun(){
    try {
        // Make a GET request using axios with authentication headers
         await axios.get('https://api.chatengine.io/chats', { headers: authObject });
      
        // Store the username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      
        // Reload the page to update the UI with the new data
        window.location.reload();
      } catch (errors){
        // Handle any errors that occur during the request or storage
        setError("Incorrect Credentials!");
        
      }
    }
    myfun();
}

return(
    <div className="wrapper">
            <div className="form">
                    
                    <h1 className="title">Chat Application</h1>
                    
                    <form onSubmit={ handleSubmit }>

                            <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required/>
                            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Passward" required/>
                    
                            <div align="center">
                                <button type="submit" className="button">
                                    <span>Start Chat</span>
                                </button>
                            </div>
                            <h2 className="error">{errors}</h2>
                    </form>
            </div>
    </div>
)

}

export default LoginForm;