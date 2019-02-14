import React, { Component } from "react";

class FailureTable extends Component {
  state = {
    failures: []
  };
  componentDidMount() {
    fetch("http://localhost:8080/api/failure?orderType=" + this.props.orderType)
      .then(response => response.json())
      .then(data =>
        this.setState({
          failures: data
        })
      );
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Count</th>
            <th>Failure Reason</th>
          </tr>
        </thead>
        <tbody>
          {this.state.failures.map(failure => (
            <tr key={failure.failureReason}>
              <td>{failure.count}</td>
              <td>{failure.failureReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default FailureTable;
