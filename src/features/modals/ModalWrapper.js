import React from "react";
import { closeModal } from "./actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { Modal } from "semantic-ui-react";

const Wrapper = props => {
  return (
    <Modal closeIcon="close" open={true} onClose={closeModal}>
      {props.children}
    </Modal>
  );
};

const ModalWrapper = WrappedComponent =>
  compose(
    connect(
      null,
      actions
    ),
    Wrapper,
    WrappedComponent
  );

const actions = {
  closeModal
};

export default ModalWrapper;
