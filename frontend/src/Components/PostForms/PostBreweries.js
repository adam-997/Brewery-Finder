import React, { Component } from "react";
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";
class PostBreweries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      zipcode: "",
      phoneNumber: "",
      description: "",
      breweryLogoUrl: "",
      websiteUrl: "",
      userId: "",
      hours: "",
      lat: "",
      lng: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(baseUrl + "/breweries", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      name,
      address,
      city,
      zipcode,
      phoneNumber,
      description,
      breweryLogoUrl,
      websiteUrl,
      userId,
      hours,
      lat,
      lng,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>address: </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>city: </label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>zipcode: </label>
            <input
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>phoneNumber: </label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>description: </label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>breweryLogoUrl: </label>
            <input
              type="text"
              name="breweryLogoUrl"
              value={breweryLogoUrl}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>websiteUrl: </label>
            <input
              type="text"
              name="websiteUrl"
              value={websiteUrl}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>userId: </label>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>hours: </label>
            <input
              type="text"
              name="hours"
              value={hours}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>lat: </label>
            <input
              type="text"
              name="lat"
              value={lat}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>lng: </label>
            <input
              type="text"
              name="lng"
              value={lng}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostBreweries;
