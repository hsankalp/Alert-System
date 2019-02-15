import React, { Component } from "react";
import UpdateTS from "./UpdateTS";

class QueueCard extends Component {
  state = {
    queuesList: [],
    lastUpdated: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.getQueuesInfo();
    this.timer = setInterval(() => this.getQueuesInfo(), 5000);
  }

  render() {
    return (
      <div className={"card " + this.getBackground()}>
        <div className="d-flex justify-content-between">
          <h4>{this.props.orderType}</h4>
          <UpdateTS lastUpdated={this.state.lastUpdated} />
        </div>
        {this.state.queuesList.length === 0 ? null : (
          <table>
            <thead>
              <tr>
                <th>Queue</th>
                <th>Ready</th>
                <th>Unacknowledged</th>
              </tr>
            </thead>
            <tbody>
              {this.state.queuesList.map(queue => (
                <tr key={queue.name}>
                  <td>{queue.name}</td>
                  <td>{queue.messagesReady}</td>
                  <td>{queue.messagesUnacknowledged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  getQueuesInfo = () => {
    fetch("http://localhost:8080/api/queues")
      .then(response => response.json())
      .then(data =>
        this.setState({
          queuesList: data.filter(queue => queue.messagesReady >= 100),
          lastUpdated: new Date().toLocaleTimeString()
        })
      );
  };

  getBackground() {
    return this.state.queuesList.length > 0 ? "redAlert" : "";
  }

  componentWillUnmount() {
    this.timer = null;
  }
}
export default QueueCard;
