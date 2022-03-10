import React, { Component } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home";
import { addToken, deleteUser } from "../../Redux/actionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import icon from "../../image/Logo3.png";
import BreweryCard from "../Breweries/Breweries";
import Brewer from "../Breweries/Brewer";
import Beer from "../Breweries/Beer";

const { Header, Content, Footer } = Layout;

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToken: () => {
    dispatch(addToken());
  },
  deleteUser: () => {
    dispatch(deleteUser());
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = () => {
    this.props.addToken("");
    this.props.deleteUser();
  };

  render() {
    return (
      <div>
        {this.props.token.token !== undefined ? (
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <div className="logo" src={icon}></div>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="2">
                  <NavLink to="/home">Home </NavLink>
                </Menu.Item>
                <Menu.Item key="1">
                  {" "}
                  <NavLink to="/login" onClick={this.handleLogout}>
                    logout
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <NavLink to="/breweries">Breweries </NavLink>
                </Menu.Item>
              </Menu>
              <Redirect to="/home" />
            </Header>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            ></Content>
          </Layout>
        ) : (
          <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="2">
                  <NavLink to="/home" activeClassName="active">
                    Home{" "}
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Header>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            ></Content>
          </Layout>
        )}
        <Switch>
          <Route exact path="/breweries/:id" component={Brewer} />
          <Route path="/beers/:id" component={Beer} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route
            path="/breweries"
            component={
              this.props.token.token !== undefined
                ? () => <BreweryCard />
                : null
            }
          />

          <Route
            path="/home"
            component={
              this.props.token.token !== undefined ? () => <Home /> : null
            }
          />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
