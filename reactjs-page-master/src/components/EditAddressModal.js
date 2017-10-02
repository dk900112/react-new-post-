import React, { Component } from 'react';
import { EDIT_ADDRESS_MODAL } from './ModalTypes';

class EditAddressModal extends Component {
  render() {
    return (
            <div className="modal" style={{display: `${this.props.open === EDIT_ADDRESS_MODAL? 'block' : 'none'}`}}>


        <div className="modal-content">

          <div className="modal-header">

          <div className="float-right">
            <label>Close</label>
            <button
              onClick={this.props.close}
              className="btn-close">&times;</button>
          </div>

            <div className="modal-title">
              <h4>{this.props.address === ""? "Add Address" : "Edit Address"}</h4>
            </div>
          </div>

          <div className="modal-body">
            <div className="content">
              <form>
                <div className="form-group">                
                  <textarea
                    value={this.props.address}
                    onChange={this.props.onAddressChange}
                    className="form-input"
                    type="text"
                    placeholder="Address" />
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
          <button
              onClick={this.props.close}
              className="btn-cancel">Cancel</button>
            <button
              onClick={this.props.saveAddress}
              className="btn-save">Save</button>
          </div>
        </div>
      </div>
    	);
  }
}

export default EditAddressModal;