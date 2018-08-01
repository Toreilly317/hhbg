import React from "react";
import { Button } from "semantic-ui-react";

export default props => {
  return (
    <div>
      <Button
        icon={props.isPlaying ? "play" : "pause"}
        large
        onClick={props.play()}
      />
    </div>
  );
};
