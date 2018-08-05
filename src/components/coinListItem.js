import React, { Component } from "react";

import "./styles/coinListItem.css";

class CoinListItem extends Component {
  // main url: website
  /*
  other urls:
    block_explorer
    twitter
    blog
    telegram
    reddit
    white_paper
  */

  constructor(props){
    super(props);

    this.tickerURL = "https://coinmarketcap.com/currencies/";
  }

  render() {
    let e = this.props.item;

    return (
      <div className="coinListItem">
        <div className="coinListItemContainer">
          <div className="coinListItemName">
            <button>
              {e["coin_name"]}
            </button>
          </div>

          <div className="coinListItemInfo">
            {
              e["summary"].length > 100
                ? `${e["summary"].substr(0, 97)}...`
                : e["summary"]
            }
          </div>

          <div className="coinListItemTicker">
            {
              <a
                href={`${this.tickerURL}${e["ticker"]}`}
                target="_blank"
              >
                {e["ticker"]}
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CoinListItem;
