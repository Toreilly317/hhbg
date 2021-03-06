import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";
import axios from "axios";
import KEYS from "../../KEYS";

//components
import VideoSearchBar from "./VideoSearchBar";
import VideoList from "./VideoList";
import { connect } from "react-redux";
import { setCurrentVideo } from "../../app/actions/currentVideoActions";

class VideoSearchDashboard extends Component {
  state = {
    searchTerm: "",
    youtubeVideos: [],
    loading: false,
    nextPageToken: null,
    selectedVideo: null,

    //keep videos in search during/after new search
    lockedVideos: []
  };

  formatVideo = video => ({
    videoId: video.id.videoId,
    source: "youtube",
    samples: [],
    thumbnails: video.snippet.thumbnails,
    title: video.snippet.title,
    description: video.snippet.description,
    foundAt: Date.now(),
    isStashed: false
  });

  searchYoutube = async () => {
    const ROOT_URL = "https://www.googleapis.com/youtube/v3/search";

    const params = {
      key: KEYS.youtube,
      q: this.state.term,
      maxResults: 20,
      type: "video",
      videoEmbeddable: true,
      part: "snippet"
    };

    //take data object from response
    const { data } = await axios.get(ROOT_URL, { params });
    const { items, nextPageToken } = data;

    //TODO check if stashed. if stashed replace the video with the stashed one
    const formattedVideos = items.map(item => this.formatVideo(item));

    this.setState({
      ...this.state,
      youtubeVideos: formattedVideos,
      nextPageToken
    });

    //sync new found videos to local storage
    localStorage.setItem(
      "youtubeVideos",
      JSON.stringify(this.state.youtubeVideos)
    );
  };

  handleSearchInputChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  handleSelectVideo = selectedVideo => () => {
    this.props.setCurrentVideo(selectedVideo);
  };

  render() {
    return (
      <div>
        <Container>
          <Segment>
            <VideoSearchBar
              onSearch={this.searchYoutube}
              onChange={this.handleSearchInputChange}
            />
            <VideoList
              videos={this.state.youtubeVideos}
              onSelectVideo={this.handleSelectVideo}
            />
          </Segment>
        </Container>
      </div>
    );
  }
}

const actions = {
  setCurrentVideo
};

export default connect(
  null,
  actions
)(VideoSearchDashboard);
