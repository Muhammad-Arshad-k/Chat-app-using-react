import { useState } from "react"
import axios from 'axios'


const LoginForm =()=>{
   const [username,setUsername]= useState('');
   const [password,setPassword] = useState('');
   const [error,setError]   =useState('')

   const handleSubmit=async(e)=>{
    e.preventDefault();
    const authObject = {'Project-ID':"4b1267e0-c315-4a7e-a963-7458c22f9724",'User-Name':username,'User-Secret':password}
    try {
        //username /password => chatengine -> give message
       await axios.get('https://api.chatengine.io/chats',  {headers:authObject })
       //workout login
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);

        window.location.reload()
    } catch (error) {
        setError('Oops... Incorrect username or password')
    }
   }

  return(
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="password" required/>
                <div align="center">
                    <button type="submit" className="button" >
                        <span>Start Chatting</span>
                    </button>
                </div>
                <small className="error">{error}</small>
            </form>

        </div>
    </div>
  )
}

export default LoginForm