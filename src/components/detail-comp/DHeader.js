import React from 'react';

const DHeader = () => {
  return (
    <div className='detail-page-header'>
      <img src='https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small.svg?d6b6d058e' />
      <section className='sec-input'>
          <input type='text' />
          <i className='fa fa-search'></i>
      </section>
      <section className='sec-lang'>
          <span>EN</span>
          <i>v</i>
      </section>
      <section className='sec-upload'>
          <i className='fa fa-upload'></i>
          <span>Upload</span>
      </section>
      <button>Read For 30 Days</button>
      <i className='fa fa-user'></i>
    </div>
  );
};

export default DHeader;
