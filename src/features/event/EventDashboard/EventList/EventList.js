import React, { Component, Fragment } from "react";

import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onOpenEvent, onDeleteEvent } = this.props;
    return (
      <Fragment>
        {events.map(event => {
          return (
            <EventListItem
              event={event}
              onOpenEvent={onOpenEvent}
              onDeleteEvent={onDeleteEvent}
              key={event.id}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default EventList;
