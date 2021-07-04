import { GET_FILES } from '../actions/types';

const initialState = {
  data: null,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FILES:
      return {
        ...state,
        data: payload,
        loading: false,
      };
    default:
      return state;
  }
}
