import React, { Component } from "react";
import OrderMetricsCard from "./OrderMetricsCard";

class OrderMetrics extends Component {
  state = {
    orderMetrics: {
      autoCount: {},
      fleetCount: {},
      retailCount: {}
    },
    lastUpdated: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.fetchOrderMetrics();
    this.timer = setInterval(() => this.fetchOrderMetrics(), 5000);
  }

  render() {
    return (
      <div className="col leftCol">
        <OrderMetricsCard
          orderType="auto"
          orderCount={this.state.orderMetrics.autoCount}
          lastUpdated={this.state.lastUpdated}
        />
        <OrderMetricsCard
          orderType="fleet"
          orderCount={this.state.orderMetrics.fleetCount}
          lastUpdated={this.state.lastUpdated}
        />
        <OrderMetricsCard
          orderType="retail"
          orderCount={this.state.orderMetrics.retailCount}
          lastUpdated={this.state.lastUpdated}
        />
      </div>
    );
  }

  fetchOrderMetrics = () => {
    fetch("http://localhost:8080/api/orders")
      .then(response => response.json())
      .then(data =>
        this.setState({
          orderMetrics: data,
          lastUpdated: new Date().toLocaleTimeString()
        })
      );
  };

  componentWillUnmount() {
    this.timer = null;
  }
}

export default OrderMetrics;
