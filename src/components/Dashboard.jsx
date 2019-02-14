import React, { Component } from "react";
import OrderMetrics from "./OrderMetrics";
import QueueCard from "./QueueCard";
import HealthCard from "./HealthCard";
import BatchJobCard from "./BatchJobCard";

class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <OrderMetrics />
          <div className="col rightCol">
            <QueueCard orderType="QUEUES" />
            <HealthCard orderType="HEALTH" />
            <BatchJobCard orderType="BATCH JOB" />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
