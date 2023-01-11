import React,{useState} from 'react';
import "./form.css";
import "../../index.css";
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../../components/Navbar2/Navbar2';
const Form = (form) => {
    const home = useNavigate()


    const [userRegistration, setUserRegistration] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
        confpassword:""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({...userRegistration, [name] : value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        home('/')
        sessionStorage.setItem('uid',userRegistration.username)
    }


    return (
      <>
      <Navbar2/>
            <div id='tisra'>
            <form action="" onSubmit={handleSubmit} className='Form'>
                <div className='pehla' id='dusra'>
                    <label htmlFor="username" className='Name'>Fullname</label>
                    <input type="text" autoComplete='off' required
                      value={userRegistration.username} 
                      onChange = {handleInput}
                     name="username"
                     pattern='[A-Za-z0-9_]{3,10}' id="username"/>
                </div>
                <div className='pehla'>
                    <label htmlFor="email">email</label>
                    <input type="email" autoComplete="off" required
                      value={userRegistration.email} 
                      onChange = {handleInput}
                     name="email" 
                     errorMessage= '* It should be a valid email address!'
                     id="email"/>
                </div>
                <div className='pehla'>
                    <label htmlFor="password">pasword</label>
                    <input type="password" autoComplete='off' required
                      value={userRegistration.password} 
                      onChange = {handleInput}
                     name="password" 
                     pattern= "^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$"
                     id="password"/>
                </div>
                <div className='pehla'>
                    <label htmlFor="confirm password">conf password</label>
                    <input type="password" autoComplete='off' required
                      value={userRegistration.confpassword} 
                      onChange = {handleInput}
                     name="confpassword"
                     pattern="^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$" 
                     id="confpassword"/>
                </div>

                <button type="submit" className='register'>Sign up</button>
            </form>
            </div>
      </>
    )
  }
  
  export default Form