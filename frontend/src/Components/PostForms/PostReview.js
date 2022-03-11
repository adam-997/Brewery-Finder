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

  postNewComment() {
    const reviewObject = {
      description: this.state.description,
      userId: 1,
      beerId: this.state.beerId,
      rating: Number(this.state.rating),
      createDate: null,
      name: this.state.name,
    };
    fetch(baseUrl + "/reviews", {
      method: "POST",
      body: JSON.stringify(reviewObject),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "same-origin",
    });
    this.props.updateReviews(reviewObject);
    this.setState({
      visible: false,
    });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    // e.preventDefault();
    // console.log(this.state);
    // axios
    //   .post(baseUrl + "/reviews", this.state)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.setState({
      visible: false,
    });
    this.postNewComment();
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
              <label>Title</label> <br />{" "}
              <input
                type="text"
                id="title"
                name="title"
                onChange={(e) => this.setState({ name: e.target.value })}
                required
              />{" "}
              <br /> <label>Description</label> <br />{" "}
              <textarea
                name="description"
                id="description"
                cols="50"
                rows="6"
                onChange={(e) => this.setState({ description: e.target.value })}
              ></textarea>{" "}
              <br /> <label>Rating</label> <br />{" "}
              <input
                type="number"
                id="rating"
                name="rating"
                onChange={(e) => this.setState({ rating: e.target.value })}
              />
            </form>
          </div>
        </Modal>
      </>
    );
  }
}

export default PostReviews;
