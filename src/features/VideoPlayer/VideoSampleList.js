import React from "react";
import { connect } from "react-redux";

export default () => {
  return <div />;
};

const mapState = state => ({
  stash: state.stash
});

const actions = {
  addSampleToRecord
};
