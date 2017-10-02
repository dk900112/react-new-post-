import React, { Component } from 'react';
import { EDIT_NAME_MODAL } from './ModalTypes';

class EditNameModal extends Component {
  render() {
    return (
                  <div className="modal" style={{display: `${this.props.open === EDIT_NAME_MODAL? 'block' : 'none'}`}}>

        <div className="modal-content">
          <div className="modal-header">
                        <div className="float-right">
            <label>Close</label>
            <button
              onClick={this.props.close}
              className="btn-close">&times;</button>
          </div>

            <div className="modal-title">
              <h4>{this.props.name === ""? "Add Name" : "Edit Name"}</h4>
            </div>
          </div>
          <div className="modal-body">
            <div className="content">
              <form>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    value={this.props.name}
                    onChange={this.props.onNameChange}
                    className="form-input"
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
           <button
              onClick={this.props.close}
              className="btn-cancel">Cancel</button>
            <button
              onClick={this.props.saveName}
              className="btn-save">Save</button>
          </div>
        </div>
      </div>
    	);
  }
}

export default EditNameModal;