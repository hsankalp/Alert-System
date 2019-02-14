import React, { Component } from "react";
import OrderMetricsCard from "./OrderMetricsCard";

class OrderMetrics extends Component {
  state = {
    orderMetrics: {
      autoCount: {},
      fleetCount: {},
      retailCount: {}
    },
    lastUpdated: "Unknown"
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/orders")
      .then(response => response.json())
      .then(data =>
        this.setState({
          orderMetrics: data,
          lastUpdated: new Date().toLocaleTimeString()
        })
      );
  }

  render() {
    return (
      <div className="col leftCol">
        <OrderMetricsCard
          orderType="AUTO"
          orderCount={this.state.orderMetrics.autoCount}
          lastUpdated={this.state.lastUpdated}
        />
        <OrderMetricsCard
          orderType="FLEET"
          orderCount={this.state.orderMetrics.fleetCount}
          lastUpdated={this.state.lastUpdated}
        />
        <OrderMetricsCard
          orderType="RETAIL"
          orderCount={this.state.orderMetrics.retailCount}
          lastUpdated={this.state.lastUpdated}
        />
      </div>
    );
  }
}

export default OrderMetrics;
