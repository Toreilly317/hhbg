import React from "react";
import { Input, Button } from "semantic-ui-react";

const VideoSearchBar = props => {
  return (
    <div>
      <Input
        onChange={props.onChange}
        placeholder="Search for samples"
        width={500}
      />
      <Button
        icon={"send outline"}
        content={"Search"}
        onClick={props.onSearch}
      />
    </div>
  );
};

export default VideoSearchBar;
