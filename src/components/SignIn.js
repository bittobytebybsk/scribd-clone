import React from 'react';
import pic1 from '../imgs/presentation1.png';
import pic2 from '../imgs/presentation2.png';
import pic3 from '../imgs/presentation3.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='signin-page' id='signin-page'>
      <div className='signin-panel'>
        <section className='panel-left'>
          <img src='https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small.svg?d6b6d058e' />
          <br />
          <span>Welcome back!</span>
          <section className='left-down'>
            <nav>
              <img src={pic1} />
              <img src={pic2} />
              <img src={pic3} />
            </nav>
            <h2>12,903 Peple</h2>
            <p>Browsing scribd right now</p>
          </section>
        </section>
        <section className='panel-right'>
          <span>
            <i className='fa fa-times log-close' id='log-close' />
          </span>
          <section className='right-top'>
            <nav>
              <h1>SignIn to Scribd</h1>
              <Link to='/' className='log-facebook'>
                <i className='fa fa-facebook' />
                <span>Continue with Facebook</span>
              </Link>
              <Link to='/' className='log-google'>
                <i className='fa fa-google' />
                <span>Continue with Facebook</span>
              </Link>
              <small>or Signin with Email</small>
            </nav>
          </section>
          <section className='right-down'>
            <span>Now to Scribd?</span>
            <Link to='/'>SignUp</Link>
          </section>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
