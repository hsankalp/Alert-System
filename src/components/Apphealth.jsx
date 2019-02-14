import React, { Component } from "react";
import UpdateTS from "./UpdateTS";

class AppHealth extends Component {
  state = {
    healthCode: 0,
    lastUpdated: "Unknown"
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/health")
      .then(response => response.text())
      .then(data =>
        this.setState({
          healthCode: data,
          lastUpdated: new Date().toLocaleTimeString()
        })
      );
  }

  render() {
    return (
      <div
        className={
          "appHealth d-flex justify-content-between " + this.getBackround()
        }
      >
        <div className="p-1">{this.props.appName}</div>
        <div className="p-1">
          <UpdateTS lastUpdated={this.state.lastUpdated} />
        </div>
      </div>
    );
  }

  getBackround() {
    return this.state.healthCode == 4 ? "redBackground" : "";
  }
}

export default AppHealth;
