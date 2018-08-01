import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addVideoToStash } from "./actions";

const StashButton = props => {
  return <button>Click me</button>;
};

const actions = {
  addVideoToStash
};

export default connect(
  null,
  actions
)(StashButton);
