import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

function Register() {

    const [login,setLogin] = useState("")

    const [password,setPassword] = useState("")

    async function createUser(){
        try{
            const res = await createUserWithEmailAndPassword(auth,login,password)

            if(res){
                toast.success("user was created")
            }

            console.log(res) 
    
        } catch(error ) {

            console.log(error);
            toast.error(error.message || "email already use")
            
        }  
    }

    return (
        <div className='signupBody'>
            <img src="" alt="" />
            <div className='signupInput'>
                <div className='signupTxt'>
                    <h1>Create an account</h1>
                    <h2>Enter your details below</h2>
            </div>
            <input type="text" placeholder='Name' />
            <input onChange={(e) => setLogin(e.target.value)} value={login} type="email" placeholder='Email or Phone Number' />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
            <div className='signupBtn'>
                <button onClick={createUser} className='create'>Create Account</button>
                <button className='google'>Sign up with Google</button>
                <p>Already have account? <Link to={"/signin"}>Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}


export default Register
