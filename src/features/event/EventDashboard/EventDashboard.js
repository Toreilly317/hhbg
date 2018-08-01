import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import EventList from "./EventList/EventList";
import EventForm from "../EventForm/EventForm";
import { connect } from "react-redux";
import eventData from "./eventData";
import cuid from "cuid";
import {
  createEvent,
  updateEvent,
  deleteEvent
} from "../../../app/actions/eventActions";

class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEventr: eventData[0]
  };

  handleOpenEvent = eventToUpdate => () => {
    this.setState({
      selectedEvent: eventToUpdate,
      isOpen: true
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.props.updateEvent(updatedEvent);
    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  toggleShowEventForm = () => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
      selectedEvent: null
    });
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            onOpenEvent={this.handleOpenEvent}
            onDeleteEvent={this.handleDeleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            content="Create Event"
            positive
            onClick={this.toggleShowEventForm}
          />
          {this.state.isOpen && (
            <EventForm
              onUpdateEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              handleCreateEvent={this.handleCreateEvent}
              toggleForm={this.toggleShowEventForm}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapState = state => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};
export default connect(
  mapState,
  actions
)(EventDashboard);
