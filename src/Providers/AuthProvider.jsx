import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.confiq';
import { getAuth,createUserWithEmailAndPassword , onAuthStateChanged  } from "firebase/auth";
  
 export const AuthContext= createContext()
const auth= getAuth(app)
 
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const[loading, setLoading]= useState(true);

    const createUser= (email, password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password);
    } 
     useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
           setUser(currentUser)
           setLoading(false);
        })
        return()=>{
            return unSubscribe();
        }
     },[])

    const authInfo= {
           user,
           loading,
           createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}   
        </AuthContext.Provider>
    );
};

export default AuthProvider;