import React ,{ useContext, useState,useEffect,createContext } from "react";
import {auth} from "./firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,
signOut,onAuthStateChanged,signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
import GoogleButton from "react-google-button";

const Authcontext = createContext()

export function useAuth()
{
    return useContext(Authcontext)
}


export function AuthProvider({children})
{
    const [currentUser,setCurrentUser]=useState()

    const value={currentUser, signup , login,googleSignin};

    function signup(email,password)
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password)
    {
        return signInWithEmailAndPassword(auth,email,password);
    }

    function googleSignin()
    {
        const googleauthProvider=new GoogleAuthProvider()
        return signInWithPopup(auth,googleauthProvider)
    }
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth,(user)=>{
          setCurrentUser(user)   
        }); 
        return () => {unsub();
        }
    },[]);

   return <div className="AuthProvider" >
        <Authcontext.Provider value={value}>
            {children}
        </Authcontext.Provider>
    </div>
}