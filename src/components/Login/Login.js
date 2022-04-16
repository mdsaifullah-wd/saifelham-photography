import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='register-login'>
      <h2 className='form-title'>Please Login</h2>
      <form className='form-container'>
        <input type='email' name='email' placeholder='Email' required />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <input type='submit' value='Login' className='btn-form' />
        <Link to={'/register'}>Don't have an account?</Link>
      </form>
    </section>
  );
};

export default Login;
