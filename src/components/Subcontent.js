import React from 'react';

function Subcontent() {
  return (
    <div className='home-subcontent'>
      <div className='content-one'>
        <h2>All in one simple subscription</h2>
        <div className='content-items'>
          <div>
            <span>
              <i className='fas fa-pause'></i>
            </span>
            <h3>Books</h3>
          </div>
          <div>
            <span>
              <i className='fas fa-headphones'></i>
            </span>
            <h3>AudioBookes</h3>
          </div>
          <div>
            <span>
              <i className='fas fa-book'></i>
            </span>
            <h3>Magazines</h3>
          </div>
          <div>
            <span>
              <i className='fas fa-microphone-alt'></i>
            </span>
            <h3>Podcasts</h3>
          </div>
          <div>
            <span>
              <i className='fas fa-music'></i>
            </span>
            <h3>Sheet Music</h3>
          </div>
          <div>
            <span>
              <i className='fas fa-file-alt'></i>
            </span>
            <h3>Documents</h3>
          </div>
        </div>
      </div>
      <div className='content-two'>
        <p>
          Scribd is overall the best and most convenient deal for
          <br /> online reading.
        </p>
        <span>Business Insider</span>
      </div>
    </div>
  );
}

export default Subcontent;
