import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { addVideoToStash } from "../../app/actions/stashActions";

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
