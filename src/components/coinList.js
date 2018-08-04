import React, { Component } from "react";
import { connect } from "react-redux";

import CoinListItem from "components/coinListItem";
import "./styles/coinList.css";

class CoinList extends Component {
  render() {
    return (
      <div className="coinList">
        {
          this.props.coins.map(e => {
            return <CoinListItem item={e} />
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
