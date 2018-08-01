import React from "react";
import { Grid } from "semantic-ui-react";

import EventDetailsHeader from "./EventDetailsHeader";
import EventDetailsInfo from "./EventDetailsInfo";
import EventDetailsSidebar from "./EventDetailsSidebar";
import EventDetailsChat from "./EventDetailsChat";

const EventDetailsPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailsHeader />
        <EventDetailsInfo />
        <EventDetailsChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailsSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailsPage;
