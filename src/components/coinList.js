import React, { Component } from "react";
import { connect } from "react-redux";

import CoinListItem from "components/coinListItem";
import "./styles/coinList.css";

class CoinList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeID: undefined
    };
  }

  render() {
    return (
      <div className="coinList">
        {
          this.props.coins.map(e => {
            return (
              <CoinListItem
                item={e}
                activeItem={this.state.activeID === e.id}
                handleClick={this.handleListItemClick}
              />
            );
          })
        }
      </div>
    );
  }

  handleListItemClick = (id) => {
    this.setState({
      activeID: this.state.activeID === id ? undefined : id
    });
  };
}

function mapStateToProps(state) {
  return {
    coins: state.coins
  };
}

export default connect(mapStateToProps)(CoinList);
