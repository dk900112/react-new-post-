import { EDIT_FAVTEAMS } from './types';

export default function editFavTeams(favTeams) {
  return dispatch => {
    dispatch(editFavTeamsAsync(favTeams));
  }
}

function editFavTeamsAsync(favTeams){
  return {
    type: EDIT_FAVTEAMS,
    payload: favTeams,
  };
}
