import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className='sidenav' id='sidenav'>
      <div className='sidenav-head'>
        <img src='https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small.svg?d6b6d058e' />
        <i className='fa fa-times' id='close'></i>
      </div>
      <div className='sidenav-search'>
        <input type='text' placeholder='Search' />
        <i className='fa fa-search'></i>
      </div>
      <hr />
      <div className='sidenav-links'>
        <div className='links-head'>
          <Link to='/'>Explore</Link>
          <Link to='/'>Upload</Link>
          <Link to='/'>FAQ</Link>
        </div>
        <div className='link-list-one'>
          <h2>BROWSE BY</h2>
          <ul>
            <li>
              <Link to='/'>Books</Link>
            </li>
            <li>
              <Link to='/'>AudioBooks</Link>
            </li>
            <li>
              <Link to='/'>Magazins</Link>
            </li>
            <li>
              <Link to='/'>podcasts</Link>
            </li>
            <li>
              <Link to='/'>Documents</Link>
            </li>
            <li>
              <Link to='/'>SheetMusic</Link>
            </li>
          </ul>
        </div>

        <div className='link-list-two'>
          <h2>INTERESTS</h2>
          <ul>
            <li>
              <Link to='/'>Career & Growth</Link>
            </li>
            <li>
              <Link to='/'>Bussiness</Link>
            </li>
            <li>
              <Link to='/'>Finance & Money Management</Link>
            </li>
            <li>
              <Link to='/'>Politics</Link>
            </li>
            <li>
              <Link to='/'>Sports & Recreation</Link>
            </li>
            <li>
              <Link to='/'>Games & Activities</Link>
            </li>
            <li>
              <Link to='/'>Camics & Graphic Novels</Link>
            </li>
            <li>
              <Link to='/'>SocialScience</Link>
            </li>
            <li>
              <Link to='/'>True Crime</Link>
            </li>
            <li>
              <Link to='/'>Travel</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='sidenav-add'>
        <section className='add-list-one'>
          <Link to='/'>Download our App to Read</Link>
          <br />
          <Link to='/'>Books On any Device</Link>
        </section>
        <section className='add-list-two'>
          <img src='https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/appstore_en.c01025ef.svg' />
          <img src='https://s-f.scribdassets.com/webpack/assets/images/shared/app_store/playstore_en.52ebe950.svg' />
        </section>
        <section className='add-list-three'>
          <i className='fa fa-twitter' />
          <i className='fa fa-facebook' />
        </section>
      </div>
    </div>
  );
}

export default Sidenav;
