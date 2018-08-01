import React, { Component } from "react";
import { Grid, Button, Input } from "semantic-ui-react";

class NewSampleForm extends Component {
  state = {
    artists: "",
    title: "",
    record: "",
    year: "",
    samples: []
  };

  componentDidMount() {
    this.getArtistAndTitile();
  }

  getArtistAndTitile = () => {
    console.log(this.props.video);
  };

  render() {
    return (
      <Grid>
        <Grid.Column width={2}>
          <Button icon="exchange" />
        </Grid.Column>
        <Grid.Column width={14}>
          <Input type="text" value={this.state.artist} />
          <Input type="text" value={this.state.artist} />
          <Input type="text" value={this.state.artist} />
          <Input type="text" value={this.state.artist} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default NewSampleForm;
