import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

// components
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";

//npm modules
import { NavLink, Link } from "react-router-dom";

//HOC
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    this.props.history.push("/");
  };

  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header as={NavLink} to="/">
            <img src="/assets/logo.png" alt="logo" />
            HHBG
          </Menu.Item>
          <Menu.Item as={NavLink} to="/events" name="Events" />
          <Menu.Item as={NavLink} to="/search" name="Search" />
          <Menu.Item as={NavLink} to="/crates" name="crates" />
          <Menu.Item as={NavLink} to="/users" name="LeaderBoards" />

          <Menu.Item>
            <Button
              as={Link}
              to={"/createEvent"}
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          {authenticated ? (
            <SignedInMenu onSignOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu onSignIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
