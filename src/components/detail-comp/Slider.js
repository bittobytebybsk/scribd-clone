import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BookSlider = () => {
  const setings = {
    autoplay: true,
    dots: true,
    infinate: true,
    speed: 200,
    slidesToScroll: 1,
    slidesToShow: 4,
  };
  return (
    <Slider {...setings}>
      <div>
        <img
          src='https://imgv2-1-f.scribdassets.com/img/word_document/317291260/original/432x574/b38e605684/1623123843?v=1'
          alt='alteee'
        />
      </div>
      <div>
        <img
          src='https://imgv2-2-f.scribdassets.com/img/word_document/317290809/original/432x574/c97c5b846d/1617224352?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-2-f.scribdassets.com/img/word_document/427481132/original/216x287/76f948197d/1622858239?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-2-f.scribdassets.com/img/word_document/427478976/original/432x574/f23795c634/1622876150?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-1-f.scribdassets.com/img/word_document/317285341/original/432x574/7df1be2d1d/1617224351?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-1-f.scribdassets.com/img/word_document/317291260/original/432x574/b38e605684/1623123843?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-2-f.scribdassets.com/img/word_document/317290809/original/432x574/c97c5b846d/1617224352?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-2-f.scribdassets.com/img/word_document/427481132/original/216x287/76f948197d/1622858239?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-2-f.scribdassets.com/img/word_document/427478976/original/432x574/f23795c634/1622876150?v=1'
          alt='alteee'
        />
      </div>
      <div className='slide'>
        <img
          src='https://imgv2-1-f.scribdassets.com/img/word_document/317285341/original/432x574/7df1be2d1d/1617224351?v=1'
          alt='alteee'
        />
      </div>
    </Slider>
  );
};

export default BookSlider;
