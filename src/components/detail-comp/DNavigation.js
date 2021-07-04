import React from 'react';
import { Link } from 'react-router-dom';

const DNavigation = () => {
  return (
    <div className='detail-page-nav'>
      <ul>
        <li>
          <Link to='/'>What is Scribd?</Link>
        </li>
        <li>
          <Link to='/'>Books</Link>
        </li>
        <li>
          <Link to='/'>AudioBooks</Link>
        </li>
        <li>
          <Link to='/'>Magazines</Link>
        </li>
        <li>
          <Link to='/'>Podcasts</Link>
        </li>
        <li>
          <Link to='/'>SheetMusic</Link>
        </li>
        <li>
          <Link to='/'>Documents</Link>
        </li>
        <li>
          <Link to='/'>SnapShots</Link>
        </li>
      </ul>
    </div>
  );
};

export default DNavigation;
