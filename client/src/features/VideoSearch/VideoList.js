import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import VideoListItem from "./VideoListItem";

class VideoList extends Component {
  render() {
    return (
      <Segment>
        {this.props.videos &&
          this.props.videos.map(video => {
            return (
              <VideoListItem
                onSelectVideo={this.props.onSelectVideo}
                key={video.videoId}
                video={video}
                onDragStart={this.props.onDragStart}
              />
            );
          })}
      </Segment>
    );
  }
}

export default VideoList;
