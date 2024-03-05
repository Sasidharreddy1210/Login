import React from 'react'
import './Signup.css'
import { FaUser,} from "react-icons/fa";



export const Signup = () => {
    return (
        <div className='loginPage'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='username' required />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='password' required />
                   {/* <button onClick={{Text}}></button>  */}
                </div>
                <div className='forgot'>
                     <a href="#">Forgot password?</a> 
                </div>
                <button type='login'>login</button>
                <div className='register'>
                    <p>Don't have an account ? <a href="#">register</a> </p>
                </div>
            </form>
        </div>
    )
}

