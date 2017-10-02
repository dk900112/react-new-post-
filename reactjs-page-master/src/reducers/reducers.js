import { EDIT_NAME, EDIT_ADDRESS, EDIT_FAVTEAMS} from '../actions/types';

export default function(state={}, action) {

  switch (action.type) {
    case EDIT_NAME:
      return {
      	...state,
      	name: action.payload
      }
    case EDIT_ADDRESS:
    return {
      	...state,
      	address: action.payload
      }
    case EDIT_FAVTEAMS:
    return {
    	...state,
    	favTeams:  action.payload
    };

    default:
      return state;
  }

}