import React, { Component, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Shared/baseUrl";
import { Modal, Button } from "antd";

function ModalForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Review
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <PostReviews />
      </Modal>
    </>
  );
}

class PostReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      beerId: this.props.beerId.beerId,
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
  };

  render() {
    const { name, rating, description } = this.state;
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

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostReviews;
