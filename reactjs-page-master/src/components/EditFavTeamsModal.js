import React, { Component } from 'react';
import { EDIT_FAVTEAMS_MODAL } from './ModalTypes';

class EditFavTeamsModal extends Component {
  render() {
 
    return (
            <div className="modal" style={{display: `${this.props.open === EDIT_FAVTEAMS_MODAL? 'block' : 'none'}`}}>

        <div className="modal-content">
          <div className="modal-header">
              <div className="float-right">
            <label>Close</label>
            <button
              onClick={this.props.close}
              className="btn-close">&times;</button>
          </div>

            <div className="modal-title">
                          <h4>{this.props.favTeams.length === 0? "Add Teams" : "Edit Teams"}</h4>

              
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <form className="fav-teams">
                <div className="form-group">
                  {this.props.favTeams.map((team, index) => {
                   
                  return <div key={index}>
                  <label className="form-label">Team {index + 1} </label>
                  
                  <input 
                    value={team}
                    onChange={this.props.onFavTeamsChange.bind(this.props.favTeams, index)}
                    className="form-input"
                    type="text"/>
                   </div>  
                     
                   })}


                </div>

              </form>
              <div className="add-favteam">
              <a  onClick={this.props.addFavTeam}>+ Add Another</a> 
              </div>
            </div>
          </div>
          
         

          <div className="modal-footer">
           <button
              onClick={this.props.close}
              className="btn-cancel">Cancel</button>
            <button
              onClick={this.props.saveFavTeams}
              className="btn-save">Save</button>
          </div>
        </div>
      </div>
    	);
  }
}

export default EditFavTeamsModal;