import React from 'react';
import { Link } from 'react-router-dom';

export default function Panal() {
  return (
    <div className='panal'>
      <div className='home-content'>
        <h2>
          Endless entertainment
          <br />
          and knowledge
        </h2>
        <h3>Read or listen anytime, anywhere.</h3>
        <Link to='/'>Read free for 30 days</Link>
        <p>Only $8.99/month after. Cancel anytime.</p>
      </div>
    </div>
  );
}
