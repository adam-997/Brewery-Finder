import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const Test = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{props.user.username}</p>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(Test));
