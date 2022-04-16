import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const inputEmail = useRef('');
  const inputPassword = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [signInWithEmailAndPassword, user, loading, errorSignIn] =
    useSignInWithEmailAndPassword(auth);
  user && navigate(from, { replace: true });
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className='register-login'>
      <h2 className='form-title'>Please Login</h2>
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
        <p className='error'>
          {errorSignIn?.message
            ? errorSignIn.message.includes('auth/wrong-password')
              ? 'Incorrect password!'
              : errorSignIn.message.includes('auth/user-not-found')
              ? 'User not found!'
              : errorSignIn.message
            : ''}
        </p>
        <input type='submit' value='Login' className='btn-form' />
        <Link to={'/register'}>Don't have an account?</Link>
      </form>
    </section>
  );
};

export default Login;
