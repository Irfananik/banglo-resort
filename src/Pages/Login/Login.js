import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import useFirbase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loginWithGoogle } = useFirbase()
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const auth = getAuth(app)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)


    const handleEmail = (email) => {
        setEmail(email.target.value)
    }
    const handlePassword = (password) => {
        setPassword(password.target.value)
    }
    const handleLogin = (login) => {
        login.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/')
    }

    if (loading) {
        return <p className="text-7xl">Loading...</p>
    }

    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <p className="text-red-500">{error?.message}</p>
                    <h1 className="text-3xl text-slate-500">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className='input-field'>
                            <label htmlFor='email'><span className="text-2xl text-slate-500">Email</span></label>
                            <div className='input-wrapper'>
                                <input onBlur={handleEmail} type='text' name='email' id='email' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'><span className="text-2xl text-slate-500">password</span></label>
                            <div className='input-wrapper'>
                                <input onBlur={handlePassword} type='password' name='password' id='password' required />
                            </div>
                        </div>
                        <button type='submit' className='auth-form-submit'>
                            Login
                        </button>
                    </form>
                    <p className='redirect'>
                        New to Tech Geeks?{" "}
                        <span onClick={() => navigate('/signup')}>Create New Account</span>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button onClick={loginWithGoogle} className='google-auth'>
                            <img src="" alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;