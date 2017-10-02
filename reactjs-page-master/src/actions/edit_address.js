import { EDIT_ADDRESS } from './types';

export default function editAddress(address) {
  return dispatch => {
    dispatch(editAddressAsync(address));
  }
}

function editAddressAsync(address){
  return {
    type: EDIT_ADDRESS,
    payload: address,
  };
}
