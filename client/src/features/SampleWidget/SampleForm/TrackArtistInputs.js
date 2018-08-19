import React from "react";
import {
  SampleFormContainer,
  SampleActionButton,
  SampleformInputGroup
} from "./components";

export default () => {
  return (
    <SampleFormContainer>
      <sampleActionButton>
        <button class="actionButton">Flip</button>
      </sampleActionButton>
      <SampleformInputGroup>
        <input type="text" placeholder="Artist" />
        <input type="text" placeholder="Title" />
      </SampleformInputGroup>
    </SampleFormContainer>
  );
};
