import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        title: "",
        date: "",
        city: "",
        venue: "",
        hostedBy: ""
      }
    };
  }

  static getDerivedStateFromProps(props) {
    if (props.selectedEvent) {
      return {
        event: props.selectedEvent
      };
    }
  }

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.onUpdateEvent(this.state.event);
    } else {
      this.props.handleCreateEvent(this.state.event);
    }
  };

  onInputChange = evt => {
    const newEvent = Object.assign({}, this.state.event);
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { event } = this.state;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.onInputChange}
              value={event.title}
              name="title"
              placeholder="Event Title"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.onInputChange}
              value={event.date}
              name="date"
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={event.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={event.venue}
              onChange={this.onInputChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={event.hostedBy}
              onChange={this.onInputChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit" onClick={this.onFormSubmit}>
            Submit
          </Button>
          <Button type="button" onClick={this.props.toggleForm}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
