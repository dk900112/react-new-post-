import { EDIT_NAME } from './types';

export default function editName(name) {
  return dispatch => {
    dispatch(editNameAsync(name));
  }
}

function editNameAsync(name){
  return {
    type: EDIT_NAME,
    payload: name
  };
}
