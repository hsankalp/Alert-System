import React, { Component } from "react";

class UpdateTS extends Component {
  state = {};
  render() {
    return <small>Last Updated: {this.props.lastUpdated}</small>;
  }
}

export default UpdateTS;
