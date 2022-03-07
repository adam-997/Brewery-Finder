import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addToken, addUser } from "../../Redux/actionCreators";
import { baseUrl } from "../../Shared/baseUrl";
import axios from "axios";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  Statistic,
} from "antd";
const { Title } = Typography;

const mapDispatchToProps = (dispatch) => ({
  addToken: () => dispatch(addToken()),
  addUser: () => dispatch(addUser()),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleLogin = async () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    const userWithToken = await axios.post(baseUrl + "/login", data);

    await this.props.dispatch(addToken(userWithToken.data.token));
    await this.props.dispatch(addUser(userWithToken.data.user));
  };

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1> Please Sign In </h1>
        </div>
        <Form.Item
          label="Username"
          type="text"
          id="username"
          name="username"
          class="form-control"
          placeholder="Username"
          v-model="user.username"
          onChange={this.handleInputChange}
          required
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            type="text"
            id="username"
            name="username"
            class="form-control"
            placeholder="Username"
            v-model="user.username"
            onChange={this.handleInputChange}
            required
          />
        </Form.Item>
        <Form.Item
          label="Password"
          type="password"
          id="password"
          name="password"
          class="form-control"
          placeholder="Password"
          v-model="user.password"
          onChange={this.handleInputChange}
          required
          rules={[
            {
              required: true,
              message: "Please input your Password",
            },
          ]}
        >
          <Input.Password
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Password"
            v-model="user.password"
            onChange={this.handleInputChange}
            required
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={this.handleLogin}>
            Sign in
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/register">Need an account?</Link>
        </Form.Item>
      </Form>
    );
  }
}

export default withRouter(connect(mapDispatchToProps)(Login));
