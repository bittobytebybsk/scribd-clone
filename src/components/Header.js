import React, { useEffect } from 'react';
import glogo from '../';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='global-header' id='global-header'>
      <div className='global-title'>
        <i className='fas fa-bars side-nav-icon' id='toggle'></i>
        <img
          src='https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small_white.svg?5a3154a21'
          alt='logo'
        />
      </div>
      <div className='btn-header-subscribtion'>
        <Link to='' className='subscribe'>
          Read Free For 30 Days
        </Link>
        <button to='' className='signin' id='btn-signin'>
          Sign In
        </button>
      </div>
    </div>
  );
}
