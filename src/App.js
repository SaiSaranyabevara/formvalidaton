
import './App.css';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [getemail,setemail]= useState('');
  const [getpass,setpass] =useState('');
const[error,seterror] =useState({getemail:'', getpass:''});

const emailpattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handlesubmit(){
    if(getemail.trim()==="")
    {
      seterror((error)=>({...error,getemail:"enter the email"}))
    }
    else if(!emailpattern.test(getemail))
    {
      seterror((error)=>({...error,getemail:"enter the valid email"}))
    }
    else{
      seterror((error)=>({...error,getemail:""}))
    }

    if(getpass.trim()==="")
      {
        seterror((error)=>({...error,getpass:"enter the password"}))
      }
     else if(getpass.trim().length<8)
        {
          seterror((error)=>({...error,getpass:"password minimum 8 characters"}))
        }
        else{
          seterror((error)=>({...error,getpass:""}))
        }
    
  }
  return (

   <>
    <div className="border w-25 mt-5 m-auto p-3">
      <h2 className="text-primary text-center">Login Form</h2>
    <div className='mt-3'>
        <label>Email</label>
        <input type="email" className="form-control" value={getemail} onChange={(e)=>{
          setemail(e.target.value)
        }}/>
        {
          error.getemail&&<span className='text-danger'>{error.getemail} </span>
        }
      </div>
      <div className='mt-3'> 
        <label>password</label>
        <input type="password" className='form-control' value={getpass} onChange={(e)=>{
          setpass(e.target.value)
        }}/>
        {error.getpass&&<span className='text-danger'>{error.getpass}</span>}
      </div>
      <div className='mt-3'>
        <button className='btn btn-primary w-100' onClick={handlesubmit}>Login</button>
      </div>
    </div>
   </>
  )
}

export default App;
