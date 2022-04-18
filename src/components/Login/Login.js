import React, { useRef, useState } from 'react';
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import googleLogo from '../../images/google.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  // Hooks
  const inputEmail = useRef('');
  const inputPassword = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  // Custom Hooks
  const [user, loadingAuthState, errorAuthState] = useAuthState(auth);

  const [
    signInWithEmailAndPassword,
    userEmailandPassword,
    loading,
    errorSignIn,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, errorPassswordReset] =
    useSendPasswordResetEmail(auth);

  // ------------- Event Handler---------------------
  // Sign In
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    signInWithEmailAndPassword(email, password);
  };
  // Password Reset
  const handleSendPasswordResetEmail = async () => {
    const email = inputEmail.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Password Reset Mail Sent!');
    } else {
      toast('Please Enter Email Address!');
    }
  };

  // Conditional Nagigation
  const from = location.state?.from?.pathname || '/';
  user && navigate(from, { replace: true });

  return (
    <section className='register-login'>
      {/* Title */}
      <h2 className='section-title'>Please Login</h2>

      {/* Form */}
      <form className='form-container' onSubmit={handleSignIn}>
        <input
          ref={inputEmail}
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <input
          ref={inputPassword}
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        {/* Login Error Message */}
        <p className='error'>
          {errorSignIn?.message
            ? errorSignIn.message.includes('auth/wrong-password')
              ? 'Incorrect password!'
              : errorSignIn.message.includes('auth/user-not-found')
              ? 'User not found!'
              : errorSignIn.message
            : ''}
        </p>
        {/* Login Button */}
        <input type='submit' value='Login' className='btn btn-primary' />
      </form>

      {/* Other SignIn Button */}
      <div className='form-button-container'>
        <button
          className='btn btn-transparent btn-google'
          onClick={() => signInWithGoogle()}>
          <img src={googleLogo} alt='' />
          Sign in with Google
        </button>
      </div>

      {/* Password Reset Error */}
      <p className='error'>
        {errorPassswordReset?.message
          ? errorPassswordReset.message.includes('auth/missing-email')
            ? 'Please Enter Email Address!'
            : errorPassswordReset.message.includes('auth/user-not-found')
            ? 'User not found!'
            : errorPassswordReset.message.includes('auth/invalid-email')
            ? 'Invalid Email Address!'
            : errorPassswordReset.message
          : ''}
      </p>

      {/* Toggle Registration Page and Password Reset Link */}
      <div className='form-links'>
        <Link to={'/register'}>Don't have an account?</Link>
        <span className='inline-divider'>||</span>
        <button
          onClick={handleSendPasswordResetEmail}
          className='forgot-password'>
          Forgot password?
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
