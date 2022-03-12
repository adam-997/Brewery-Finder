import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const getRole = (authority) => {
  return <p>{authority}</p>;
};

const MyBrewery = (props) => {
  const roleMap = props.user.authorities.map((role) => {
    const authority = role.name;
    return getRole(authority);
  });

  return (
    <div>
      <h1>Hello World</h1>
      <p>{props.user.userId}</p>
      <p>{props.user.username}</p>
      <p>{roleMap}</p>

      {console.log(props.user)}
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(MyBrewery));
