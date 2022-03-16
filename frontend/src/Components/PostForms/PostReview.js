import React, { Component } from "react";
import { baseUrl } from "../../Shared/baseUrl";
import { Modal, Form, Input, Button, Radio } from "antd";

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
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Add your own review
        </Button>
        <Modal
          title="Add Review"
          visible={this.state.visible}
          onOk={this.submitHandler}
          onCancel={this.handleCancel}
          okText="Submit"
          cancelText="Cancel"
        >
          <div>
            <Form>
              <Form.Item label="Title">
                <Input
                  type="text"
                  id="title"
                  name="title"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  required
                  placeholder="Title"
                />
              </Form.Item>
              <br />
              <Form.Item label="Body">
                <Input.TextArea
                  name="description"
                  id="description"
                  cols="50"
                  rows="6"
                  placeholder="Review"
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                />
              </Form.Item>
              <Form.Item label="Rating">
                <Radio.Group
                  name="rating"
                  id="rating"
                  onChange={(e) => this.setState({ rating: e.target.value })}
                >
                  <Radio value={1}>1</Radio>
                  <Radio value={2}>2</Radio>
                  <Radio value={3}>3</Radio>
                  <Radio value={4}>4</Radio>
                  <Radio value={5}>5</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default PostReviews;
