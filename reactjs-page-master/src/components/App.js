import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import editName from '../actions/edit_name';
import editAddress from '../actions/edit_address';
import editFavTeams from '../actions/edit_favteams';

import EditNameModal from './EditNameModal';
import EditAddressModal from './EditAddressModal';
import EditFavTeamsModal from './EditFavTeamsModal';

// Defines which modal is going to be shown
import { NONE_MODAL, EDIT_NAME_MODAL, EDIT_ADDRESS_MODAL, EDIT_FAVTEAMS_MODAL } from './ModalTypes';

class App extends Component {
  constructor(props) {
    super(props);

    // Initial the state
    this.state = {
      openModal: NONE_MODAL,
      name: props.name,
      address: props.address,
      favTeams: props.favTeams,
    }

    // Set the button captions
    this.editNameBtnCap = 'Add Name';
    this.editAddressBtnCap = 'Add Address';
    this.editFavTeamsBtnCap = 'Add Teams';

    // These are used to restore the values if user close or cancel the modal
    this.oldFavTeams = props.favTeams;
    this.oldName = props.name,
    this.oldAddress = props.address,

    // render the card in main page
    this.renderName = this.renderName.bind(this);
    this.renderAddress = this.renderAddress.bind(this);
    this.renderFavTeams = this.renderFavTeams.bind(this);

    // Open modal
    this.handleEditName = this.handleEditName.bind(this);
    this.handleEditAddress = this.handleEditAddress.bind(this);
    this.handleEditFavTeams = this.handleEditFavTeams.bind(this);

    // onChange handler when the name in modal is changed, update the main page instantly
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleFavTeamsChange = this.handleFavTeamsChange.bind(this);
    // handling adding new team
    this.handleAddFavTeam = this.handleAddFavTeam.bind(this);

    // Save the change
    this.handleSaveEditName = this.handleSaveEditName.bind(this);
    this.handleSaveEditAddress = this.handleSaveEditAddress.bind(this);
    this.handleSaveEditFavTeams = this.handleSaveEditFavTeams.bind(this);

    // Discard the change, restore to the old value
    this.handleCloseEditName = this.handleCloseEditName.bind(this);
    this.handleCloseEditAddress = this.handleCloseEditAddress.bind(this);
    this.handleCloseEditFavTeams = this.handleCloseEditFavTeams.bind(this);


  }

  renderName() {
    return (
      <div className="card">
      <div className="card-header">Name</div>
      <br/>
      <div className="flex-box">
      <h2>{this.state.name}</h2>

      <button className="btn"
      onClick={this.handleEditName}>
      {this.editNameBtnCap}
      </button>
      </div>
      </div>
      );
  }

  renderAddress() {
    return (
      <div className="card">
      <div className="card-header">Address</div>
      <br/>
      <div className="flex-box">
      <p className="address">
      <h2>{this.state.address}</h2>
      </p>
      <button className="btn"
      onClick={this.handleEditAddress}>
      {this.editAddressBtnCap}
      </button>
      </div>
      </div>
      );
    }

    renderFavTeams() {
      return (
      <div className="card">
      <div className="card-header">Favourite Teams</div>
      <br/>
      <div className="flex-box">
      <h2>
      <p className="address">
      {this.state.favTeams.join('\n')}
      </p></h2>
      <button className="btn"
      onClick={this.handleEditFavTeams}>
      {this.editFavTeamsBtnCap}
      </button>
      </div>
      </div>
      );
    }

    handleEditName(e) {
      // Set openModal in state, so that in EditAddressModal the display style will be true, 
      // and the Name Modal will be shown
      this.setState({
        openModal: EDIT_NAME_MODAL,
      })
      // save the old name for restoration    
      this.oldName = this.state.name
    }

    handleCloseEditName(e) {
      this.setState({
        openModal: NONE_MODAL,
        name: this.oldName,
      });
      this.props.editName(this.oldName);
    }

    handleSaveEditName(e) {
      // Update the openModal to close the modal
      this.setState({
        openModal: NONE_MODAL,
      });
      // Update the caption according to the state name
      if (this.state.name !=="") {
        this.editNameBtnCap = "Edit Name";
      } else {
        this.editNameBtnCap = "Add Name";
      }
    }

    handleNameChange(e) {
      this.setState({
        name: e.target.value,
      });
      // When the state is change, call the editName from actions/edit_name.js to save the change
      this.props.editName(e.target.value);
    }


    handleEditAddress(e) {
      this.setState({
        openModal: EDIT_ADDRESS_MODAL,
      })    
      this.oldAddress = this.address;
    }

    handleAddressChange(e) {
     this.setState({
      address: e.target.value,
    });
    this.props.editAddress(e.target.value);
  }
  handleSaveEditAddress(e) {
    this.setState({
      openModal: NONE_MODAL,
    });
    if (this.state.address !== "") {
      this.editAddressBtnCap = "Edit Address";
    } else {
      this.editAddressBtnCap = "Add Address";

    }
  }
  handleCloseEditAddress(e) {
    this.setState({
      openModal: NONE_MODAL,
      address: this.oldAddress,
    });
    this.props.editAddress(this.oldAddress);
  }
  handleEditFavTeams(e) {
    this.setState({
      openModal: EDIT_FAVTEAMS_MODAL,
    });    
    this.oldFavTeams = this.state.favTeams.slice();
  }
  handleFavTeamsChange(idx, e) {
   var favTeams = this.state.favTeams;

   favTeams[idx] = e.target.value;

   this.setState({favTeams: favTeams});

   this.props.editFavTeams(favTeams);
 }
 handleSaveEditFavTeams(e) {
  this.setState({
    openModal: NONE_MODAL,
  });
  if (this.state.favTeams.length > 0) {
    this.editAddressBtnCap = "Edit Teams";
  }
}
handleAddFavTeam(e) {
  var favTeams = this.state.favTeams.slice();
  favTeams.push("");
  this.setState({favTeams: favTeams});
  this.props.editFavTeams(this.state.favTeams);

}
handleCloseEditFavTeams(e) {
  this.setState({
    openModal: NONE_MODAL,
    favTeams: this.oldFavTeams,
  });
  this.props.editFavTeams(this.oldFavTeams);
}

render() {
  return (
  <div>

  <div className="page-header">
  Sports Magazine
  </div>


  {this.renderName()}
  {this.renderAddress()}
  {this.renderFavTeams()}

  <EditNameModal
  open={this.state.openModal}
  name={this.state.name}
  onNameChange={this.handleNameChange}
  saveName={this.handleSaveEditName}
  close={this.handleCloseEditName}/>

  <EditAddressModal
  open={this.state.openModal}
  address={this.state.address}
  onAddressChange={this.handleAddressChange}
  saveAddress={this.handleSaveEditAddress}
  close={this.handleCloseEditAddress}/>


  <EditFavTeamsModal
  open={this.state.openModal}
  favTeams={this.state.favTeams}
  onFavTeamsChange={this.handleFavTeamsChange}
  saveFavTeams={this.handleSaveEditFavTeams}
  addFavTeam={this.handleAddFavTeam}
  close={this.handleCloseEditFavTeams}/>

  </div>
  );
}
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    name: '',
    address: '',
    favTeams: [''],
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    editName: editName,
    editAddress: editAddress,
    editFavTeams: editFavTeams,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
