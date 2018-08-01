import React from "react";

import { Label, Menu } from "semantic-ui-react";

const CrateListItem = props => {
  const handleOnDragOver = e => {
    e.preventDefault();
  };

  const handleOnDrop = e => {
    const selectedVideo = e.dataTransfer.getData("selectedVideo");
    const selectedVideoCrateId = e.dataTransfer.getData("selectedVideoCrateId");
    const targetCrateId = props.crate.id;

    console.log(selectedVideo, selectedVideoCrateId, targetCrateId);
  };

  return (
    <Menu.Item
      droppable
      onClick={props.onSelectCrate(props.crate)}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <Label>{props.crate.videos.length}</Label>
      {props.crate.name}
    </Menu.Item>
  );
};

export default CrateListItem;
