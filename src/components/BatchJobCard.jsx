import React, { Component } from "react";
import UpdateTS from "./UpdateTS";

class BatchJobCard extends Component {
  state = {
    failedJobs: [],
    lastUpdated: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.fetchJobsStatus();
  }

  render() {
    return (
      <div className="card">
        <div className="d-flex justify-content-between">
          <h4>{this.props.orderType}</h4>
          <UpdateTS lastUpdated={this.state.lastUpdated} />
        </div>
        {this.state.failedJobs.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Job</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.failedJobs.map(job => (
                <tr key={job.jobName}>
                  <td>{job.jobName}</td>
                  <td>{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    );
  }

  fetchJobsStatus = () => {
    fetch("http://localhost:8080/api/jobs")
      .then(response => response.json())
      .then(data =>
        this.setState({
          failedJobs: data.filter(job => job.status === "FAILED"),
          lastUpdated: new Date().toLocaleTimeString()
        })
      );
  };
}
export default BatchJobCard;
