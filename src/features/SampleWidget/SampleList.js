import React from "react";
import SampleListItem from "./SampleListItem";

export default props => {
  return (
    <div>
      <h1>SampleList</h1>
      <div>
        {props.samples.forEach(sample => <SampleListItem sample={sample} />)}
      </div>
    </div>
  );
};
