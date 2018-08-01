import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Menu } from "semantic-ui-react";

import CrateListItem from "./CrateListItem";
import OpenModalButton from "../modals/modalButton";

class CrateList extends Component {
  state = {
    initialCrates: [],
    crates: this.props.crates,
    searchTerm: null
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      initialCrates: nextProps.crates
    };
  }

  onInputChange = e => {
    if (e.target.value !== "") {
      this.setState({
        searchTerm: e.target.value,
        crates: this.updatedFilteredCrates(e.target.value)
      });
    } else {
      this.setState({
        crates: [...this.state.initialCrates]
      });
    }
  };

  updatedFilteredCrates = searchTerm => {
    const { initialCrates } = this.state;
    const filterSearchedTerm = crate => {
      const crateName = crate.name.toLowerCase();
      const term = searchTerm.toLowerCase();
      return crateName.includes(term);
    };
    return [...initialCrates.filter(filterSearchedTerm)];
  };

  render() {
    return (
      <div>
        <Menu vertical>
          {this.state.crates.map(crate => {
            return (
              <CrateListItem
                crate={crate}
                key={crate.id}
                onSelectCrate={this.props.onSelectCrate}
              />
            );
          })}

          <Menu.Item>
            <Input
              icon="search"
              placeholder="Search crates..."
              onChange={this.onInputChange}
            />
          </Menu.Item>
        </Menu>

        <OpenModalButton
          icon="plus"
          color="green"
          content="Add"
          modalType="AddCrate"
        />
      </div>
    );
  }
}

const mapState = state => ({
  crates: state.crates
});

export default connect(
  mapState,
  null
)(CrateList);
