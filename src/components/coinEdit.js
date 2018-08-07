import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

import { editCoin } from "actions";
import "components/styles/coinEdit.css";

class CoinEdit extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: this.props.editing || false,
      editObj: {...(this.props.item || this.getBlankCoinItem())}
    };
  };

  render() {
    let e = this.props.item;
    return (
      <div className="coinEdit">
        {this.renderControlButtons()}

        <div className="coinEditContainer">
          {this.renderLeft()}
        </div>
      </div>
    );
  }

  getBlankCoinItem = () => {
    const newCoinObj = {...this.props.coins[0]};

    // this is horrible practice but makes the id uniqueness process faster...
    // coins with a negative ID correspond to user-generated coins
    newCoinObj["id"] = -(this.props.coins.length);

    // change 1,000 BTC to 1,000
    let tickerBasedKeys = ["circulation", "supply", "amount_raised"];
    tickerBasedKeys.forEach(e => {
      newCoinObj[e] = newCoinObj[e].replace(newCoinObj["ticker"], "")
    });

    // set current date
    let date = new Date();
    newCoinObj["launch_date"] = (
      date.getMonth() + 1
      + "/"
      + date.getDate()
      + "/"
      + date.getFullYear()
    );

    return newCoinObj;
  };

  handleCancelClick = () => {
    this.setState({editing: false});
  };

  handleEditClick = () => {
    this.setState({editing: true});
  };

  handleSaveClick = () => {
    this.props.item
      // edit event
      ? this.props.editCoin(
          this.props.item.id,
          this.props.editObj
      )
      // add event
      : 0

      this.setState({
        editing: false
      });
  };

  renderControlButtons = () => {
    return (
      <div className="coinEditButtonContainer">
        {
          !this.state.editing
            ? (
                <button
                  onClick={this.handleEditClick}
                >
                  <FontAwesomeIcon icon="edit" />
                </button>
              )
            : (
                [
                  ["times", this.handleCancelClick],
                  ["save", this.handleSaveClick]
                ].map(tup => {
                  return (
                    <button onClick={tup[1]} key={tup[0]}>
                      <FontAwesomeIcon icon={tup[0]} />
                    </button>
                  )
                })
              )
        }
      </div>
    );
  };

  renderLeft() {
    let e = this.props.item || this.state.editObj;
    return (
      <div className="coinListItemName">
        {
          !this.state.editing
          ? <button onClick={this.handleCoinClick}>
              {e["coin_name"]}
            </button>
          : <div className="coinEditNameContainer">
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coins: state.coins
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addCoin: (coinObj) =>
    editCoin: (coinID, editObj) => dispatch(editCoin(coinID, editObj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinEdit);
