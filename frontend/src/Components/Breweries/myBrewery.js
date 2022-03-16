import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { baseUrl } from "../../Shared/baseUrl";
import { Row, Col, Typography, Layout, Breadcrumb } from "antd";
import { RenderBreweryCard } from "./Breweries";

const { Title } = Typography;
const { Content } = Layout;

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

class MyBrewery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: [],
    };
  }

  componentDidMount() {
    fetch(baseUrl + `/users/${this.props.user.userId}/breweries`)
      .then((res) => res.json())
      .then((res) => this.setState({ breweries: res }));
  }

  render() {
    console.log(this.props.user);

    const brewerMap = this.state.breweries.map((brewer) => {
      return (
        <Col
          xs={24}
          sm={12}
          lg={8}
          className="brewery-card"
          key={brewer.breweryId}
        >
          <RenderBreweryCard
            brewery={brewer}
            key={brewer.breweryId}
            breweryId={brewer.breweryId}
            breweryLogoUrl={brewer.breweryLogoUrl}
            name={brewer.name}
            address={brewer.address}
            description={brewer.description}
            website={brewer.websiteUrl}
          />
        </Col>
      );
    });
    return (
      <div>
        <Layout>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 30 }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <NavLink to="/home">Home</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>My Breweries</Breadcrumb.Item>
            </Breadcrumb>
          </Content>{" "}
        </Layout>
        <Title
          level={2}
          className="heading"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          My Breweries
        </Title>{" "}
        <div className="brewery-card">
          <Row gutter={[32, 32]} className="brewery-card-container">
            {" "}
            {brewerMap}{" "}
          </Row>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(MyBrewery));
