import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirbase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const {loginWithGoogle} = useFirbase()
    const navigate = useNavigate()
    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1>Login</h1>
                    <form>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input type='text' name='email' id='email' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input type='password' name='password' id='password' />
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