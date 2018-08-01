import React, { Component, Fragment as Frag } from "react";
import { Modal, Input, Button } from "semantic-ui-react";
import { addVideoToStash } from "../../crates/actions";

import { connect } from "react-redux";

class AddCrate extends Component {
  state = {
    crateName: ""
  };

  handleInputChange = e => {
    this.setState({
      crateName: e.target.value
    });
  };

  handleSaveCrate = () => {
    this.props.createCrate(this.state.crateName);
    this.props.closeModal();
  };

  render() {
    return (
      <Frag>
        <Modal closeIcon="close" open={true} onClose={this.props.closeModal}>
          <Modal.Header>Add New Crate</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Input
                onChange={this.handleInputChange}
                placeholder="New Crate Name..."
              />
              <Button
                content="Save New Crate"
                icon="down arrow"
                onClick={this.handleSaveCrate}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Frag>
    );
  }
}

const actions = {
  addVideoToStash
};

export default connect(
  null,
  actions
)(AddCrate);
