import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

import "./styles/topBar.css";

class TopBar extends Component {
  constructor(props) {
    super(props);

    console.log("set add coin button handler state later or something");
  }

  render() {
    return (
      <div className="topBar">
        <div className="topBarContainer">
          Coin
          <div className="futureSearchBar">
          </div>
          <button
            onClick={this.handleAddCoinClick}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </div>
      </div>
    );
  }

  handleAddCoinClick = () => {
    // app state change
    this.props.handleAddCoinClick();

    // animation
    let target = ".coinList";
    let targetPos = document.getElementsByClassName(
      target.substr(1)
    )[0].scrollHeight;
    $(target).animate({scrollTop: targetPos}, "slow");
  }
}

export default TopBar;
