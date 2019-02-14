import React, { Component } from "react";
import UpdateTS from "./UpdateTS";

class BatchJobCard extends Component {
  state = {
    batchjobs: [],
    lastUpdated: "Unknown"
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/jobs")
      .then(response => response.json())
      .then(data =>
        this.setState({
          batchjobs: data,
          lastUpdated: new Date().toLocaleTimeString()
        })
      );
  }
  render() {
    return (
      <div className="card">
        <div className="d-flex justify-content-between">
          <h4>{this.props.orderType}</h4>
          <UpdateTS lastUpdated={this.state.lastUpdated} />
        </div>
        <table>
          <thead>
            <tr>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.batchjobs
              .filter(job => job.status === "FAILED")
              .map(job => (
                <tr key={job.jobName}>
                  <td>{job.jobName}</td>
                  <td>{job.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default BatchJobCard;
