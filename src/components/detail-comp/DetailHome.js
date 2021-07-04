import React from 'react';
import DHeader from './DHeader';
import Header from '../Header';
import DNavigation from './DNavigation';
import DBook from './DBook';
import Slider from './Slider';

const DetailHome = () => {
  return (
    <div>
      <DHeader />
      <DNavigation />
      <DBook />
      <Slider />
    </div>
  );
};

export default DetailHome;
