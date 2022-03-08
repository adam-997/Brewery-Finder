import React, { Component } from "react";

class Brewer extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h1>Brewer id is {id}</h1>
      </div>
    );
  }
}

export default Brewer;
