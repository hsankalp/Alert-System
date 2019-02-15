import React, { Component } from "react";
import UpdateTS from "./UpdateTS";

class AppHealth extends Component {
  state = {
    healthCode: 0,
    lastUpdated: new Date().toLocaleTimeString(),
    background: "redAlert"
  };

  componentDidMount() {
    this.checkAppHealth();
    this.timer = setInterval(() => this.checkAppHealth(), 5000);
  }

  render() {
    return (
      <div
        className={
          "appHealth d-flex justify-content-between " + this.state.background
        }
      >
        <div className="p-1">{this.props.appName}</div>
        <div className="p-1">
          <UpdateTS lastUpdated={this.state.lastUpdated} />
        </div>
      </div>
    );
  }

  checkAppHealth = () => {
    fetch("http://localhost:8080/api/health")
      .then(response => {
        if (!response.ok) {
          throw Error();
        }
        return response.text();
      })
      .then(data => {
        if (data == 4) {
          throw Error();
        }
        return this.setState({
          healthCode: data,
          lastUpdated: new Date().toLocaleTimeString(),
          background: ""
        });
      })
      .catch(() =>
        this.setState({
          lastUpdated: new Date().toLocaleTimeString(),
          background: "redAlert"
        })
      );
  };

  componentWillUnmount() {
    this.timer = null;
  }
}

export default AppHealth;
