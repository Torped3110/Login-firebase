import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import React,{ useRef , useState } from 'react';
import {useAuth} from './auth_context'
import { Alert } from 'react-bootstrap';
function Au()
{
    const emailref=useRef()
    const passwordref=useRef()
    const { login,googleSignin }=useAuth()
    const[error,setError]=useState()
    const[loading,setLoading]=useState(false)
    const navigate = useNavigate();

    async function handleGoogleSignin(e) 
    {
        e.preventDefault()
        try
        {
            setError('')
            await googleSignin()
            navigate('/home')
        }
        catch(err)
        {
            setError("Google sign in failed"+err);
        }

    }


    async function handleSubmit(e)
    {
        e.preventDefault()

        try{
            setError("")
            //setLoading(true);
            await login(emailref.current.value,passwordref.current.value)
            //console.log('Successfull');
           navigate ('./home')
        }
        catch(err)
        {
            setError("Invalid Username or Password !")
        }
        setLoading(false)
    }

    return (
        <div className="Auth">
    <form align='Center' onSubmit={handleSubmit}>
    <div>
        <h1> LOGIN </h1>
    </div>
    <div style={{color:'Red'}}>
       { error && <Alert variant='danger'>{error}</Alert>}
    </div>
    <div>
        <label>Email Address</label>
        <input type="email" placeholder="Email Address" ref={emailref} required/>
    </div>
    <div>
        <label>Password</label>
        <input type="password" placeholder="Password" ref={passwordref} required/>
    </div>
    <div>
        <button disabled={loading}>
            Login
        </button>
    </div>

    <div>
       <small> <Link to='/forpass'>Forgot Password</Link></small>

    </div>
    <div>
        OR
    </div>
    <div align="Center">
        <GoogleButton align="Center" onClick={handleGoogleSignin} />
    </div>
    <div align="Center">
        <Link to='/phone'><button style={{width:250,height:50}}>
            Log in with Phone Number
        </button>
        </Link>
    </div>
    <div>
        <small> Don't have an account?  </small>   
        <Link to='/signup'>Sign up</Link>
         </div>
</form>
</div>
    );

}

export default Au;