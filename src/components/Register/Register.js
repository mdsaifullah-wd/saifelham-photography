import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
const Register = () => {
  const inputName = useRef('');
  const inputEmail = useRef('');
  const inputPassword = useRef('');
  const inputConfirmPassword = useRef('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, errorCreateUser] =
    useCreateUserWithEmailAndPassword(auth);
  user && navigate('/');
  errorCreateUser && setError(errorCreateUser);
  const handleCreateUser = (event) => {
    event.preventDefault();
    const name = inputName.current.value;
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    const confirmPassword = inputConfirmPassword.current.value;
    if (password !== confirmPassword) {
      setError("Confirm Password didn't match!");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <section className='register-login'>
      <h2 className='form-title'>Please Register</h2>
      <form className='form-container' onSubmit={handleCreateUser}>
        <input
          ref={inputName}
          type='text'
          name='name'
          placeholder='Name'
          required
        />
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
        <input
          ref={inputConfirmPassword}
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          required
        />
        <p className='error'>{error}</p>
        <input type='submit' value='Register' className='btn-form' />
        <Link to={'/login'}>Already have an account?</Link>
      </form>
    </section>
  );
};

export default Register;
