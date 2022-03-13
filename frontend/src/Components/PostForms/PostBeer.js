import React, { Component } from "react";
import { baseUrl } from "../../Shared/baseUrl";
import { connect } from "react-redux";

import { Modal, Form, Input, Button } from "antd";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

class PostBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      breweryId: this.props.breweryId,
      breweryOwnerId: this.props.breweryOwnerId,
      imgUrl: "",
      info: "",
      abv: "",
      type: "",
      ibu: 4.2,
      active: true,
      userId: 1,
    };
  }

  postNewBeer() {
    const BeerObject = {
      info: this.state.info,
      breweryId: this.state.breweryId,
      userId: this.state.userId,
      beerId: this.state.beerId,
      abv: Number(this.state.abv),
      type: this.state.type,
      name: this.state.name,
      active: this.state.active,
      ibu: this.state.ibu,
    };

    fetch(baseUrl + "/addBeer", {
      method: "POST",
      body: JSON.stringify(BeerObject),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    });
    this.props.updateBeer(BeerObject);
    this.setState({
      visible: false,
    });
    console.log(BeerObject);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    this.setState({
      visible: false,
    });
    this.postNewBeer();
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
            this.state.breweryOwnerId !== this.props.user.userId
              ? "hidden"
              : "center "
          }
        >
          <Button type="primary" onClick={this.showModal}>
            Add New Beer
          </Button>
        </div>

        <Modal
          title="Add Beer"
          visible={this.state.visible}
          onOk={this.submitHandler}
          onCancel={this.handleCancel}
          okText="Submit"
          cancelText="Cancel"
        >
          <div>
            <Form>
              <Form.Item label="Name">
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item label="Type">
                <Input
                  type="text"
                  id="type"
                  name="type"
                  onChange={(e) => this.setState({ type: e.target.value })}
                  required
                  placeholder="Type"
                />
              </Form.Item>
              <Form.Item label="Alcohol by volume">
                <Input
                  type="text"
                  id="abv"
                  name="abv"
                  onChange={(e) => this.setState({ abv: e.target.value })}
                  required
                  placeholder="Alcohol by volume"
                />
              </Form.Item>
              <Form.Item label="Description">
                <Input.TextArea
                  name="description"
                  id="description"
                  cols="50"
                  rows="6"
                  placeholder="Description"
                  onChange={(e) => this.setState({ info: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="Image Url">
                <Input
                  type="text"
                  id="imgUrl"
                  name="imgUrl"
                  onChange={(e) => this.setState({ imgUrl: e.target.value })}
                  required
                  placeholder="Image Url"
                />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(PostBeer));
