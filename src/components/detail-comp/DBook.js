import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import db from '../../firebase';
import {Link } from 'react-router-dom'

const DBook = () => {
   const { id } = useParams();

  const [book, setbook] = useState();
  useEffect(() => {
    db.collection('books')
      .doc(id)
      .get()
      .then((book) => {
        if (book.exists) {
          setbook(book.data());
        } else {
          console.log('no found');
        }
      });
  }, []);
  return (
        <>
      {!book ? (
        <h3>loading</h3>
      ) : (
        <div className='book-detail'>
          <section className="detail-left">
            <img src={book.imgurl} alt="some" />
            <button className='btn-trail'>Read Your Free 30 Days</button>
            <Link to='/'>Read Preview</Link>
            <button><i className='fa fa-save'></i>Save for later</button>
            <button><i className='fa fa-list'></i>Create list</button>
            <button><i className='fa fa-download'></i>Download to app</button>
            <button><i className='fa fa-share'></i>Share</button>
          </section>
          <section className="detail-right">
           <section className='sec-one'>
           <h1>{book.bookname}</h1>
            <p><small>by</small><span>{book.author}</span></p>
            <div>{Array(book.rating)
                .fill()
                .map((_) => (
                  <i className='fa fa-star' />
                ))}({book.reviews} ratings) <i className='fa fa-pages'></i>{book.pages} pages</div>
           </section><hr />
           <section className='sec-two'>
             <p>also available as...</p>
             <p><i className='fa fa-audio'></i>audio snapshoot</p>
           </section>
           <section className='sec-three'>
             <h2>Description</h2>
             <p>{book.description}</p>
           </section>
           <section></section>
          </section>
        </div>
      )}
    </> 
       
  );
};

export default DBook;
