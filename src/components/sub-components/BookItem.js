import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookItem({
  books: { id, bookname, author, rating, description, imgurl, format },
}) {
  const desc = description.slice(0, 170);
  return (
    <div>
      <Link to={`/detail/${id}`} className='book-item'>
        <img src={imgurl} />
        <div className='about-book'>
          {bookname.length <= 40 ? (
            <h3>{bookname}</h3>
          ) : (
            <h3>{bookname.slice(0, 40) + '...'}</h3>
          )}
          <h6>{author}</h6>
          <div className='rating'>
            <span>
              {Array(rating)
                .fill()
                .map((_) => (
                  <i className='fa fa-star' />
                ))}
            </span>
          </div>
          <p>{desc + '...'}</p>
          <>
            {format == 'book' ? (
              <span>Read Now</span>
            ) : (
              <span>
                <i className='fa fa-play' style={{ color: 'yellow' }} /> Listen
                Now
              </span>
            )}
          </>
        </div>
      </Link>
    </div>
  );
}
/* 
BookItem.protoType = {
  books: PropTypes.object.isRequired,
}; */

export default BookItem;
