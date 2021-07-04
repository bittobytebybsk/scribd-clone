import React, { useEffect } from 'react';
import Header from './Header';
import Panal from './Panal';
import Subcontent from './Subcontent';
import Books from './Books';
import Brand from './Brand';
import Footer from './Footer';
import Sidenav from './Sidenav';
import SignIn from './SignIn';

function Home() {
  useEffect(() => {
    const toggle = document.getElementById('toggle');
    const sidenav = document.getElementById('sidenav');
    const close = document.getElementById('close');
    const logclose = document.getElementById('log-close');
    const header = document.getElementById('global-header');
    const home = document.getElementById('home');
    const btnsignin = document.getElementById('btn-signin');
    const signinpage = document.getElementById('signin-page');

    toggle.addEventListener('click', () => {
      sidenav.classList.add('sidenav-display');
      header.classList.add('global-header-hide');
    });
    close.addEventListener('click', () => {
      sidenav.classList.remove('sidenav-display');
      header.classList.remove('global-header-hide');
    });

    btnsignin.addEventListener('click', () => {
      signinpage.classList.add('signin-display');
      home.style.overflow = 'hidden';
    });
    logclose.addEventListener('click', () => {
      signinpage.classList.remove('signin-display');
    });
  });

  return (
    <div className='home' id='home'>
      <Header />
      <Panal />
      <Subcontent />
      <Books />
      <Brand />
      <SignIn />
      <Sidenav />
    </div>
  );
}

export default Home;
