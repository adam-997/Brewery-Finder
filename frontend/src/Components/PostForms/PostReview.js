import React, { Component, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";
import { Modal, Button } from "antd";

class PostReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      beerId: this.props.beerId,
      rating: "",
      description: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(baseUrl + "/reviews", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      visible: false,
    });
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
    console.log(this.state.beerId);
    const { name, rating, description } = this.state;

    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Add your own review
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.submitHandler}
          onCancel={this.handleCancel}
          okText="Submit"
          cancelText="Cancel"
        >
          <div>
            <form>
              <div>
                <label>title: </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.changeHandler}
                />
              </div>
              <div>
                <label>rating: </label>
                <input
                  type="text"
                  name="rating"
                  value={rating}
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
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default PostReviews;
