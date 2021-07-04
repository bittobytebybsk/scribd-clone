import React, { useEffect } from 'react';
import BookItem from './sub-components/BookItem';
import { Link } from 'react-router-dom';
import { getFiles } from '../actions/files';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import db from '../firebase';

function Books({ getFiles, files: { data, loading } }) {
  useEffect(() => {
    db.collection('books').onSnapshot((snap) => {
      let books = snap.docs.map((book) => {
        return { id: book.id, ...book.data() };
      });
      getFiles(books);
    });
  }, []);
  return (
    <div className='home-bookslist'>
      <div className='home-bookslist-options'>
        <h2>Start Reading Now</h2>
        <small>Enjoy popular titles handpicked by our editors.</small>
      </div>

      <div className='section-bookitem'>
        {loading ? (
          <h3>no found</h3>
        ) : (
          data.map((file) => <BookItem key={file.id} books={file} />)
        )}
      </div>
      <div className='home-bookslist-options'>
        <span>Show More</span>
        <br />
        <Link to='/'>Read Free For 30 More</Link>
        <p>cancel anytime</p>
      </div>
    </div>
  );
}

Books.propTypes = {
  getFiles: PropTypes.func.isRequired,
  files: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  files: store.files,
});

export default connect(mapStateToProps, { getFiles })(Books);
