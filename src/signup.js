import {Link, useNavigate} from 'react-router-dom'
import React,{ useRef,useState} from 'react';
import { useAuth } from './auth_context';
import { Alert } from 'react-bootstrap';

const SignUp = () =>
{
    const Nameref=useRef()
    const emailref=useRef()
    const passwordref=useRef()
    const dateref=useRef()
    const { signup }=useAuth()
     const[error,setError]=useState()
     const[loading,setLoading]=useState(false)
     const navigate=useNavigate()
 
    async function handleSubmit(e)
    {
        e.preventDefault()
        setError("")

        if (Nameref.current.value==="red")
        setError("Gone")

        else if(dateref.current.value==="")
        setError("Gone")

        else if(emailref.current.value==="")
        setError("Gone")

        else if(passwordref.current.value==="")
        setError("Gone")

        else{
        try{
            
            await signup(emailref.current.value,passwordref.current.value)
            setLoading(true)
            navigate('/home')
            setError("")
        }
        catch(err){
            setError("sing up failed"+err)
        } 
        setLoading(false)
    }
    }

    return(

        <div className="SignUp">
            <form onSubmit={handleSubmit}>
            <div>
                <h1>SIGN UP</h1>
            </div>
           <div style={{color:'red'}}>{error && <Alert variant="danger">{error}</Alert>}
            </div>
            <div>
                <label>Name</label>
                <input type='text' placeholder="Name" ref={Nameref} required />
            </div>
            <div>
                Date of Birth 
                <input type='date' ref={dateref}  required />
            </div>
            <div>
                <label>Email ID</label>
                <input type='email'  placeholder="Email address"  ref={emailref} required/>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder="Password" ref={passwordref} required/>
            </div>
            <div>
            <button disabled={loading}  type="submit" >
            Sign Up
            </button >
            </div>
            <div>
                <small>Already have an account? </small>
                <Link to='/'>Login</Link>
            </div>
            </form>
        </div>

    );
};

export default SignUp;