import React from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

const VideoListItem = ({ video, onSelectVideo, onDragStart }) => {
  return (
    <Segment
      draggable
      onMouseDown={onSelectVideo(video)}
      onDragStart={onDragStart}
    >
      <Grid>
        <Grid.Column width={6} style={{ padding: 0 }}>
          <Image
            height="100px"
            width="100px"
            src={video.snippet.thumbnails.high.url}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <p> {video.snippet.title}</p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default VideoListItem;
