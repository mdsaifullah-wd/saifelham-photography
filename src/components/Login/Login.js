import React, { useRef } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import googleLogo from '../../images/google.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const inputEmail = useRef('');
  const inputPassword = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [user, loadingAuthState, errorAuthState] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    userEmailandPassword,
    loading,
    errorSignIn,
  ] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  user && navigate(from, { replace: true });
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <section className='register-login'>
      <h2 className='section-title'>Please Login</h2>
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
        <input type='submit' value='Login' className='btn btn-primary' />
        <Link to={'/register'}>Don't have an account?</Link>
      </form>

      <div className='form-button-container'>
        <button
          className='btn btn-transparent btn-google'
          onClick={() => signInWithGoogle()}>
          <img src={googleLogo} alt='' />
          Sign in with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
