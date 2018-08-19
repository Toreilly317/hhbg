import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { addVideoToStash } from "../../app/actions/stashActions";
import CrateList from "./CrateList";
import VideoList from "../VideoSearch/VideoList";

class CratePage extends Component {
  state = {
    selectedVideo: null
  };

  handleSelectVideo = selectedVideo => () => {
    this.setState({
      selectedVideo
    });
  };

  handleOnDragStart = e => {
    e.dataTransfer.setData("selectedVideo", this.state.selectedVideo);
    e.dataTransfer.setData("selectedVideoCrateId", this.state.selectedCrate.id);
  };

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={10}>
            <VideoList
              videos={this.state.selectedCrate.videos}
              onSelectVideo={this.handleSelectVideo}
              onDragStart={this.handleOnDragStart}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <CrateList
              onDrop={this.handleOnDrop}
              onSelectCrate={this.handleSelectCrate}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapState = state => ({
  crates: state.crates
});

const actions = {
  addVideoToStash
};

export default connect(
  mapState,
  actions
)(CratePage);
