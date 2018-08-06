import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";

import * as actions from "actions";
import CoinList from "components/coinList";
import TopBar from "components/topBar";
import "./styles/app.css";

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faSave, faTimes);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <TopBar />
        <CoinList />
      </div>
    );
  }

  componentWillMount() {
    this.requestCoinData();
  }

  requestCoinData = () => {
    // only make request if not in test environment
    // (there's a better way to do this)
    if (!this.props.testCoins)
    {
      axios.get("https://api.berminal.com/read_coin_desc?desc_pull_number=100")
        .then(resp => {
          this.props.initCoins(resp.data);
        });
    }
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins
  };
}

export default connect(mapStateToProps, actions)(App);
