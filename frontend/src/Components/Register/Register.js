import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import { Form, Input, Button, Checkbox } from "antd";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBrewer, setIsBrewer] = useState(false);

  const handleSubmit = () => {
    if (isBrewer === false) {
      const data = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        role: "ROLE_USER",
      };

      if (password === confirmPassword) {
        axios.post(baseUrl + "/register", data);
      }
    }
    if (isBrewer === true) {
      const data = {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        role: "ROLE_BREWER",
      };

      if (password === confirmPassword) {
        axios.post(baseUrl + "/register", data);
      }
    }
  };

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
      ></div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Create Account</h1>
        </div>
        <Form.Item
          label="Username"
          type="text"
          id="username"
          name="username"
          class="form-control"
          placeholder="Username"
          v-model="user.username"
          onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Input>
        </Form.Item>

        <Form.Item
          label="Password"
          type="password"
          id="password"
          name="password"
          class="form-control"
          placeholder="Password"
          v-model="user.password"
          onChange={(e) => setPassword(e.target.value)}
          required
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Password"
            v-model="user.password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          type="password"
          id="password-confirm"
          name="password-confirm"
          class="form-control"
          placeholder="Confirm Password"
          v-model="user.password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input
            type="password"
            id="password-confirm"
            name="password-confirm"
            class="form-control"
            placeholder="Confirm Password"
            v-model="user.password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></Input>
        </Form.Item>
        <Form.Item
          name="isBrewer"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox onChange={(e) => setIsBrewer(true)}>I am a Brewer</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={handleSubmit}>
            Register
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/login">Have an account?</Link>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Register;
