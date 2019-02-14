import React, { Component } from "react";
import UpdateTS from "./UpdateTS";
import FailureTable from "./FailureTable";

class OrderMetricsCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="d-flex justify-content-between">
          <h4>{this.props.orderType}</h4>
          <UpdateTS lastUpdated={this.props.lastUpdated} />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <p>Total: {this.props.orderCount.total}</p>
            <p>Completed: {this.props.orderCount.completed}</p>
            <p>Processing: {this.props.orderCount.processing}</p>
            <p>Failed: {this.props.orderCount.failed}</p>
            <p>Internal Errors: {this.props.orderCount.internal}</p>
          </div>
          <div className="failureTable">
            <FailureTable orderType={this.props.orderType} />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderMetricsCard;
