import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
  return (
    <section className='register'>
      <form className='form-container'>
        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          required
        />
        <input type='submit' value='Register' className='btn-form' />
        <Link to={'/login'}>Already have an account?</Link>
      </form>
    </section>
  );
};

export default Register;
