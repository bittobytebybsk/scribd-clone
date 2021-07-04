import { GET_FILES } from './types';
import { files } from '../booksdata/files';

export const getFiles = (booksdata) => (dispatch) => {
  try {
    dispatch({
      type: GET_FILES,
      payload: booksdata,
    });
  } catch (err) {
    console.log(err.message);
  }
};
