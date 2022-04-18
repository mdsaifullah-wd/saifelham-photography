import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Checkout.css';

const Checkout = () => {
  const handleCheckout = (event) => {
    event.preventDefault();
    toast('Thanks for purchasing my Service!');
  };
  return (
    <section className='checkout'>
      <h2 className='section-title'>Provide Information</h2>
      <form className='form-container' onSubmit={handleCheckout}>
        <input type='text' name='name' placeholder='Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <input type='text' name='address' placeholder='Address' required />
        <input
          type='number'
          name='number'
          placeholder='Phone Number'
          required
        />

        <input
          type='submit'
          value='Confirm Purchase'
          className='btn btn-primary'
        />
      </form>
      <ToastContainer />
    </section>
  );
};

export default Checkout;
