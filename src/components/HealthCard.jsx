import React, { Component } from "react";
import AppHealth from "./Apphealth";

class HealthCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <h4>{this.props.orderType}</h4>
        <div className="row">
          <div className="col leftCol">
            <AppHealth appName="Offer Manager" />
            <AppHealth appName="Subscription Orchestration" />
            <AppHealth appName="Account Manager" />
          </div>

          <div className="col rightCol">
            <AppHealth appName="Subscription Services" />
            <AppHealth appName="Order Manager" />
            <AppHealth appName="Provisioning" />
          </div>
        </div>
      </div>
    );
  }
}
export default HealthCard;
