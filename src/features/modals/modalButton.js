import React from "react";
import { Button } from "semantic-ui-react";
import { openModal } from "./actions";
import { connect } from "react-redux";

const OpenModalButton = ({ openModal, ...props }) => {
  return (
    <Button
      onClick={() => openModal(props.modalType)}
      color={props.color}
      icon={props.icon}
      content={props.content}
    />
  );
};

const actions = {
  openModal
};

export default connect(
  null,
  actions
)(OpenModalButton);
