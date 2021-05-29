import React from 'react';
import './SignForms.css'
import useSignUpForm from './CustomHooks/useSignUpForm'
import { refreshTokenSetup } from './refreshTokenSetup';

import { useGoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom'

import GrailHouse from '../../GrailHouse.svg'
import GoogleIcon from '../../GoogleIcon.svg'




const clientId = '891130030394-9nr1pjp32dhv4rohq062m57gd2b91sn6.apps.googleusercontent.com';



export default function SignUp() {
    const {inputs, handleInputChange,handleSubmit} = useSignUpForm();
    const onSuccess = (res) => {
        console.log('[Login Success} currentUser', res.profileObj);
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login Failed} res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline'
    });

    return(
        <div className='container'>
            <div className='sign-up-container'>
                <div className='sign-up-content'>
                    <div className='sign-up-imgs'>
                        <img src={GrailHouse} alt='logo' />
                    </div>
                    <button onClick={signIn} className='google-btn'>
                        <img src={GoogleIcon} alt="google login" className="icon" style={{width:'5%', padding: '0 10px'}}></img>
                        <span className='google_btn_text'>Continue with Google </span>
                    </button>
                <div style={{width: '73%', height: '20px', borderBottom: '1px solid #c0c0c0', textAlign: 'center', color: '#c0c0c0'}}>
                    <span style={{fontSize: '15px', padding: '0 10px', position: 'relative', top: '8px', background: 'white'}}>
                        OR
                    </span>
                </div>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <div className='sign-up-inputs'>
                        <input 
                            type='text' 
                            name='username'
                            placeholder='Username'
                            onChange={handleInputChange}
                            value={inputs.username}
                            required
                        />
                        <input 
                            type='email' 
                            name='email'
                            placeholder='Email'
                            onChange={handleInputChange}
                            value={inputs.email}
                            required
                        />
                        <input 
                            type='password' 
                            name='password'
                            placeholder='Password'
                            onChange={handleInputChange}
                            value={inputs.email}
                        />
                        <button className='sign-up-btn' type='submit'>Sign Up</button>
                        <p>Don't have an account? <Link to='signin' className='sign-in-link'>Sign In</Link></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}