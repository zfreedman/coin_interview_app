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
    return this.props.activeItem
      ? this.renderListItemActive()
      : this.renderListItem();
  }

  handleClick = () => this.props.handleClick(this.props.item.id);

  renderLinks = () => {
    let link_keys = [
      "website", "source_code", "block_explorer", "twitter", "blog",
      "telegram", "reddit", "white_paper"
    ];

    let links = {};
    link_keys.forEach(e => links[e] = this.props.item[e]);

    // iterate over key value pairs, key is label, value is url
    return Object.entries(links).map(kvp => {
      return (
        <div key={kvp[0]}>
          <a href={kvp[1]} target="_blank">
            {
              this.titleCaseStr(kvp[0])
            }
          </a>
        </div>
      );
    });
  };

  renderInvestors = () => {
    let investors = this.props.item["active_investors"].split(", ");

    return investors.map(e => {
      return (
        <div key={e}>{e}</div>
      );
    });
  };

  renderListItemActive = () => {
    let e = this.props.item;
    return (
      <div className="coinListItemActive">
        <div className="coinListItemName">
          <button onClick={this.handleClick}>
            {e["coin_name"]}
          </button>
        </div>

        <div className="coinListItemActiveMiddle">
          <div className="coinListItemActiveLinks">
            {this.renderLinks()}
          </div>
          <div>
            {
              e["summary"]
            }
          </div>
          <div className="coinListItemActiveStats">
            {this.renderStats()}
          </div>
          {
            this.props.item["active_investors"] === "N/A"
              ? ""
              : (
                  <div className="coinListItemActiveInvestors">
                    <div className="coinListItemActiveInvestorTitle">
                      Investors
                    </div>
                    {this.renderInvestors()}
                  </div>
                )
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
    );
  };

  renderListItem = () => {
    let e = this.props.item;
    return (
      <div className="coinListItem">
        <div className="coinListItemContainer">
          <div className="coinListItemName">
            <button onClick={this.handleClick}>
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
  };

  renderStats = () => {
    let stat_keys = [
      "circulation", "supply", "launch_date", "amount_raised", "minable"
    ];

    let stats = {};
    stat_keys.forEach(e => stats[e] = this.props.item[e]);

    return Object.entries(stats).map(kvp => {
      return (
        <div key={kvp[0]}>
          <span className="coinListItemActiveStatTitle">
            {`${this.titleCaseStr(kvp[0])}:`}
          </span>
          {
            ` ${kvp[1]}`
          }
        </div>
      );
    });
  };

  titleCaseStr = (str) => {
    return str.split("_").map(el => {
      return el.charAt(0).toUpperCase() + el.substr(1)
    }).join(" ")
  };
}

export default CoinListItem;
