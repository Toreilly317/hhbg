import React, { Component, Fragment as Frag } from "react";

//npm modules
import { Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

//components
import VideoSearchDashboard from "../../features/VideoSearch/VideoSearchDashBoard";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import UserDetailsPage from "../../features/user/UserDetails/UserDetailsPage";
import UserDashboard from "../../features/user/UserDashboard/UserDashboard";
import EventDetailedPage from "../../features/event/EventDetails/EventDetailsPage";
import HomePage from "../../features/home/HomePage";
import ModalManager from "../../features/modals/ModalManager";
import StashPage from "../../features/stash/StashPage";
import SampleWidget from "../../features/SampleWidget/SampleWidget";

import { connect } from "react-redux";

const notFoundPage = () => <h1>So uhhh....howd you get here?</h1>;

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }
  }
  render() {
    return (
      <Frag>
        <ModalManager />
        <Container className="main">
          <NavBar history={this.props.history} />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/events" component={EventDashboard} />
            <Route path="/event/:id" component={EventDetailedPage} />
            <Route path="/users" component={UserDashboard} />
            <Route path="/search" component={VideoSearchDashboard} />
            <Route path="/profile/:id" component={UserDetailsPage} />
            <Route path="/settings" component={SettingsDashboard} />
            <Route path="/createEvent" component={EventForm} />
            <Route path="/crates" component={StashPage} />
            <Route component={notFoundPage} />
          </Switch>
        </Container>
        <SampleWidget />
      </Frag>
    );
  }
}

const mapState = state => ({
  currentVideo: state.currentVideo
});
export default connect(
  mapState,
  null
)(App);
