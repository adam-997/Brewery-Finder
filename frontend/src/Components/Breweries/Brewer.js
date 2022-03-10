import React, { Component } from "react";
import { baseUrl } from "../../Shared/baseUrl";

class Brewer extends Component {
  state = {
    brewery: this.props.location.state,
  };
  // componentDidMount() {
  // const { id } = this.props.match.params;

  //   fetch(baseUrl + "/breweries/1").then((brewery) => {
  //     this.setState(() => ({ brewery }));
  //     console.log(this.state.brewery);
  //   });
  // }
  render() {
    console.log(this.state.brewery);
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Brewery Details</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Brewery Id is: {this.state.brewery.brewery.breweryId}
          <br />
          Brewery name is: {this.state.brewery.brewery.name}
          <br />
          Brewery city is: {this.state.brewery.brewery.city}
          <br />
          Brewery address is: {this.state.brewery.brewery.address}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Selection of Beers</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          Beers go here
        </div>
      </>
    );
  }
}

export default Brewer;
