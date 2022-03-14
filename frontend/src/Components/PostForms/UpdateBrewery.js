import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import { Modal, Form, Input, Button } from "antd";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

class UpdateBrewery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweryOwnerId: this.props.breweryOwnerId,
      breweryId: this.props.breweryId,
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      zipcode: this.props.zipcode,
      phoneNumber: this.props.phoneNumber,
      description: this.props.description,
      breweryLogoUrl: this.props.breweryLogoUrl,
      websiteUrl: this.props.websiteUrl,
      userId: this.props.user.userId,
      hours: this.props.hours,
      lat: 0,
      lng: 0,
    };
  }

  putNewBrewery() {
    const breweryObject = {
      breweryId: this.state.breweryId,
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      zipcode: Number(this.state.zipcode),
      phoneNumber: Number(this.state.phoneNumber),
      description: this.state.description,
      breweryLogoUrl: this.state.breweryLogoUrl,
      websiteUrl: this.state.websiteUrl,
      userId: this.state.userId,
      hours: this.state.hours,
      lat: this.state.lat,
      lng: this.state.lng,
    };

    fetch(baseUrl + "/breweries", {
      method: "PUT",
      body: JSON.stringify(breweryObject),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    });
    this.props.updateBrewery(breweryObject);
    this.props.history.push("/mybrewery");

    console.log(breweryObject);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    this.setState({
      visible: false,
    });

    this.putNewBrewery();
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div
          className={
            this.props.user.userId !== this.state.breweryOwnerId
              ? "hidden"
              : "center "
          }
        >
          <Button type="primary" onClick={this.showModal}>
            Update Brewery
          </Button>
        </div>
        <Modal
          title="Update your Brewery's Information"
          visible={this.state.visible}
          onOk={this.submitHandler}
          onCancel={this.handleCancel}
          okText="Submit"
          cancelText="Cancel"
        >
          <div>
            <Form>
              <Form.Item label="Brewery Name">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="Brewery Name"
                />
              </Form.Item>
              <Form.Item label="Address">
                <Input
                  type="text"
                  id="address"
                  name="address"
                  onChange={(e) => this.setState({ address: e.target.value })}
                  placeholder="Address"
                />
              </Form.Item>
              <Form.Item label="City">
                <Input
                  type="text"
                  id="city"
                  name="city"
                  onChange={(e) => this.setState({ city: e.target.value })}
                  placeholder="City"
                />
              </Form.Item>
              <Form.Item label="Zip Code">
                <Input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  onChange={(e) => this.setState({ zipcode: e.target.value })}
                  placeholder="Zip Code"
                />
              </Form.Item>
              <Form.Item label="Phone Number">
                <Input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={(e) =>
                    this.setState({ phoneNumber: e.target.value })
                  }
                  placeholder="Phone Number"
                />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea
                  type="text"
                  id="description"
                  name="description"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  placeholder="Description"
                />
              </Form.Item>
              <Form.Item label="Logo Url">
                <Input
                  type="text"
                  id="breweryLogoUrl"
                  name="breweryLogoUrl"
                  onChange={(e) =>
                    this.setState({ breweryLogoUrl: e.target.value })
                  }
                  placeholder="Url"
                />
              </Form.Item>
              <Form.Item label="Website">
                <Input
                  type="text"
                  id="website"
                  name="website"
                  onChange={(e) => this.setState({ website: e.target.value })}
                  placeholder="Website"
                />
              </Form.Item>
              <Form.Item label="Hours">
                <Input
                  type="text"
                  id="hours"
                  name="hours"
                  onChange={(e) => this.setState({ hours: e.target.value })}
                  placeholder="hours"
                />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(UpdateBrewery));
