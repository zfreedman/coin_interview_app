import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/coinList.css";

class CoinList extends Component {
  render() {
    return (
      <div className="coinList">
        {
          this.props.coins.map(e => {
            return (
              <div key={e["coin_name"]}>
                {e["coin_name"]}
              </div>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coins: state.coins
  };
}

export default connect(mapStateToProps)(CoinList);
