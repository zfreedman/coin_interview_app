import React, { Component } from "react";

import "./styles/coinListItemEdit.css";

class CoinListItemEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  render() {
    // this has autogrow by default
    // <div
    // contentEditable="true"
    // onKeyDown={this.onChange}
    // >
    // {this.state.value}
    // </div>
    return (
      <textarea value={this.state.value} onChange={this.handleChange} />
    );
  }

  componentDidMount() {
    this.props.handleChange(this.state.value);
  }

  handleChange = e => {
    this.setState({value: e.target.value});
    this.props.handleChange(e.target.value);
  };
}

export default CoinListItemEdit;
