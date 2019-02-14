import React, { Component } from "react";
import UpdateTS from "./UpdateTS";

class QueueCard extends Component {
  state = {
    queuesList: [],
    lastUpdated: "Unknown"
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/queues")
      .then(response => response.json())
      .then(data =>
        this.setState({
          queuesList: data,
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
              <th>Queue</th>
              <th>Ready</th>
              <th>Unacknowledged</th>
            </tr>
          </thead>
          <tbody>
            {this.state.queuesList
              .filter(queue => queue.messagesReady >= 100)
              .map(queue => (
                <tr key={queue.name}>
                  <td>{queue.name}</td>
                  <td>{queue.messagesReady}</td>
                  <td>{queue.messagesUnacknowledged}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default QueueCard;
